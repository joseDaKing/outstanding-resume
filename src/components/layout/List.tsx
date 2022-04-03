import {
    DndContext,
    DndContextProps, 
    DragEndEvent, 
    DragStartEvent,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragOverlay,
    defaultDropAnimation,
    useDndContext,
} 
from "@dnd-kit/core";

import { 
    restrictToFirstScrollableAncestor, 
    restrictToVerticalAxis,
    restrictToWindowEdges
}
from "@dnd-kit/modifiers";

import {
    arrayMove,
    useSortable,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy
} 
from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import { 
    IconButton, 
    IconToggle
}
from "components/form";

import { 
    ListItemType,
    useItemsController,
    useValue, 
    UseValueProps
}
from "helpers";

import { 
    createContext, 
    PropsWithChildren, 
    useContext, 
    useEffect, 
    useState 
}
from "react";

import { 
    DragHandleDots1Icon, 
    TrashIcon 
}
from "@radix-ui/react-icons";

import { Box } from "../layout";



export type ListProps<T extends ListItemType> = (
    UseValueProps<T[]> 
    & Pick<
        DndContextProps,
        | "onDragStart"
        | "onDragMove"
        | "onDragOver"
        | "onDragEnd"
        | "onDragCancel"
    > 
    & {
        children: React.FC<T & { index: number; }>;
    }
);

const ListRemoveHandlerContext = createContext<() => void>(() => {});

export function List<T extends ListItemType>(props: PropsWithChildren<ListProps<T>>) {

    const {
        children: Renderer,
        value,
        defaultValue,
        onValueChange,
        onDragStart,
        onDragMove,
        onDragOver,
        onDragEnd,
        onDragCancel,
    } = props;

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const stateValue = useValue({
        initialValue: [],
        value,
        defaultValue,
        onValueChange
    });

    const itemsController = useItemsController(stateValue);

    const [ state, setState ] = stateValue;

    const [ activeId, setActiveId ] = useState<string|null>(null);

    const dragStartHandler = (event: DragStartEvent) => {

        setActiveId(event.active.id);

        if (onDragStart) {

            onDragStart(event);
        }
    }

    const dragEndHandler = (event: DragEndEvent) => {

        setActiveId(null);

        if (onDragEnd) {

            onDragEnd(event);
        }

        if (event.active.id !== event.over?.id) {

            setState(prevState => {

                const prevIndex = prevState.findIndex(item => item.id === event.active?.id);

                const newIndex = prevState.findIndex(item => item.id === event.over?.id);

                return arrayMove(prevState, prevIndex, newIndex);
            });
        }
    }

    const activeIndex = itemsController.findPosition(activeId);

    const activeItem = itemsController.find(activeId);

    const removeHandler = (item: T) => () => itemsController.remove(item);

    return (
        <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={dragStartHandler}
        onDragEnd={dragEndHandler}
        onDragMove={onDragMove}
        onDragOver={onDragOver}
        onDragCancel={onDragCancel}
        modifiers={[
            restrictToFirstScrollableAncestor,
            restrictToVerticalAxis,
            restrictToWindowEdges
        ]}>
            
            <SortableContext 
            strategy={verticalListSortingStrategy}
            items={state}>
                {state.map((item, index) => (
                    <ListRemoveHandlerContext.Provider
                    key={item.id}
                    value={removeHandler(item)}>
                        <ListItemContainer 
                        value={item.id}>
                            <Renderer
                            {...item}
                            index={index}/>
                        </ListItemContainer>
                    </ListRemoveHandlerContext.Provider>
                ))}
            </SortableContext>

            <Box 
            as={DragOverlay}
            dropAnimation={defaultDropAnimation}
            css={{
                position: "relative",
                zIndex: "$0",
                transition: "$200",
                transitionProperty: "opacity"
            }}>
                {activeItem &&
                <Renderer
                {...activeItem}
                index={activeIndex}/>}
            </Box>
        </DndContext>
    );
}



const ListItemContainerContext = createContext<ReturnType<typeof useSortable>|null>(null);

type ListItemContainerProps = {
    value: string;
}

const ListItemContainer: React.FC<ListItemContainerProps> = props => {

    const sortableProps = useSortable({
        id: props.value
    });
   
    const style: React.CSSProperties = {
        transform: CSS.Transform.toString(sortableProps.transform),
        transition: sortableProps.transition,
    };

    return (
        <ListItemContainerContext.Provider
        value={sortableProps}>
            <Box
            style={style}
            css={{
                zIndex: "$10",
                position: "relative",
                opacity: sortableProps.isDragging ? 0 : 1
            }}
            ref={sortableProps.setNodeRef}>
                {props.children}
            </Box>
        </ListItemContainerContext.Provider>
    );
}



export type ListItemProps = ListItemContainerProps & {
    deletable?: boolean;
}

export const ListItem: React.FC<ListItemProps> = props => {

    const sortableProps = useContext(ListItemContainerContext);

    const isActive = useIsActive(props.value);

    const { attributes, listeners } = sortableProps ?? {};

    const remove = useContext(ListRemoveHandlerContext);

    useEffect(() => {

        if (isActive) {

            document.body.style.cursor = "grab"
        }
        else {

            document.body.style.cursor = "inherit";
        }

    }, [isActive]);

    return (
        <Box
        css={{
            position: "relative",
            opacity: isActive ? 0.5 : 1,
            [`& > .list-button`]: {
                transition: "$200",
                opacity: isActive ? 1 : 0,
                position: "absolute",
                top: 0
            },
            [`&:hover,&:focus-within`]: {
                [`& > .list-button`]: {
                    opacity: 1
                }
            }
        }}>
            <Box
            className="list-button"
            css={{
                left: 0,
                padding: "$2",
                transformTranslateX: "-100%",
                cursor: "grab"
            }}>
                <IconToggle
                {...listeners}
                {...attributes}
                variant="text"
                Icon={DragHandleDots1Icon}
                value={isActive}
                css={{
                    cursor: "inherit"
                }}/>
            </Box>

            <div>
                {props.children} {isActive}
            </div>

            {props.deletable &&
            <Box
            className="list-button"
            css={{
                right: 0,
                padding: "$2",
                transformTranslateX: "100%",
            }}>
                <IconButton
                onClick={remove}
                variant="text"
                color="danger"
                Icon={TrashIcon}/>
            </Box>}
        </Box>
    );
}

function useIsActive(id: string): boolean {

    const context = useDndContext();

    const isDragging = context.active?.id === id;

    return isDragging;
}
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
    useValue, 
    UseValueProps
}
from "helpers";

import { 
    createContext, 
    PropsWithChildren, 
    useContext, 
    useRef, 
    useState 
}
from "react";

import { 
    DragHandleDots1Icon, 
    TrashIcon 
}
from "@radix-ui/react-icons";

import { Box } from "../layout";



export type ListItemType = { id: string; };

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

    const [ state, setState ] = useValue({
        initialValue: [],
        value,
        defaultValue,
        onValueChange
    });

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

    const activeIndex = state.findIndex(item => item.id === activeId);

    const activeItem = state[activeIndex];

    const remove = (id: string) => () => setState(prevState => prevState.filter(item => item.id !== id))

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
                    value={remove(item.id)}>
                        <ListItemContainer 
                        key={index}
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
                position: "relative",
                zIndex: "$10",
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

    const toggleRef = useRef<HTMLButtonElement|null>(null);

    return (
        <Box
        css={{
            position: "relative",
            opacity: isActive ? "$80" : 1,
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
            }}>
                <IconToggle
                {...listeners}
                {...attributes}
                ref={toggleRef}
                variant="text"
                Icon={DragHandleDots1Icon}
                value={isActive}/>
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
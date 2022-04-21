import { 
    useSortable, 
    SortableContext,
    sortableKeyboardCoordinates, 
    verticalListSortingStrategy,
    arrayMove,
}
from "@dnd-kit/sortable";

import { 
    closestCenter, 
    DndContext, 
    KeyboardSensor, 
    PointerSensor, 
    useSensor, 
    useSensors,
    DndContextProps,
    DragOverlay
}
from "@dnd-kit/core";

import {  
    restrictToVerticalAxis,
    restrictToParentElement
}
from "@dnd-kit/modifiers";

import { CSS } from "@dnd-kit/utilities";

import { 
    createContext,
    useContext, 
    forwardRef, 
    useState
} 
from "react";

import { 
    ListItemType, 
    useValue, 
    UseValueProps
}
from "helpers";

import { CSSProps } from "types";

import { Box } from "./Box";

import { 
    IconButton, 
    IconToggle
}
from "components/form";

import { 
    DragHandleDots1Icon, 
    TrashIcon
}
from "@radix-ui/react-icons";

import { stitches, ThemedCSS } from "stitches";



type ListContextType = { 
    remove?: () => void;
};

const ListContext = createContext<ListContextType>({});



type ListItemContextType = {
    isDragging?: boolean;
    listenerProps?: any;
    removeProps?: any;
}

const ListItemContext = createContext<ListItemContextType>({});

export const useIsDragging = () => {

    const listItemContext = useContext(ListItemContext);

    return !!listItemContext.isDragging;
}



export type ListItemHandlerProps = Omit<JSX.IntrinsicElements["button"], "ref"> & CSSProps;

export const ListItemDragHandler = forwardRef<HTMLButtonElement, ListItemHandlerProps>((props, ref) => {

    const {
        isDragging = false,
        listenerProps = {}
    } = useContext(ListItemContext)

    return (
        <IconToggle
        {...props}
        {...listenerProps}
        round
        ref={ref}
        variant="text"
        value={isDragging}
        Icon={DragHandleDots1Icon}/>
    );
});

export const ListItemRemoveHandler = forwardRef<HTMLButtonElement, ListItemHandlerProps>((props, ref) => {

    const { removeProps = {} } = useContext(ListItemContext);

    return (
        <IconButton
        {...props}
        {...removeProps}
        round
        ref={ref}
        color="danger"
        variant="text"
        Icon={TrashIcon}/>
    );
});

const ListItemHandlerContainer = stitches.styled("div", {
    position: "absolute",
    top: 0,
    opacity: 0,
    transition: "$150",
    transitionProperty: "opacity",
    variants: {
        side: {
            left: {
                left: 0,
                transformTranslateX: "-$full",
                paddingRight: "$2"
            },
            right: {
                right: 0,
                transformTranslateX: "$full",
                paddingLeft: "$2"
            }
        }
    }
});

ListItemHandlerContainer.displayName = "ListItemHandlerContainer";



const StyleListItemContent = stitches.styled("div", {
    position: "relative",
    hover: {
        [`& > ${ListItemHandlerContainer}`]: {
            opacity: 1
        }   
    },
    focusWithin: {
        [`& > ${ListItemHandlerContainer}`]: {
            opacity: 1
        }   
    }
});

StyleListItemContent.displayName = "StyleListItemContent";

export type ListItemContentProps = Omit<JSX.IntrinsicElements["div"], "ref"> & CSSProps & {
    removeable?: boolean; 
};

export const ListItemContent = forwardRef<HTMLDivElement, ListItemContentProps>(({ removeable, ...props }, ref) => {

    return (
        <StyleListItemContent
        {...props}
        ref={ref}>
            <ListItemHandlerContainer
            side="left">
                <ListItemDragHandler/>
            </ListItemHandlerContainer>

            {props.children}

            {removeable &&
            <ListItemHandlerContainer
            side="right">
                <ListItemRemoveHandler/>
            </ListItemHandlerContainer>}
        </StyleListItemContent>
    );
});



const ListItem: React.FC<ListItemType> = props => {

    const sortableProps = useSortable({
        id: props.id
    });

    const style = {
        transform: CSS.Transform.toString(sortableProps.transform),
        transition: sortableProps.transition
    }; 

    const { remove = () => {} } = useContext(ListContext);

    return (
        <ListItemContext.Provider
        value={{
            removeProps: {
                onClick: remove,
            },
            isDragging: sortableProps.isDragging,
            listenerProps: {
                ...sortableProps.listeners,
                ...sortableProps.attributes
            },                
        }}>
            <Box 
            ref={sortableProps.setNodeRef}
            style={style}
            css={{
                zIndex: "$0",
                position: "relative",
                opacity: sortableProps.isDragging ? 0 : 1,
            }}>
                {props.children}
            </Box>
        </ListItemContext.Provider>
    );
};

type ListItemRenderer<T> = (item: T, index: number, array: T[]) => React.ReactNode;

type ListProps<T> = (
    UseValueProps<T[]> 
    & Pick<
        DndContextProps,
        "onDragCancel"
        | "onDragEnd"
        | "onDragMove"
        | "onDragOver"
        | "onDragStart"
    >
    & {
        space?: ThemedCSS["paddingBottom"];
        children: ListItemRenderer<T>;
    }
);

export function List<T extends ListItemType>(props: ListProps<T>) {

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    );

    const {
        space,
        onDragCancel,
        onDragEnd,
        onDragMove,
        onDragOver,
        onDragStart,
        value,
        defaultValue,
        onValueChange
    } = props;

    const [ state, setState ] = useValue({
        initialValue: [],
        value,
        defaultValue,
        onValueChange
    });

    const [ active, setActive ] = useState<string>("");

    const onDragStartHandler: DndContextProps["onDragStart"] = event => {

        setActive(event.active.id);

        if (onDragStart) {

            onDragStart(event);
        }
    }

    const onDragEndHandler: DndContextProps["onDragEnd"] = event => {
        
        setActive("");

        const { active, over } = event;

        if (active.id !== over?.id) {
        
            setState(state => {
                
                const oldIndex = state.findIndex(({ id }) => id === active.id);
                
                const newIndex = state.findIndex(({ id }) => id === over?.id);
                
                return arrayMove(state, oldIndex, newIndex);
            });
        }

        if (onDragEnd) {

            onDragEnd(event);
        }
    } 

    const activeItem = state.find(({ id }) => id === active);

    const activeIndex = state.findIndex(({ id }) => id === active);

    const createRemove = (id: string) => () =>setState(prevState => prevState.filter(item => item.id !== id));

    return (
        <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[
            restrictToVerticalAxis,
            restrictToParentElement
        ]}
        onDragStart={onDragStartHandler}
        onDragEnd={onDragEndHandler}
        onDragMove={onDragMove}
        onDragOver={onDragOver}
        onDragCancel={onDragCancel}>
            <SortableContext
            items={state}
            strategy={verticalListSortingStrategy}>
                <Box>
                    {state.map((item, index, array) => (
                        <ListContext.Provider
                        key={item.id}
                        value={{
                            remove: createRemove(item.id)
                        }}>
                            {index !== 0 &&
                            <Box
                            css={{
                                marginBottom: space,
                                backgroundColor: "red"
                            }}/>}
                            
                            <ListItem 
                            id={item.id}>
                                {props.children(item, index, array)}
                            </ListItem>
                        </ListContext.Provider>
                    ))}
                </Box>
            </SortableContext>

            <DragOverlay>
                {activeItem &&
                <ListItemContext.Provider
                value={{
                    isDragging: true
                }}>
                    <Box
                    css={{
                        opacity: 0.7,
                        zIndex: "$10",
                        position: "relative",
                        [`& ${StyleListItemContent}`]: {
                            [`& > ${ListItemHandlerContainer}`]: {
                                opacity: 1
                            }
                        }
                    }}>
                        {props.children(activeItem, activeIndex, state)}
                    </Box>
                </ListItemContext.Provider>}
            </DragOverlay>
        </DndContext>
    );
}
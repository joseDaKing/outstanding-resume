import {
    DndContext, 
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    DragEndEvent,
    MeasuringStrategy,
    DragOverlay as DNDDragOverlay,
    DragStartEvent,
    defaultDropAnimation,
    DndContextProps,
} 
from "@dnd-kit/core";
  
import {
    arrayMove,
    useSortable,
    SortableContext,
    sortableKeyboardCoordinates,
    verticalListSortingStrategy,
    defaultAnimateLayoutChanges
}
from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import { 
    restrictToVerticalAxis,
    restrictToFirstScrollableAncestor
} 
from "@dnd-kit/modifiers";

import {
    useValue,
    UseValueProps,
} 
from "helpers";

import { 
    forwardRef, 
    createContext,
    useContext,
    PropsWithChildren,
    useState,
    ReactNode, 
}
from "react";

import mergeRefs from "react-merge-refs";



export type BaseItemProps = {
    id: string;
}

export type ItemsProps<T> = (
    Omit<
        JSX.IntrinsicElements["div"], 
        "ref" 
        | "value" 
        | "defaultValue" 
        | "onChange"
        | "onDragCancel"
        | "onDragEnd"
        | "onDragMove"
        | "onDragOver"
        | "onDragStart"
    > 
    & UseValueProps<T[]> 
    & Pick<
        DndContextProps,
        "onDragCancel"
        | "onDragEnd"
        | "onDragMove"
        | "onDragOver"
        | "onDragStart"
    >
    & {
        render: (item: T & { index: number; }) => JSX.Element | undefined; 
    }
);

const DragOverlayContext = createContext<ReactNode>(null);

const RemoveHandlerContext = createContext<(() => void) | null>(null);

export function Items<T extends BaseItemProps>(props: PropsWithChildren<ItemsProps<T>>) {

    const {
        render,
        value,
        defaultValue,
        onValueChange,
        onDragCancel,
        onDragEnd,
        onDragMove,
        onDragOver,
        onDragStart,
    } = props;

    const [ state, setState ] = useValue({
        initialValue: [],
        value,
        defaultValue,
        onValueChange
    });

    const [ activeId, setActiveId ] = useState<string | null>(null);
    
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        })
    );

    const handleDragEnd = (event: DragEndEvent) => {
    
        if (onDragEnd) {

            onDragEnd(event);
        }

        setActiveId(null);

        const { active, over } = event;

        if (over && active.id !== over.id) {
          
            setState(prevState => {
        
                const prevIndex = prevState.findIndex(({ id }) => id === active.id);
                
                const newIndex = prevState.findIndex(({ id }) => id === over.id);
            
                if (-1 < prevIndex && -1 < newIndex) {

                    return arrayMove(prevState, prevIndex, newIndex);
                }

                return prevState;
            });
        }
    }

    const handleDragStart = (event: DragStartEvent) => {

        if (onDragStart) {

            onDragStart(event);
        }

        setActiveId(event.active.id);
    }

    const activeIndex = state.findIndex(({ id }) => id === activeId);

    const activeItem = state[activeIndex];

    const removeHandler = (id: string) => () => {

        setState(prevState => {

            return prevState.filter(item => item.id !== id);
        });
    }

    return (   
        <DndContext
        measuring={{
            droppable: {
                strategy: MeasuringStrategy.Always
            }
        }}
        modifiers={[
            restrictToVerticalAxis,
            restrictToFirstScrollableAncestor
        ]}
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragCancel={onDragCancel}
        onDragMove={onDragMove}
        onDragOver={onDragOver}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}>
            <SortableContext 
            items={state}
            strategy={verticalListSortingStrategy}>
                
                {state.map((item, index) => (
                    <RemoveHandlerContext.Provider
                    key={index}
                    value={removeHandler(item.id)}>
                        {render({
                            ...item,
                            index
                        })}
                    </RemoveHandlerContext.Provider>
                ))}

                <DragOverlayContext.Provider
                value={activeId && render({
                    ...activeItem,
                    index: activeIndex
                })}>
                    {props.children}
                </DragOverlayContext.Provider>
            </SortableContext>
        </DndContext>
    );
}



export type DragOverlayProps = Omit<JSX.IntrinsicElements["div"], "ref">;

export const DragOverlay = forwardRef<HTMLDivElement, DragOverlayProps>((props, ref) => {

    const dragOverlayContent = useContext(DragOverlayContext);

    return (
        <DNDDragOverlay
        dropAnimation={defaultDropAnimation}>
            <div 
            ref={ref}
            {...props}>
                {dragOverlayContent}
            </div>
        </DNDDragOverlay>
    );
});



const DragHandlerContext = createContext<ReturnType<typeof useSortable>|undefined>(undefined);

export type ItemProps = Omit<JSX.IntrinsicElements["div"], "ref"> & {
    value: string;
}

export const Item = forwardRef<HTMLDivElement, ItemProps>((props, ref) => {

    const {
        style: htmlStyle,
        value,
        ...htmlProps
    } = props;

    const sortableProps = useSortable({ 
        id: value,
        animateLayoutChanges: args => {
            
            if (args.isSorting || args.wasDragging) {
            
                return defaultAnimateLayoutChanges(args);
            }
              
            return true;
        }
    });

    const {
        isDragging,
        isOver,
        isSorting,
        setNodeRef,
        transform,
        transition,
    } = sortableProps;

    const style = {
        ...htmlStyle,
        transform: CSS.Transform.toString(transform),
        transition,
    } as const;
    
    const dataAttributesProps = dataAttributeProps({
        isDragging,
        isSorting,
        isOver
    });

    return (
        <DragHandlerContext.Provider 
        value={sortableProps}>
            <div 
            ref={mergeRefs([
                setNodeRef,
                ref
            ])}
            style={style}
            {...dataAttributesProps}
            {...htmlProps}>
                {props.children}
            </div>
        </DragHandlerContext.Provider>
    );
});



export type RemoveHandlerProps = Omit<JSX.IntrinsicElements["div"], "ref">;

export const RemoveHandler = forwardRef<HTMLDivElement, RemoveHandlerProps>((props, ref) => {

    const removeHandler = useContext(RemoveHandlerContext);

    return (
        <div
        {...props}
        onClick={event => {

            if (removeHandler) {

                removeHandler();
            }

            if (props.onClick) {

                props.onClick(event);
            }
        }}
        ref={ref}>
            {props.children}
        </div>
    );
});



export type DragHandlerProps = Omit<JSX.IntrinsicElements["div"], "ref">;

export const DragHandler = forwardRef<HTMLDivElement, DragHandlerProps>((props, ref) => {

    const sortabelProps = useContext(DragHandlerContext);

    if (!sortabelProps) {

        throw new Error("SortableDragHandler component must be inside SortableItem");
    }

    const { 
        listeners,
        isDragging,
        isOver,
        isSorting,
        attributes
    } = sortabelProps;

    const dataAttributes = dataAttributeProps({ isDragging, isOver, isSorting });

    return (
        <div 
        ref={ref}
        {...dataAttributes}
        {...props}
        {...listeners}
        {...attributes}>
            {props.children}
        </div>
    );
});

type SortableDataAttributes = {
    isDragging: boolean;
    isSorting: boolean;
    isOver: boolean;
}

function dataAttributeProps({ isDragging, isOver, isSorting }: SortableDataAttributes) {

    let dataState: string | undefined;
    
    if (isDragging) {

        dataState = "dragging";
    }
    else if (isOver) {

        dataState = "over";
    }
    else if (isSorting) {

        dataState = "sorting";
    }

    return {
        "data-state": dataState
    }
}
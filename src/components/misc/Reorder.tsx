import React, { useCallback } from "react";

import { IID, IIndex, InteractiveComponent } from "../../types";

import { createContext, useContext } from "react";

import { Box } from "../layout";

import { DragDropContext, DropResult, Droppable, Draggable } from "react-beautiful-dnd";

import { css } from "../../stitches";

import { useId } from "../../utilities";

interface IReorderItemContext {
    dragHandlerProps: any;
    containerProps: any;
    isDragging: boolean;
}

const ReorderItemContext = createContext<IReorderItemContext|null>(null);

export const useReorderItem = (): IReorderItemContext => {

    const reorderItem = useContext(ReorderItemContext);

    if (!reorderItem) {

        throw new Error("The hook must be used inside the ReorderItemRenderer");
    }

    return reorderItem;
}

const draggingStyles = css({
    position: "relative",
    zIndex: "$40",
    opacity: "$100",
    boxShadow:"none",
    marginTop: "$2",
    variants: {
        isDragging: {
            true: {
                opacity: "$100",
                boxShadow: "$lg",
                zIndex: "$50"
            }
        }
    }
});

type ReorderItemProps = IID & IIndex;

const ReorderItem: React.FC<ReorderItemProps> = ({ id, index, children }) => {

    return (
        <Draggable 
        index={index}
        draggableId={id}>
            {(provided, snapshot) => {

                const className = draggingStyles({ 
                    isDragging: snapshot.isDragging
                });

                return (
                    <ReorderItemContext.Provider
                    value={{
                        containerProps: {
                            ref: provided.innerRef,
                            className,
                            ...provided.draggableProps
                        },
                        dragHandlerProps: provided.dragHandleProps,
                        isDragging: snapshot.isDragging
                    }}>
                        {children}
                    </ReorderItemContext.Provider>
                );
            }}
        </Draggable>
    );
}

interface IReorderProps<T extends IID> extends InteractiveComponent<T[], [fromId: string, toId: string]> {
    Component: (props: T & IIndex) => JSX.Element;
}

export function Reorder<T extends IID>({ value = [], onChange, Component }: IReorderProps<T>) {

    const onDragEndHandler = (event: DropResult) => {

        const toId: string | null = value[event.destination?.index ?? -1]?.id ?? null;

        const fromId: string | null = value[event.source?.index ?? -1]?.id ?? null;

        if (onChange && fromId && toId) {

            onChange([fromId, toId]);
        }
    }

    const id = useId();

    /* eslint-disable */
    const Abra = useCallback(Component, [Component.toString()]);
    /* eslint-enable */

    return (
        <DragDropContext
        onDragEnd={onDragEndHandler}>
            <Droppable droppableId={id}>
                {(provided => (
                    <Box   
                    ref={provided.innerRef}
                    {...provided.droppableProps}>
                        {value.map((props, index) => (
                            <ReorderItem 
                            id={props.id}
                            key={props.id} 
                            index={index}>
                                <Abra
                                {...props}
                                index={index}/>
                            </ReorderItem>
                        ))}
                        {provided.placeholder}
                    </Box>
                ))}
            </Droppable>
        </DragDropContext>
    );
}
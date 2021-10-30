import React from "react";

import { IID } from "../../types";

import { createContext, useContext } from "react";

import { Box, Stack } from "../layout";

import { DragDropContext, DropResult, Droppable, Draggable } from "react-beautiful-dnd";

import { css } from "../../stitches";

import { useId } from "../../utilis";

import { VariantProps } from "@stitches/react";

interface IReorderItemContext {
    dragHandlerProps: any;
    containerProps: any;
    isDragging: boolean;
    className: string;
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
    opacity: "$100",
    boxShadow:"none",
    variants: {
        isDragging: {
            true: {
                opacity: "$100",
                boxShadow: "$lg"
            }
        }
    }
});

interface ReorderItemProps extends IID {
    index: number;
}

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
                    <Box
                    css={{
                        position: "relative",
                        zIndex: snapshot.isDragging ? "$50" : "$40"
                    }}
                    ref={provided.innerRef}>
                        <Box
                        css={{
                            _marginY: "$2"
                        }}>
                            <ReorderItemContext.Provider
                            value={{
                                containerProps: {
                                    ref: provided.innerRef,
                                    ...provided.draggableProps
                                },
                                dragHandlerProps: provided.dragHandleProps,
                                isDragging: snapshot.isDragging,
                                className,
                            }}>
                                {children}
                            </ReorderItemContext.Provider>
                        </Box>
                    </Box>
                );
            }}
        </Draggable>
    );
}

interface IReorderProps<T extends string | IID> {
    onReorder?: (fromId: string, toId: string) => void;
    items: T[];
    render: (props: T) => JSX.Element;
    space?: VariantProps<typeof Stack>["space"];
}

export function Reorder<T extends IID>({ items, onReorder, space = "xs", render }: IReorderProps<T>) {

    const onDragEndHandler = (event: DropResult) => {

        const toId: string | null = items[event.destination?.index ?? -1]?.id ?? null;

        const fromId: string | null = items[event.source?.index ?? -1]?.id ?? null;

        if (onReorder && fromId && toId) {

            onReorder(fromId, toId);
        }
    }

    const id = useId();

    return (
        <DragDropContext
        onDragEnd={onDragEndHandler}>
            <Droppable droppableId={id}>
                {(provided => (
                    <>
                        <div

                        ref={provided.innerRef}
                        {...provided.droppableProps}>
                            {items.map((props, index) => {

                                const id: string = typeof props === "string" ? props : props.id;

                                return (
                                    <ReorderItem 
                                    id={id}
                                    key={id} 
                                    index={index}>
                                        {render(props)}
                                    </ReorderItem>
                                );
                            })}

                            {provided.placeholder}
                        </div>
                    </>
                ))}
            </Droppable>
        </DragDropContext>
    );
}
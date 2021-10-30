import React from "react";

import { styled } from "../../stitches";

import { Button } from "../../components/form";

import { Stack, Box } from "../../components/layout";

import { Reorder } from "./Reorder";

import { MdDelete, MdDragHandle } from "react-icons/md";

import { useReorderItem } from "./Reorder";

import { IconContainer } from "../primitives";

import { VariantProps } from "@stitches/react";

const ListIconContainer = styled(IconContainer, { height: "$16" });

interface IListItemProps {
    onDelete: () => void;
}

const ListItem: React.FC<IListItemProps> = ({ children, onDelete }) => {
    
    const { isDragging, dragHandlerProps, containerProps, className } = useReorderItem();

    return (
        <Stack
        {...containerProps}
        css={{
            [`&:hover ${IconContainer}`]: {
                opacity: 1
            }
        }}
        axis="x">
            <ListIconContainer
            {...dragHandlerProps}
            hover
            invisible={!isDragging}
            css={{
                cursor: isDragging ? "grabbing" : "grab",
                "&:hover": {
                    _textColor: "$blue-gray-300",
                }
            }}>
                <MdDragHandle/>
            </ListIconContainer>

            <Box className={className}>
                {children}
            </Box>
            
            <ListIconContainer
            hover
            invisible={!isDragging}
            css={{
                cursor: "pointer",
            }}
            onClick={onDelete}>
                <MdDelete/>
            </ListIconContainer>
        </Stack>
    );
}

interface IListProps<T extends { id: string; }> {
    label: string; 
    items: T[];
    onAdd: () => void;
    onDelete: (id: string) => void;
    onReorder: (id1: string, id2: string) => void;
    render: (item: T) => JSX.Element;
    space?: VariantProps<typeof Stack>["space"];
}

export function List<T extends { id: string; }>({ label, items, onReorder, onDelete, onAdd, render, space }: IListProps<T>) {  

    const onDeleteHandler = (id: string) => () => onDelete(id);

    return (
        <Stack 
        axis="y" 
        space="sm">
            <Reorder
            space={space}
            items={items}
            onReorder={onReorder}
            render={props => (
                <ListItem 
                key={props.id}
                {...props}
                onDelete={onDeleteHandler(props.id)}>
                    {render(props)}
                </ListItem>
            )}/>
               
            <Button 
            align="start"
            size="md"
            onClick={onAdd}
            variant="text">
                {label}
            </Button>
        </Stack>
    );
}
import React from "react";

import { styled } from "../../stitches";

import { Button } from "../../components/form";

import { Stack, Box } from "../../components/layout";

import { Reorder } from "./Reorder";

import { MdDelete, MdDragHandle } from "react-icons/md";

import { useReorderItem } from "./Reorder";

import { PropertyValue } from "@stitches/react";

import { IconGroupHover, IconContainer } from "../primitives";

import { PlaceAside } from "../layout";

import { IID, InteractiveComponent } from "../../types";

const ListIconContainer = styled(IconContainer, { height: "$16" });

interface IListItemProps {
    onDelete: () => void;
    index: number;
    space?: PropertyValue<"margin">;
}

const ListItem: React.FC<IListItemProps> = ({ space, children, onDelete }) => {
    
    const { isDragging, dragHandlerProps, containerProps } = useReorderItem();

    return (
        <Box 
        {...containerProps}
        css={{
            marginTop: space
        }}>
            <IconGroupHover>
                <PlaceAside align="start">
                    <ListIconContainer
                    {...dragHandlerProps}
                    hover
                    invisible={!isDragging}
                    css={{
                        cursor: isDragging ? "grabbing" : "grab",
                    }}>
                        <MdDragHandle/>
                    </ListIconContainer>
                </PlaceAside>
                
                {children}
                
                <PlaceAside align="end">
                    <ListIconContainer
                    hover
                    invisible={!isDragging}
                    css={{
                        cursor: "pointer",
                    }}
                    onClick={onDelete}>
                        <MdDelete/>
                    </ListIconContainer>
                </PlaceAside>
            </IconGroupHover>
        </Box>
    );
}

interface IListProps<T extends IID> extends InteractiveComponent<T[], [fromId: string, toId: string]> {
    label: string; 
    onAdd: () => void;
    onDelete: (id: string) => void;
    render: (item: T, index: number) => JSX.Element;
    space?: PropertyValue<"margin">;
}

export function List<T extends IID>({ label, value, onChange, onDelete, onAdd, render, space }: IListProps<T>) {  

    const onDeleteHandler = (id: string) => () => onDelete(id);

    return (
        <Stack 
        axis="y" 
        space="sm">
            <Reorder
            value={value}
            onChange={onChange}
            render={(props, index) => (
                <ListItem 
                {...props}
                space={space}
                index={index}
                key={props.id}
                onDelete={onDeleteHandler(props.id)}>
                    {render(props, index)}
                </ListItem>
            )}/>
               
            <Button 
            inline
            align="start"
            size="md"
            onClick={onAdd}
            variant="text">
                {label}
            </Button>
        </Stack>
    );
}
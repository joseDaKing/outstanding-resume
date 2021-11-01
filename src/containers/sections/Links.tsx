import React from "react";

import { Stack, Box } from "../../components/layout";

import { Text, Title } from "../../components/typography";

import { TextField, EditText } from "../../components/form";

import { List, Accordion, useReorderItem } from "../../components/misc";

import { 
    useAppDispatch, 
    useAppSelector, 
    link,
    initialLink,
    ILinkItem
}
from "../../store";

import { IID } from "../../types";

import { withId } from "../../utilis";

import { MdDragHandle } from "react-icons/md";

import { IconContainer } from "../../components/primitives";

const ListRenderer: React.FC<ILinkItem & IID> = ({ id, label, url }) => {

    const dispatch = useAppDispatch();

    const onLabelChange = (label: string) => dispatch(link.actions.change([id, {
        label
    }]));

    const onUrlChange = (url: string) => dispatch(link.actions.change([id, {
        url
    }]));

    return (
        <Accordion.Item 
        id={id}
        title={label || "(Ej specificerat)"}>
            <Stack 
            axis="y"
            space="md">
                <Stack 
                axis="x"
                space="md">
                    <TextField
                    onChange={onLabelChange}
                    value={label}
                    label="Etikett"/>
    
                    <TextField
                    onChange={onUrlChange}
                    value={url}
                    label="Länk"/>
                </Stack>
            </Stack>
        </Accordion.Item>
    );
}

export const Links: React.FC = () => {

    const { items, sectionName } = useAppSelector(state => state.link);

    const dispatch = useAppDispatch();

    const itemsWithId = withId(items);

    const onAddHandler = () => dispatch(link.actions.add());

    const onRemoveHandler = (id: string) => dispatch(link.actions.remove(id));

    const onReorderHandler = (fromId: string, toId: string) => dispatch(link.actions.reorder([fromId, toId]));

    const onSectionNameChange = (sectionName: string) => dispatch(link.actions.setSectionName(sectionName));    

    const { containerProps, dragHandlerProps, isDragging } = useReorderItem();

    return (
        <Box {...containerProps}>
            <Title>
                <EditText
                onChange={onSectionNameChange}
                resetable={initialLink.sectionName}
                value={sectionName}
                left={() => (
                    <IconContainer {...dragHandlerProps} invisible={!isDragging} inline>
                        <MdDragHandle/>
                    </IconContainer>
                )}/> 
            </Title>

            <Text>
                Du kan lägga till länkar till webbplatser som du vill att personalchefer ska se! Du kanske vill lägga till en länk till din portfölj, LinkedIn-profil eller personliga hemsida.
            </Text>                        

            <List 
            items={itemsWithId}
            label="Lägg till anställning"
            onAdd={onAddHandler}
            onDelete={onRemoveHandler}
            onReorder={onReorderHandler}
            render={props => <ListRenderer {...props}/>}/>
        </Box>
    )
}
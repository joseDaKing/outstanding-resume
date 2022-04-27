import { 
    Box, 
    List, 
    Stack,
    AccordionItem,
    ListItemContent,
    ListItemDragHandler,
    ListItemRemoveHandler
} 
from "components/layout";

import {  
    Button,
    DatePickerRange,
    EditText,
    Label,
    TextArea,
    TextField
} 
from "components/form";

import { SubTitle } from "components/typography";

import { PlusIcon } from "@radix-ui/react-icons";

import {
    useAppDispatch,
    useAppSelector
} 
from "state";

import { interships } from "state/slices";

import { ItemsContainer } from "../ItemsContainer";



const initialInterhsips = interships.getInitialState();

export const Interhships: React.FC = () => {

    const dispatch = useAppDispatch();

    const intershipsState = useAppSelector(store => store.interships);

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative",
        }}>
            <SubTitle
            css={{
                marginBottom: "$8",
                position: "relative"
            }}>
                <EditText
                leftSlot={<ListItemDragHandler/>}
                rightSlot={<ListItemRemoveHandler/>}
                resetable={initialInterhsips.sectionTitle}
                value={intershipsState.sectionTitle}
                onValueChange={value => dispatch(interships.actions.setSectionTitle(value))}/>
            </SubTitle>
            
            <ItemsContainer
            items={intershipsState.items}>
                <List 
                space="$6"
                value={intershipsState.items}
                onValueChange={items => dispatch(interships.actions.changeItems(items))}>
                    {item => {

                        let title = "(Ej specificerat)";

                        if (item.jobTitle && item.employer) {

                            title = `${item.jobTitle}, ${item.employer}`;
                        }
                        else if (item.jobTitle) {

                            title = item.jobTitle;
                        }
                        else if (item.employer) {

                            title = item.employer;
                        }

                        return (
                            <ListItemContent
                            removeable>
                                <AccordionItem
                                title={title}
                                value={item.id}>
                                    <Box
                                    css={{
                                        spaceY: "$6"
                                    }}>
                                        <Stack
                                        fullX
                                        css={{
                                            gap: "$6"
                                        }}>
                                            <Label
                                            block
                                            name="Jobbtitel"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                value={item.jobTitle}
                                                onValueChange={jobTitle => dispatch(interships.actions.updateItem([
                                                    item.id,
                                                    { jobTitle }
                                                ]))}/>
                                            </Label>

                                            <Label
                                            block
                                            name="Arbetsgivare"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                value={item.employer}
                                                onValueChange={employer => dispatch(interships.actions.updateItem([
                                                    item.id,
                                                    { employer, }
                                                ]))}/>
                                            </Label>
                                        </Stack>

                                        <Stack
                                        fullX
                                        css={{
                                            gap: "$6"
                                        }}>
                                            <Label
                                            block
                                            name="Datum"
                                            orientation="vertical">
                                                <DatePickerRange
                                                size="lg"
                                                value={item.date}
                                                onValueChange={date => dispatch(interships.actions.updateItem([
                                                    item.id,
                                                    { date }
                                                ]))}/>
                                            </Label>

                                            <Label
                                            block
                                            name="Stad"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                value={item.city}
                                                onValueChange={city => dispatch(interships.actions.updateItem([
                                                    item.id,
                                                    { city }
                                                ]))}/>
                                            </Label>
                                        </Stack>

                                        <Label
                                        block
                                        name="Beskrivning"
                                        orientation="vertical">
                                            <TextArea
                                            size="lg"
                                            value={item.description}
                                            onValueChange={description => dispatch(interships.actions.updateItem([
                                                item.id,
                                                { description }
                                            ]))}/>
                                        </Label>
                                    </Box>
                                </AccordionItem>
                            </ListItemContent>
                        );
                    }}
                </List>
            </ItemsContainer>

            <Button
            block
            size="lg"
            align="start"
            variant="ghost"
            onClick={() => dispatch(interships.actions.addItem())}
            StartIcon={PlusIcon}>
                Lägg till jobb
            </Button>
        </Box>
    );
}
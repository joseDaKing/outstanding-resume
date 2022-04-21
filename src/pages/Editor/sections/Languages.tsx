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
    EditText,
    Label,
    Select,
    SelectItem,
    TextField,
} 
from "components/form";

import { SubTitle } from "components/typography";

import { PlusIcon } from "@radix-ui/react-icons";

import {
    useAppDispatch,
    useAppSelector
} 
from "state";

import { languages } from "state/slices";

import { ItemsContainer } from "../ItemsContainer";



const initialLanguages = languages.getInitialState();

const languageLevelLabels = [
    "Välj nivå",
    "Yrkekunskaper",
    "Bra praktiska kunskaper",
    "Väldigt goda kunskaper",
    "Mycket skicklig",
    "Modersmåltalare", 
];

export const Languages: React.FC = () => {

    const dispatch = useAppDispatch();

    const languagesState = useAppSelector(store => store.languages);

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative",
            marginTop: "$16"
        }}>
            <SubTitle
            css={{
                marginBottom: "$8"
            }}>
                <EditText
                leftSlot={<ListItemDragHandler/>}
                rightSlot={<ListItemRemoveHandler/>}
                resetable={initialLanguages.sectionTitle}
                value={languagesState.sectionTitle}
                onValueChange={value => dispatch(languages.actions.setSectionTitle(value))}/>
            </SubTitle>

            <ItemsContainer 
            items={languagesState.items}>
                <List 
                value={languagesState.items}
                onValueChange={value => dispatch(languages.actions.changeItems(value))}
                space="$6">
                    {item => (
                        <ListItemContent
                        removeable>
                            <AccordionItem
                            title={item.language || "(Ej specificerat)"}
                            value={item.id}>
                                <Stack
                                fullX
                                css={{
                                    gap: "$6"
                                }}>
                                    <Label
                                    block
                                    name="Språk"
                                    orientation="vertical">
                                        <TextField
                                        size="lg"
                                        value={item.language}
                                        onValueChange={value => dispatch(languages.actions.updateItem([
                                            item.id,
                                            { language: value }
                                        ]))}/>
                                    </Label>

                                    <Label
                                    block
                                    name="Nivå"
                                    orientation="vertical">
                                        <Select
                                        value={languageLevelLabels[item.level]}
                                        onValueChange={value => dispatch(languages.actions.updateItem([
                                            item.id,
                                            { level: languageLevelLabels.indexOf(value) }
                                        ]))}
                                        size="lg">
                                            {languageLevelLabels.map(item => (
                                                <SelectItem 
                                                value={item}/>
                                            ))}
                                        </Select>
                                    </Label>
                                </Stack>
                            </AccordionItem>
                        </ListItemContent>
                    )}
                </List>
            </ItemsContainer>

            <Button
            block
            size="lg"
            align="start"
            variant="ghost"
            StartIcon={PlusIcon}
            onClick={() => dispatch(languages.actions.addItem())}>
                Lägg till jobb
            </Button>
        </Box>
    );
}
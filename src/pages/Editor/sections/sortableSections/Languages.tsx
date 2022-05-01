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

import { LanguageItem, languages } from "state/slices";

import { ItemsContainer } from "../../ItemsContainer";

import { ItemContainer } from "../../ItemContainer";



const initialLanguages = languages.getInitialState();

const languageLevelLabels = [
    "Choose level",
    "Professional skills",
    "Good practical knowledge",
    "Very good knowledge",
    "Very skilled",
    "Native speaker", 
];

const LanguagesListItem: React.FC<LanguageItem> = props => {

    const dispatch = useAppDispatch();

    return (
        <ListItemContent
        removeable>
            <ItemContainer>
                <AccordionItem
                title={props.language || "(Not specified)"}
                value={props.id}>
                    <Stack
                    fullX
                    css={{
                        gap: "$6"
                    }}>
                        <Label
                        block
                        name="Language"
                        orientation="vertical">
                            <TextField
                            size="lg"
                            value={props.language}
                            onValueChange={value => dispatch(languages.actions.updateItem([
                                props.id,
                                { language: value }
                            ]))}/>
                        </Label>
        
                        <Label
                        block
                        name="Level"
                        orientation="vertical">
                            <Select
                            value={languageLevelLabels[props.level]}
                            onValueChange={value => dispatch(languages.actions.updateItem([
                                props.id,
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
            </ItemContainer>
        </ListItemContent>
    );
}

const LanguagesList: React.FC = () => {

    const dispatch = useAppDispatch();

    const items = useAppSelector(store => store.languages.items);

    return (
        <ItemsContainer 
        items={items}>
            <List 
            value={items}
            onValueChange={value => dispatch(languages.actions.changeItems(value))}
            space="$6">
                {item => <LanguagesListItem key={item.id} {...item}/>}
            </List>
        </ItemsContainer>
    );
}

const LanguagesHead: React.FC = () => {

    const dispatch = useAppDispatch();

    const sectionTitle = useAppSelector(store => store.languages.sectionTitle);

    return (
        <SubTitle
        css={{
            marginBottom: "$8"
        }}>
            <EditText
            leftSlot={<ListItemDragHandler/>}
            rightSlot={<ListItemRemoveHandler/>}
            resetable={initialLanguages.sectionTitle}
            value={sectionTitle}
            onValueChange={value => dispatch(languages.actions.setSectionTitle(value))}/>
        </SubTitle>
    );
}

export const Languages: React.FC = () => {

    const dispatch = useAppDispatch();
    
    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative",
            marginTop: "$16"
        }}>
            <LanguagesHead/>

            <LanguagesList/>

            <Button
            block
            size="lg"
            align="start"
            variant="ghost"
            StartIcon={PlusIcon}
            onClick={() => dispatch(languages.actions.addItem())}>
                Add language
            </Button>
        </Box>
    );
}
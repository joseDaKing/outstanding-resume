import { 
    Box, 
    List, 
    Stack,
    ListItemContent,
    AccordionItem,
    ListItemDragHandler
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

import {
    Text,
    SubTitle
}
from "components/typography";

import { PlusIcon } from "@radix-ui/react-icons";

import {
    useAppDispatch,
    useAppSelector
} 
from "state";

import { education } from "state/slices";
import { ItemsContainer } from "../ItemsContainer";



const initialEducation = education.getInitialState();

export const Education: React.FC = () => {

    const dispatch = useAppDispatch();

    const educationState = useAppSelector(store => store.education);

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative"
        }}>
            <ListItemDragHandler
            css={{
                position: "absolute",
                top: "-$2",
                left: "-$10",
            }}/>

            <SubTitle
            css={{
                marginBottom: "$8"
            }}>
                <EditText
                resetable={initialEducation.sectionTitle}
                value={educationState.sectionTitle}
                onValueChange={value => dispatch(education.actions.setSectionTitle(value))}/>
            </SubTitle>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Om så är  relevant, lägg till dina senaste utbildningsresultat och datum här
            </Text>

            <ItemsContainer
            items={educationState.items}>
                <List
                space="$6"
                value={educationState.items}
                onValueChange={items => {
                    
                    console.log(items.map(item =>item.school).join(", "));

                    dispatch(education.actions.changeItems(items))
                }}>
                    {item => {
                        
                        let title = "(Ej specificerat)";

                        if (item.school && item.exam) {

                            title = `${item.school}, ${item.exam}`;
                        }
                        else if (item.school) {

                            title = item.school;
                        }
                        else if (item.exam) {

                            title = item.exam;
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
                                            name="Skola"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                value={item.school}
                                                onValueChange={value => dispatch(education.actions.updateItem([
                                                    item.id,
                                                    { school: value }
                                                ]))}/>
                                            </Label>

                                            <Label
                                            block
                                            name="Examen"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                value={item.exam}
                                                onValueChange={value => dispatch(education.actions.updateItem([
                                                    item.id,
                                                    { exam: value }
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
                                                onValueChange={value => dispatch(education.actions.updateItem([
                                                    item.id,
                                                    { date: value }
                                                ]))}/>
                                            </Label>

                                            <Label
                                            block
                                            name="Stad"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                value={item.city}
                                                onValueChange={value => dispatch(education.actions.updateItem([
                                                    item.id,
                                                    { city: value }
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
                                            onValueChange={value => dispatch(education.actions.updateItem([
                                                item.id,
                                                { description: value }
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
            onClick={() => dispatch(education.actions.addItem())}
            StartIcon={PlusIcon}>
                Lägg till jobb
            </Button>
        </Box>
    );
}
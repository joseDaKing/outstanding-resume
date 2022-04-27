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

import { courses } from "state/slices";

import { ItemsContainer } from "../ItemsContainer";



const initialCourses = courses.getInitialState();

export const Courses: React.FC = () => {

    const dispatch = useAppDispatch();

    const coursesState = useAppSelector(store => store.courses);

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
                resetable={initialCourses.sectionTitle}
                value={coursesState.sectionTitle}
                onValueChange={value => dispatch(courses.actions.setSectionTitle(value))}/>
            </SubTitle>
            
            <ItemsContainer
            items={coursesState.items}>
                <List 
                space="$6"
                value={coursesState.items}
                onValueChange={items => dispatch(courses.actions.changeItems(items))}>
                    {item => {

                        let title = "(Ej specificerat)";

                        if (item.name && item.institution) {

                            title = `${item.name}, ${item.institution}`;
                        }
                        else if (item.name) {

                            title = item.name;
                        }
                        else if (item.institution) {

                            title = item.institution;
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
                                            name="Kurs"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                value={item.name}
                                                onValueChange={value => dispatch(courses.actions.updateItem([
                                                    item.id,
                                                    { name: value }
                                                ]))}/>
                                            </Label>

                                            <Label
                                            block
                                            name="Arbetsgivare"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                value={item.institution}
                                                onValueChange={value => dispatch(courses.actions.updateItem([
                                                    item.id,
                                                    { institution: value }
                                                ]))}/>
                                            </Label>
                                        </Stack>

                                        <Label
                                        block
                                        name="Datum"
                                        orientation="vertical"
                                        css={{
                                            width: "$1__2"
                                        }}>
                                            <DatePickerRange
                                            size="lg"
                                            value={item.date}
                                            onValueChange={value => dispatch(courses.actions.updateItem([
                                                item.id,
                                                { date: value }
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
            onClick={() => dispatch(courses.actions.addItem())}
            StartIcon={PlusIcon}>
                Lägg till kurs
            </Button>
        </Box>
    );
}
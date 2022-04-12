import { 
    Box, 
    List, 
    Stack,
    ListItemContent,
    AccordionItem
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

import { workExperience } from "state/slices";

import { ListItemDragHandler } from "components/layout";

import { ItemsContainer } from "../ItemsContainer";



const initialWorkExperience = workExperience.getInitialState();

export const WorkExperience: React.FC = () => {

    const dispatch = useAppDispatch();

    const workExperienceState = useAppSelector(store => store.workExperience);

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative",
        }}>
            <ListItemDragHandler
            css={{
                position: "absolute",
                top: "-$2",
                left: "-$10",
            }}/>

            <SubTitle
            css={{
                marginBottom: "$8",
                position: "relative"
            }}>
                <EditText
                resetable={initialWorkExperience.sectionTitle}
                value={workExperienceState.sectionTitle}
                onValueChange={value => dispatch(workExperience.actions.setSectionTitle(value))}/>
            </SubTitle>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Här lägger du till all relevant erfarenhet, inklusive datum, som du har från de senaste 10 åren. Den senaste tjänsten placerar du högst upp.
            </Text>
            
            <ItemsContainer
            items={workExperienceState.items}>
                <List 
                space="$6"
                value={workExperienceState.items}
                onValueChange={items => dispatch(workExperience.actions.changeItems(items))}>
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
                                                onValueChange={jobTitle => dispatch(workExperience.actions.updateItem([
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
                                                onValueChange={employer => dispatch(workExperience.actions.updateItem([
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
                                                onValueChange={date => dispatch(workExperience.actions.updateItem([
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
                                                onValueChange={city => dispatch(workExperience.actions.updateItem([
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
                                            onValueChange={description => dispatch(workExperience.actions.updateItem([
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
            onClick={() => dispatch(workExperience.actions.addItem())}
            StartIcon={PlusIcon}>
                Lägg till jobb
            </Button>
        </Box>
    );
}
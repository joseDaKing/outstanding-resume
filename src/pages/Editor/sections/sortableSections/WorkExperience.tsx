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

import { workExperience, WorkExperienceItem } from "state/slices";

import { ListItemDragHandler } from "components/layout";

import { ItemsContainer } from "../../ItemsContainer";

import { ItemContainer } from "../../ItemContainer";



const initialWorkExperience = workExperience.getInitialState();

const WorkExperienceListItem: React.FC<WorkExperienceItem> = props => {

    let title = "(Ej specificerat)";

    if (props.jobTitle && props.employer) {

        title = `${props.jobTitle}, ${props.employer}`;
    }
    else if (props.jobTitle) {

        title = props.jobTitle;
    }
    else if (props.employer) {

        title = props.employer;
    }

    const dispatch = useAppDispatch();

    

    return (
        <ListItemContent
        removeable>
            <ItemContainer>
                <AccordionItem
                title={title}
                value={props.id}>
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
                                value={props.jobTitle}
                                onValueChange={jobTitle => dispatch(workExperience.actions.updateItem([
                                    props.id,
                                    { jobTitle }
                                ]))}/>
                            </Label>

                            <Label
                            block
                            name="Arbetsgivare"
                            orientation="vertical">
                                <TextField
                                size="lg"
                                value={props.employer}
                                onValueChange={employer => dispatch(workExperience.actions.updateItem([
                                    props.id,
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
                                value={props.date}
                                onValueChange={date => dispatch(workExperience.actions.updateItem([
                                    props.id,
                                    { date }
                                ]))}/>
                            </Label>

                            <Label
                            block
                            name="Stad"
                            orientation="vertical">
                                <TextField
                                size="lg"
                                value={props.city}
                                onValueChange={city => dispatch(workExperience.actions.updateItem([
                                    props.id,
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
                            value={props.description}
                            onValueChange={description => dispatch(workExperience.actions.updateItem([
                                props.id,
                                { description }
                            ]))}/>
                        </Label>
                    </Box>
                </AccordionItem>
            </ItemContainer>
        </ListItemContent>
    );
}

const WorkExperienceList: React.FC = () => {

    const items = useAppSelector(store => store.workExperience.items);
    
    const dispatch = useAppDispatch();

    return (
        <ItemsContainer
        items={items}>
            <List 
            space="$6"
            value={items}
            onValueChange={items => dispatch(workExperience.actions.changeItems(items))}>
                {item => <WorkExperienceListItem {...item}/>}
            </List>
        </ItemsContainer>
    );
}

const WorkExperienceHead: React.FC = () => {
    
    const dispatch = useAppDispatch();

    const sectionTitle = useAppSelector(store => store.workExperience.sectionTitle);

    return (
        <SubTitle
        css={{
            marginBottom: "$8",
            position: "relative"
        }}>
            <EditText
            leftSlot={<ListItemDragHandler/>}
            resetable={initialWorkExperience.sectionTitle}
            value={sectionTitle}
            onValueChange={value => dispatch(workExperience.actions.setSectionTitle(value))}/>
        </SubTitle>
    );
}

export const WorkExperience: React.FC = () => {

    const dispatch = useAppDispatch();

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative",
        }}>
            <WorkExperienceHead/>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Här lägger du till all relevant erfarenhet, inklusive datum, som du har från de senaste 10 åren. Den senaste tjänsten placerar du högst upp.
            </Text>
            
            <WorkExperienceList/>

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
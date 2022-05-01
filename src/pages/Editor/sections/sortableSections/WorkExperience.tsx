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

    let title = "(Not specified)";

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
                            name="Job title"
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
                            name="Employer"
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
                            name="Date"
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
                            name="City"
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
                        name="Description"
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
                {item => <WorkExperienceListItem key={item.id} {...item}/>}
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
                Here you add all the relevant experience, including dates, that you have from the last 10 years. You place the latest service at the top.
            </Text>
            
            <WorkExperienceList/>

            <Button
            block
            size="lg"
            align="start"
            variant="ghost"
            onClick={() => dispatch(workExperience.actions.addItem())}
            StartIcon={PlusIcon}>
                Add job
            </Button>
        </Box>
    );
}
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

import { InternshipItem, interships } from "state/slices";

import { ItemsContainer } from "../../ItemsContainer";

import { ItemContainer } from "../../ItemContainer";



const initialInterhsips = interships.getInitialState();

const InternshipsListItem: React.FC<InternshipItem> = props => {

    const dispatch = useAppDispatch();

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
                                onValueChange={jobTitle => dispatch(interships.actions.updateItem([
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
                                onValueChange={employer => dispatch(interships.actions.updateItem([
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
                                onValueChange={date => dispatch(interships.actions.updateItem([
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
                                onValueChange={city => dispatch(interships.actions.updateItem([
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
                            onValueChange={description => dispatch(interships.actions.updateItem([
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

const IntershipsList: React.FC = () => {

    const items = useAppSelector(store => store.interships.items);

    const dispatch = useAppDispatch();

    return (
        <ItemsContainer
        items={items}>
            <List 
            space="$6"
            value={items}
            onValueChange={items => dispatch(interships.actions.changeItems(items))}>
                {item => <InternshipsListItem key={item.id} {...item}/>}
            </List>
        </ItemsContainer>
    );
}

const InternshipsHeader: React.FC = () => {

    const dispatch = useAppDispatch();

    const sectionTitle = useAppSelector(store => store.interships.sectionTitle);

    return (
        <SubTitle
        css={{
            marginBottom: "$8",
            position: "relative"
        }}>
            <EditText
            leftSlot={<ListItemDragHandler/>}
            rightSlot={<ListItemRemoveHandler/>}
            resetable={initialInterhsips.sectionTitle}
            value={sectionTitle}
            onValueChange={value => dispatch(interships.actions.setSectionTitle(value))}/>
        </SubTitle>
    );
}

export const Interhships: React.FC = () => {

    const dispatch = useAppDispatch();

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative",
        }}>
            <InternshipsHeader/>
            
            <IntershipsList/>

            <Button
            block
            size="lg"
            align="start"
            variant="ghost"
            onClick={() => dispatch(interships.actions.addItem())}
            StartIcon={PlusIcon}>
                Add internship
            </Button>
        </Box>
    );
}
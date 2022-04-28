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

import { extraActivities, ExtraActivityItem } from "state/slices";

import { ItemsContainer } from "../../ItemsContainer";



const initialExtraActivities = extraActivities.getInitialState();

const ExtraActivitiesListItem: React.FC<ExtraActivityItem> = props => {

    const dispatch = useAppDispatch();

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

    return (
        <ListItemContent
        removeable>
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
                            onValueChange={jobTitle => dispatch(extraActivities.actions.updateItem([
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
                            onValueChange={employer => dispatch(extraActivities.actions.updateItem([
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
                            onValueChange={date => dispatch(extraActivities.actions.updateItem([
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
                            onValueChange={city => dispatch(extraActivities.actions.updateItem([
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
                        onValueChange={description => dispatch(extraActivities.actions.updateItem([
                            props.id,
                            { description }
                        ]))}/>
                    </Label>
                </Box>
            </AccordionItem>
        </ListItemContent>
    );
}

const ExtraActivitiesList: React.FC = () => {

    const dispatch = useAppDispatch();

    const items = useAppSelector(store => store.extraActivities.items);

    return (
        <ItemsContainer
        items={items}>
            <List 
            space="$6"
            value={items}
            onValueChange={items => dispatch(extraActivities.actions.changeItems(items))}>
                {item => <ExtraActivitiesListItem {...item}/>}
            </List>
        </ItemsContainer>
    );
}

const ExtraActivitiesHead: React.FC = () => {

    const dispatch = useAppDispatch();

    const sectionTitle = useAppSelector(store => store.extraActivities.sectionTitle);

    return (
        <SubTitle
        css={{
            marginBottom: "$8",
            position: "relative"
        }}>
            <EditText
            leftSlot={<ListItemDragHandler/>}
            rightSlot={<ListItemRemoveHandler/>}
            resetable={initialExtraActivities.sectionTitle}
            value={sectionTitle}
            onValueChange={value => dispatch(extraActivities.actions.setSectionTitle(value))}/>
        </SubTitle>
    );
}

export const ExtraActivities: React.FC = () => {

    const dispatch = useAppDispatch();
    
    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative",
        }}>
            <ExtraActivitiesHead/>
            
            <ExtraActivitiesList/>

            <Button
            block
            size="lg"
            align="start"
            variant="ghost"
            onClick={() => dispatch(extraActivities.actions.addItem())}
            StartIcon={PlusIcon}>
                Lägg till extra aktivitet
            </Button>
        </Box>
    );
}
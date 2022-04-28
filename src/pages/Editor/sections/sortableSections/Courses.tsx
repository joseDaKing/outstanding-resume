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

import { CourseItem, courses } from "state/slices";

import { ItemsContainer } from "../../ItemsContainer";



const initialCourses = courses.getInitialState();

const CoursesListItem: React.FC<CourseItem> = props => {

    const dispatch = useAppDispatch();

    let title = "(Ej specificerat)";

    if (props.name && props.institution) {

        title = `${props.name}, ${props.institution}`;
    }
    else if (props.name) {

        title = props.name;
    }
    else if (props.institution) {

        title = props.institution;
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
                        name="Kurs"
                        orientation="vertical">
                            <TextField
                            size="lg"
                            value={props.name}
                            onValueChange={value => dispatch(courses.actions.updateItem([
                                props.id,
                                { name: value }
                            ]))}/>
                        </Label>

                        <Label
                        block
                        name="Arbetsgivare"
                        orientation="vertical">
                            <TextField
                            size="lg"
                            value={props.institution}
                            onValueChange={value => dispatch(courses.actions.updateItem([
                                props.id,
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
                        value={props.date}
                        onValueChange={value => dispatch(courses.actions.updateItem([
                            props.id,
                            { date: value }
                        ]))}/>
                    </Label>
                </Box>
            </AccordionItem>
        </ListItemContent>
    );
}

const CourseList: React.FC = props => {
    
    const items = useAppSelector(store => store.courses.items);

    const dispatch = useAppDispatch();

    return (
        <ItemsContainer
        items={items}>
            <List 
            space="$6"
            value={items}
            onValueChange={items => dispatch(courses.actions.changeItems(items))}>
                {item => <CoursesListItem {...item}/>}
            </List>
        </ItemsContainer>
    )
}

const CourseHead: React.FC = () => {

    const dispatch = useAppDispatch();

    const sectionTitle = useAppSelector(store => store.courses.sectionTitle);
    
    return (
        <SubTitle
        css={{
            marginBottom: "$8",
            position: "relative"
        }}>
            <EditText
            leftSlot={<ListItemDragHandler/>}
            rightSlot={<ListItemRemoveHandler/>}
            resetable={initialCourses.sectionTitle}
            value={sectionTitle}
            onValueChange={value => dispatch(courses.actions.setSectionTitle(value))}/>
        </SubTitle>
    );
}

export const Courses: React.FC = () => {

    const dispatch = useAppDispatch();
    
    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative",
        }}>
            <CourseHead/>
            
            <CourseList/>

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
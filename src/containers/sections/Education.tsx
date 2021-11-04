import React from "react";

import { Stack, Box } from "../../components/layout";

import { Text, Title } from "../../components/typography";

import { TextArea, TextField, EditText } from "../../components/form";

import { List, Accordion, useReorderItem } from "../../components/misc";

import { withId } from "../../utilis";

import { IID } from "../../types";

import { IconContainer } from "../../components/primitives";

import { MdDragHandle } from "react-icons/md";

import { 
    IEducationItem,
    useAppDispatch, 
    useAppSelector, 
    initialEducation,
    education
} 
from "../../store";

const ListRenderer: React.FC<IEducationItem & IID> = ({ id, school, exam, city, startDate, endDate, description }) => {

    let title = "(Ej specificerat)";

    if (school && exam) {

        title = `${school}, ${exam}`;
    }
    else if (school) {

        title = school;
    }
    else if (exam) {

        title = exam;
    }

    const dispatch = useAppDispatch();

    const onSchoolChange = (school: string) => dispatch(education.actions.change([id, {
        school
    }]));

    const onExamChange = (exam: string) => dispatch(education.actions.change([id, {
        exam
    }]));

    const onDateStartChange = (startDate: string) => dispatch(education.actions.change([id, {
        startDate
    }]));

    const onDateEndChange = (endDate: string) => dispatch(education.actions.change([id, {
        endDate
    }]));

    const onCityChange = (city: string) => dispatch(education.actions.change([id, {
        city
    }]));

    const onDescriptionChange = (description: string) => dispatch(education.actions.change([id, {
        description
    }]));

    return (
        <Accordion.Item 
        id={id}
        title={title}>
            <Stack 
            axis="y"
            space="md">
                <Stack 
                axis="x"
                space="md">
                    <TextField
                    onChange={onSchoolChange}
                    value={school}
                    label="Skola"/>

                    <TextField
                    onChange={onExamChange}
                    value={exam}
                    label="Examen"/>
                </Stack>

                <Stack 
                axis="x"
                space="md">
                    <Stack
                    axis="x"
                    space="xs"
                    css={{
                        alignItems: "flex-end"
                    }}>
                        <TextField
                        onChange={onDateStartChange}
                        value={startDate}
                        label="Datum"
                        placeholder="start"/>

                        <TextField
                        onChange={onDateEndChange}
                        value={endDate}
                        placeholder="slut"/>
                    </Stack>

                    <TextField
                    onChange={onCityChange}
                    value={city}
                    label="Stad"/>
                </Stack>

                <TextArea
                onChange={onDescriptionChange}
                value={description}
                label="Beskrivning"
                placeholder="t.ex utexaminerad med höga betyg"/>
            </Stack>
        </Accordion.Item>
    );
};

export const Education: React.FC = () => {

    const { items, sectionName } = useAppSelector(state => state.education);

    const dispatch = useAppDispatch();

    const itemsWithIds = withId(items);

    const onAddHandler = () => dispatch(education.actions.add());

    const onRemoveHandler = (id: string) => dispatch(education.actions.remove(id));

    const onChangeHandler = (ids: [fromId: string, toId: string]) => dispatch(education.actions.reorder(ids));

    const onSectionNameChange = (sectionName: string) => dispatch(education.actions.setSectionName(sectionName));

    const { containerProps, dragHandlerProps, isDragging } = useReorderItem();

    return (
        <Box {...containerProps}>
            <Title>
                <EditText
                onChange={onSectionNameChange}
                resetable={initialEducation.sectionName}
                value={sectionName}
                left={() => (
                    <IconContainer {...dragHandlerProps} invisible={!isDragging} inline>
                        <MdDragHandle/>
                    </IconContainer>
                )}/>
            </Title>

            <Text>
                Om så är  relevant, lägg till dina senaste utbildningsresultat och datum här
            </Text>                        

            <List 
            value={itemsWithIds}
            label="Lägg till anställning"
            onAdd={onAddHandler}
            onDelete={onRemoveHandler}
            onChange={onChangeHandler}
            render={props => <ListRenderer {...props}/>}/>
        </Box>
    )
}
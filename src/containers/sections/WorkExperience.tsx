import React from "react";

import { Stack, Box } from "../../components/layout";

import { Text, Title } from "../../components/typography";

import { TextArea, TextField } from "../../components/form";

import { List, Accordion, EditText, useActivateLatestAccordionItem, useReorderItem } from "../../components/misc";

import { useAppDispatch, useAppSelector, workExperience, initialWorkExperience, IWorkExperienceItem } from "../../store";

import { IID } from "../../types";

import { withId } from "../../utilis";

import { MdDragHandle } from "react-icons/md";

import { IconContainer } from "../../components/primitives";

const ListRenderer: React.FC<IWorkExperienceItem & IID> = ({ id, jobTitle, employer, startDate, endDate, city, description }) => {

    let title = "(Ej specificerat)";

    if (jobTitle && employer) {

        title = `${jobTitle}, ${employer}`;
    }
    else if (jobTitle) {

        title = jobTitle;
    }
    else if (employer) {

        title = employer;
    }

    const dispatch = useAppDispatch();

    const onJobTitleChange = (jobTitle: string) => dispatch(workExperience.actions.change([id, {
        jobTitle
    }]));
    
    const onEmployerChange = (employer: string) => dispatch(workExperience.actions.change([id, {
        employer
    }]));

    const onStartDateChange = (startDate: string) => dispatch(workExperience.actions.change([id, {
        startDate
    }]));

    const onEndDateChange = (endDate: string) => dispatch(workExperience.actions.change([id, {
        endDate
    }]));

    const onCityChange = (city: string) => dispatch(workExperience.actions.change([id, {
        city
    }]));

    const onDescriptionChange = (description: string) => dispatch(workExperience.actions.change([id, {
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
                    onChange={onJobTitleChange}
                    value={jobTitle}
                    label="Jobbtitel"/>

                    <TextField
                    onChange={onEmployerChange}
                    value={employer}
                    label="Arbetsgivare"/>
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
                        onChange={onStartDateChange}
                        value={startDate}
                        label="Datum"
                        placeholder="start"/>

                        <TextField
                        onChange={onEndDateChange}
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
                placeholder="t.ex Skapande och implementerade lektionsupplägg baserade på barnes intressen och nyfikenhet"/>
            </Stack>
        </Accordion.Item>
    );
};

export const WorkExperience: React.FC = () => {

    const { items, sectionName } = useAppSelector(state => state.workExperience);

    const dispatch = useAppDispatch();

    const itemsWithIds = withId(items);

    useActivateLatestAccordionItem(itemsWithIds);

    const onAddHandler = () => dispatch(workExperience.actions.add());

    const onRemoveHandler = (id: string) => dispatch(workExperience.actions.remove(id));

    const onReorderHandler = (fromId: string, toId: string) => dispatch(workExperience.actions.reorder([fromId, toId]));

    const onSectionNameChange = (sectionName: string) => dispatch(workExperience.actions.setSectionName(sectionName));

    const { containerProps, dragHandlerProps, isDragging, className } = useReorderItem();
    
    return (
        <Box {...containerProps} className={className}>
            <Title >
                <Box inline
                css={{
                    [`&:hover ${IconContainer}`]: {
                        opacity: 1
                    }
                }}>
                    <IconContainer {...dragHandlerProps} invisible={!isDragging} inline>
                        <MdDragHandle/>
                    </IconContainer>

                    <EditText
                    onChange={onSectionNameChange}
                    resetable={initialWorkExperience.sectionName}
                    value={sectionName}/>
                </Box>
            </Title>

            <Text gutter>
                Här lägger du till all relevant erfarenhet, inklusive datum, som du har från de senaste 10 åren. Den senaste tjänsten placerar du högst upp.
            </Text>                        

            <List 
            label="Lägg till anställning"
            items={itemsWithIds}
            onAdd={onAddHandler}
            onDelete={(onRemoveHandler)}
            onReorder={onReorderHandler}
            render={props => <ListRenderer {...props}/>}/> 
        </Box>  
    )
}
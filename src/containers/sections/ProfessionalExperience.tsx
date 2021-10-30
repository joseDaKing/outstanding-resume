import React from "react";

import { Box } from "../../components/layout";

import { TextArea } from "../../components/form";

import { Text, Title } from "../../components/typography";

import { EditText } from "../../components/misc";

import { useAppDispatch, useAppSelector, professionalExperience, initialProfessionalExperience } from "../../store";

export const ProfessionalExperience: React.FC = () => {

    const { description, sectionName } = useAppSelector(state => state.professionalExperience);

    const dispatch = useAppDispatch();

    const onSectionNameChange = (sectionName: string) => dispatch(professionalExperience.actions.change({
        sectionName
    }));

    const onDescriptionChange = (description: string) => dispatch(professionalExperience.actions.change({
        description
    }));

    return (
        <Box>
            <Title>
                <EditText
                onChange={onSectionNameChange}
                resetable={initialProfessionalExperience.sectionName}
                value={sectionName}/>
            </Title>

            <Text gutter>
                Skriv 2-3 tydliga meningar om din allmänna erfarenhet
            </Text>

            <TextArea
            value={description}
            onChange={onDescriptionChange}
            placeholder="t.ex passionerad naturkunskapslärare med > 8 års erfarenhet och följande meriter..."/>
        </Box>
    );
}
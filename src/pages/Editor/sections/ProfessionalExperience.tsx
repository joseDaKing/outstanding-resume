import { Box } from "components/layout";

import {  
    EditText,
    TextArea
} 
from "components/form";

import {
    Text,
    SubTitle
}
from "components/typography";

import { useAppDispatch, useAppSelector } from "state";

import { professionalExperience } from "state/slices";



const initialProfessionalExperienceState = professionalExperience.getInitialState();

const ProfessionalExperienceHead: React.FC = () => {

    const dispatch = useAppDispatch();

    const sectionTitle = useAppSelector(store => store.professionalExperience.sectionTitle);

    return (
        <SubTitle
        css={{
            marginBottom: "$8"
        }}>
            <EditText
            resetable={initialProfessionalExperienceState.sectionTitle}
            value={sectionTitle}
            onValueChange={value => dispatch(professionalExperience.actions.setSectionTitle(value))}/>
        </SubTitle>
    );
}

const ProfessionalExperienceBody: React.FC = () => {

    const dispatch = useAppDispatch();

    const description = useAppSelector(store => store.professionalExperience.description);

    return (
        <TextArea 
        block
        placeholder="t.ex passionerad naturkunskapslärare med > 8 års erfarenhet och följande meriter"
        value={description}
        onValueChange={value => dispatch(professionalExperience.actions.setDescription(value))}/>
    );
}

export const ProfessionalExperience: React.FC = () => {

    const dispatch = useAppDispatch();

    const professionalExperienceState = useAppSelector(store => store.professionalExperience);

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
        }}>
            <ProfessionalExperienceHead/>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Skriv 2-3 tydliga meningar om din allmänna erfarenhet
            </Text>

            <ProfessionalExperienceBody/>
        </Box>
    );
}
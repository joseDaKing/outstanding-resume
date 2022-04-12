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

export const ProfessionalExperience: React.FC = () => {

    const dispatch = useAppDispatch();

    const professionalExperienceState = useAppSelector(store => store.professionalExperience);

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
        }}>
            <SubTitle
            css={{
                marginBottom: "$8"
            }}>
                <EditText
                resetable={initialProfessionalExperienceState.sectionTitle}
                value={professionalExperienceState.sectionTitle}
                onValueChange={value => dispatch(professionalExperience.actions.setSectionTitle(value))}/>
            </SubTitle>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Skriv 2-3 tydliga meningar om din allmänna erfarenhet
            </Text>

            <TextArea 
            block
            placeholder="t.ex passionerad naturkunskapslärare med > 8 års erfarenhet och följande meriter"
            value={professionalExperienceState.description}
            onValueChange={value => dispatch(professionalExperience.actions.setDescription(value))}/>
        </Box>
    );
}
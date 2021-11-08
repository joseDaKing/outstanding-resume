import React from "react";

import { TextArea } from "../../../../components/form";

import { Box } from "../../../../components/layout";

import { Text } from "../../../../components/typography";

import { FixedSectionTitleContainer } from "../../../../containers";

import { useAppDispatch, useAppSelector } from "../../../../store";

import { professionalExperience } from "../../../../store/slices/fixedSections/professionalExperience";

export const ProfessionalExperience: React.FC = () => {

    const description = useAppSelector(store => store["professional-experience"].description);

    const dispatch = useAppDispatch()

    const onChangeHandler = (description: string) => dispatch(professionalExperience.slice.actions.setDescription(description));

    return (
        <Box>
            <FixedSectionTitleContainer
            section="professional-experience"/>

            <Text>
                Skriv 2 - 3 tydliga meningar om dina allmäna erfarenhet
            </Text>

            <TextArea
            value={description}
            onChange={onChangeHandler}
            placeholder="t.ex passionerad naturkunskapslärare med > 8 års erfarenhet och följande meriter..."/>

            <br/>
        </Box>
    );
}
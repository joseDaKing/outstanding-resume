import React from "react";

import { Box, Stack } from "../components/layout";

import { Title } from "../components/typography";

import { useAppDispatch } from "../store";

import { optionalSliceGroups } from "../store/slices/orderableSections/optional";

import { sectionOrder } from "../store/slices/sectionOrder";

import { IDisabled, ILabel } from "../types";



interface IListLabelProps extends Required<ILabel>, IDisabled {
    onClick: () => void;
}

const ListLabel: React.FC<IListLabelProps> = ({ label, onClick, disabled }) => {

    return (
        <Box
        css={{
            flexBasis: "50%",
            marginBottom: "$3",
            color: disabled ? "$gray-400" : "$blue-gray-700",
            fontFamily: "$sans",
            cursor: disabled ? "default" : "pointer",
            fontWeight: "$normal",
            "&:hover": {
                color: disabled ? "inherit" : "$light-blue-500"
            }
        }}
        as="li"
        onClick={onClick}>
            {label} 
        </Box>
    );
}

const sectionOrderActions = sectionOrder.slice.actions;

export const AddSections: React.FC = () => {    

    const dispatch = useAppDispatch();

    const labels = Object.values(optionalSliceGroups).map(({ initialState, slice }) => ({
        key: slice.name,
        label: initialState.sectionName,
        onClick: () => {

            console.log("click", slice.name)

            // dispatch(sectionOrderActions.add(slice.name))
        }
    }));

    return (
        <Box>
            <Title
            gutter>
                Lägg till en ny avsnitt
            </Title>

            <Stack
            wrap
            align="start"
            axis="x">
                {labels.map(props => <ListLabel {...props}/>)}
            </Stack>
        </Box>
    );
}
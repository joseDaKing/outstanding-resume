import { 
    Box, 
    ListItemDragHandler,
    ListItemRemoveHandler
}
from "components/layout";

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

import { hobbies } from "state/slices";



const initialHobbies = hobbies.getInitialState();

export const Hobbies: React.FC = () => {

    const dispatch = useAppDispatch();

    const hobbiesState = useAppSelector(store => store.hobbies);

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
                leftSlot={<ListItemDragHandler/>}
                rightSlot={<ListItemRemoveHandler/>}
                resetable={initialHobbies.sectionTitle}
                value={hobbiesState.sectionTitle}
                onValueChange={value => dispatch(hobbies.actions.setSectionTitle(value))}/>
            </SubTitle>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Vad tycker du om ?
            </Text>

            <TextArea 
            css={{
                minHeight: "$24"
            }}
            block
            placeholder="t.ex skidåkning, fallskärmshoppning, målning"
            value={hobbiesState.description}
            onValueChange={value => dispatch(hobbies.actions.setDescription(value))}/>
        </Box>
    );
}
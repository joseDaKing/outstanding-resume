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

const HobbiesHead: React.FC = () => {

    const dispatch = useAppDispatch();

    const sectionTitle = useAppSelector(store => store.hobbies.sectionTitle);

    return (
        <SubTitle
        css={{
            marginBottom: "$8"
        }}>
            <EditText
            leftSlot={<ListItemDragHandler/>}
            rightSlot={<ListItemRemoveHandler/>}
            resetable={initialHobbies.sectionTitle}
            value={sectionTitle}
            onValueChange={value => dispatch(hobbies.actions.setSectionTitle(value))}/>
        </SubTitle>
    );
}

const HobbiesBody: React.FC = () => {

    const dispatch = useAppDispatch();

    const description = useAppSelector(store => store.hobbies.description);

    return (
        <TextArea 
        css={{
            minHeight: "$24"
        }}
        block
        placeholder="eg skiing, skydiving, painting"
        value={description}
        onValueChange={value => dispatch(hobbies.actions.setDescription(value))}/>
    );
}

export const Hobbies: React.FC = () => {
    
    return (
        <Box
        css={{
            backgroundColor: "$inverted",
        }}>
            <HobbiesHead/>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                What do you like ?
            </Text>

            <HobbiesBody/>
        </Box>
    );
}
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
    EditText,
    Label,
    TextField,
    Switch
} 
from "components/form";

import {
    Text,
    SubTitle
}
from "components/typography";

import { PlusIcon } from "@radix-ui/react-icons";

import {
    useAppDispatch,
    useAppSelector
} 
from "state";

import { references } from "state/slices";

import { ItemsContainer } from "../ItemsContainer";



const initialReferences = references.getInitialState();

export const References: React.FC = () => {

    const dispatch = useAppDispatch();

    const referencesState = useAppSelector(store => store.references);

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative",
        }}>
            <SubTitle
            css={{
                marginBottom: "$8",
                position: "relative"
            }}>
                <EditText
                leftSlot={<ListItemDragHandler/>}
                rightSlot={<ListItemRemoveHandler/>}
                resetable={initialReferences.sectionTitle}
                value={referencesState.sectionTitle}
                onValueChange={value => dispatch(references.actions.setSectionTitle(value))}/>
            </SubTitle>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Här lägger du till all relevant erfarenhet, inklusive datum, som du har från de senaste 10 åren. Den senaste tjänsten placerar du högst upp.
            </Text>

            <Label
            name="Dölj erfarenhetsnivå"
            css={{
                marginBottom: "$6"
            }}>
                <Switch
                checked={referencesState.isHidingReferences}
                onCheckedChange={value => dispatch(references.actions.setIsHidingReferences(value))}/>
            </Label>
            
            <ItemsContainer
            items={referencesState.items}>
                <List 
                space="$6"
                value={referencesState.items}
                onValueChange={items => dispatch(references.actions.changeItems(items))}>
                    {item => {

                        let title = "(Ej specificerat)";

                        if (item.nameOfTheReferenced && item.company) {

                            title = `${item.nameOfTheReferenced}, ${item.company}`;
                        }
                        else if (item.nameOfTheReferenced) {

                            title = item.nameOfTheReferenced;
                        }
                        else if (item.company) {

                            title = item.company;
                        }

                        return (
                            <ListItemContent
                            removeable>
                                <AccordionItem
                                title={title}
                                value={item.id}>
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
                                            name="Referentens fullständiga namn"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                value={item.nameOfTheReferenced}
                                                onValueChange={value => dispatch(references.actions.updateItem([
                                                    item.id,
                                                    { nameOfTheReferenced: value }
                                                ]))}/>
                                            </Label>

                                            <Label
                                            block
                                            name="Företag"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                value={item.company}
                                                onValueChange={value => dispatch(references.actions.updateItem([
                                                    item.id,
                                                    { company: value }
                                                ]))}/>
                                            </Label>
                                        </Stack>

                                        <Stack
                                        fullX
                                        css={{
                                            gap: "$6"
                                        }}>
                                            <Label
                                            block
                                            name="Telefon"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                value={item.mobileNumber}
                                                onValueChange={value => dispatch(references.actions.updateItem([
                                                    item.id,
                                                    { mobileNumber: value }
                                                ]))}/>
                                            </Label>

                                            <Label
                                            block
                                            name="E-post"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                value={item.email}
                                                onValueChange={value => dispatch(references.actions.updateItem([
                                                    item.id,
                                                    { email: value }
                                                ]))}/>
                                            </Label>
                                        </Stack>
                                    </Box>
                                </AccordionItem>
                            </ListItemContent>
                        );
                    }}
                </List>
            </ItemsContainer>

            <Button
            block
            size="lg"
            align="start"
            variant="ghost"
            onClick={() => dispatch(references.actions.addItem())}
            StartIcon={PlusIcon}>
                Lägg till jobb
            </Button>
        </Box>
    );
}
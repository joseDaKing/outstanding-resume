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

import { SubTitle } from "components/typography";

import { PlusIcon } from "@radix-ui/react-icons";

import {
    useAppDispatch,
    useAppSelector
} 
from "state";

import { references, RefrenceItem } from "state/slices";

import { ItemsContainer } from "../../ItemsContainer";

import { ItemContainer } from "../../ItemContainer";



const initialReferences = references.getInitialState();

const ReferencesListItem: React.FC<RefrenceItem> = props => {

    const dispatch = useAppDispatch();

    let title = "(Ej specificerat)";

    if (props.nameOfTheReferenced && props.company) {

        title = `${props.nameOfTheReferenced}, ${props.company}`;
    }
    else if (props.nameOfTheReferenced) {

        title = props.nameOfTheReferenced;
    }
    else if (props.company) {

        title = props.company;
    }

    return (
        <ListItemContent
        removeable>
            <ItemContainer>
                <AccordionItem
                title={title}
                value={props.id}>
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
                                value={props.nameOfTheReferenced}
                                onValueChange={value => dispatch(references.actions.updateItem([
                                    props.id,
                                    { nameOfTheReferenced: value }
                                ]))}/>
                            </Label>

                            <Label
                            block
                            name="Företag"
                            orientation="vertical">
                                <TextField
                                size="lg"
                                value={props.company}
                                onValueChange={value => dispatch(references.actions.updateItem([
                                    props.id,
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
                                value={props.mobileNumber}
                                onValueChange={value => dispatch(references.actions.updateItem([
                                    props.id,
                                    { mobileNumber: value }
                                ]))}/>
                            </Label>

                            <Label
                            block
                            name="E-post"
                            orientation="vertical">
                                <TextField
                                size="lg"
                                value={props.email}
                                onValueChange={value => dispatch(references.actions.updateItem([
                                    props.id,
                                    { email: value }
                                ]))}/>
                            </Label>
                        </Stack>
                    </Box>
                </AccordionItem>
            </ItemContainer>
        </ListItemContent>
    );
}

const ReferencesList: React.FC = () => {

    const dispatch = useAppDispatch();

    const items = useAppSelector(store => store.references.items);

    return (
        <ItemsContainer
        items={items}>
            <List 
            space="$6"
            value={items}
            onValueChange={items => dispatch(references.actions.changeItems(items))}>
                {item => <ReferencesListItem {...item}/>}
            </List>
        </ItemsContainer>
    )
}

const ReferencesHead: React.FC = () => {

    const dispatch = useAppDispatch();

    const sectionTitle = useAppSelector(store => store.references.sectionTitle);

    return (
        <SubTitle
        css={{
            marginBottom: "$8",
            position: "relative"
        }}>
            <EditText
            leftSlot={<ListItemDragHandler/>}
            rightSlot={<ListItemRemoveHandler/>}
            resetable={initialReferences.sectionTitle}
            value={sectionTitle}
            onValueChange={value => dispatch(references.actions.setSectionTitle(value))}/>
        </SubTitle>
    );
}

const ReferencesBody: React.FC = () => {

    const dispatch = useAppDispatch();

    const isHidingReferences = useAppSelector(store => store.references.isHidingReferences);

    return (
        <Label
        name="Jag vill dölja referenser och bara lämna ut dem på begäran"
        css={{
            marginBottom: "$6"
        }}>
            <Switch
            checked={isHidingReferences}
            onCheckedChange={value => dispatch(references.actions.setIsHidingReferences(value))}/>
        </Label>
    );
}

export const References: React.FC = () => {

    const dispatch = useAppDispatch();

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative",
        }}>
            <ReferencesHead/>

            <ReferencesBody/>

            <ReferencesList/>

            <Button
            block
            size="lg"
            align="start"
            variant="ghost"
            onClick={() => dispatch(references.actions.addItem())}
            StartIcon={PlusIcon}>
                Lägg till referens
            </Button>
        </Box>
    );
}
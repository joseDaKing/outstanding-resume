import { 
    Box, 
    List, 
    Stack,
    ListItemContent,
    AccordionItem,
    ListItemDragHandler
} 
from "components/layout";

import {  
    Button,
    EditText,
    Label,
    TextField
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

import { links } from "state/slices";

import { ItemsContainer } from "../ItemsContainer";



const initialLinks = links.getInitialState();

export const Links: React.FC = () => {

    const dispatch = useAppDispatch();

    const linksState = useAppSelector(store => store.links);

    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative"
        }}>
            <SubTitle
            css={{
                marginBottom: "$8"
            }}>
                <EditText
                leftSlot={<ListItemDragHandler/>}
                resetable={initialLinks.sectionTitle}
                value={linksState.sectionTitle}
                onValueChange={value => dispatch(links.actions.setSectionTitle(value))}/>
            </SubTitle>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Du kan lägga till länkar till webbplatser som du vill att personalchefer ska se! Du kanske vill lägga till en länk till din portfölj, LinkedIn-profil eller personliga hemsida.
            </Text>

            <ItemsContainer
            items={linksState.items}>
                <List 
                space="$6"
                value={linksState.items}
                onValueChange={value => dispatch(links.actions.changeItems(value))}>
                    {item => (
                        <ListItemContent
                        removeable>
                            <AccordionItem
                            title={item.label || "Etikett"}
                            value={item.id}>
                                <Stack
                                fullX
                                css={{
                                    gap: "$6"
                                }}>
                                    <Label
                                    block
                                    name="Etikett"
                                    orientation="vertical">
                                        <TextField
                                        size="lg"
                                        value={item.label}
                                        onValueChange={value => dispatch(links.actions.updateItem([
                                            item.id,
                                            { label: value }
                                        ]))}/>
                                    </Label>

                                    <Label
                                    block
                                    name="Länk"
                                    orientation="vertical">
                                        <TextField
                                        size="lg"
                                        value={item.url}
                                        onValueChange={value => dispatch(links.actions.updateItem([
                                            item.id,
                                            { url: value }
                                        ]))}/>
                                    </Label>
                                </Stack>
                            </AccordionItem>
                        </ListItemContent>
                    )}
                </List>
            </ItemsContainer>

            <Button
            block
            size="lg"
            align="start"
            variant="ghost"
            onClick={() => dispatch(links.actions.addItem())}
            StartIcon={PlusIcon}>
                Lägg till jobb
            </Button>
        </Box>
    );
}
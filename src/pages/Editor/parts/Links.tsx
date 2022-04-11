import { 
    Box, 
    List, 
    Stack,
    ListItemContent,
    AccordionItem
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

import { useItemsController } from "../useItemsController";



const initialItem = (i: number) => ({
    id: "link-"+ i.toString(),
    label: "label",
    url: "url"
});

export const Links: React.FC = () => {

    const {
        items, 
        setItems, 
        actions: { 
            add 
        }
    } = useItemsController<ReturnType<typeof initialItem>>([]);

    return (
        <Box>
            <SubTitle
            css={{
                marginBottom: "$8"
            }}>
                <EditText
                resetable="Hemsidor & Sociala länkar"
                defaultValue="Hemsidor & Sociala länkar"/>
            </SubTitle>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Du kan lägga till länkar till webbplatser som du vill att personalchefer ska se! Du kanske vill lägga till en länk till din portfölj, LinkedIn-profil eller personliga hemsida.
            </Text>

            <Box
            css={{
                spaceY: "$6"
            }}>
                <Box>
                    <List 
                    space="$6"
                    value={items}
                    onValueChange={setItems}>
                        {item => (
                            <ListItemContent
                            removeable
                            value={item.id}>
                                <AccordionItem
                                title={item.label}
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
                                            defaultValue={item.label}/>
                                        </Label>

                                        <Label
                                        block
                                        name="Länk"
                                        orientation="vertical">
                                            <TextField
                                            size="lg"
                                            defaultValue={item.url}/>
                                        </Label>
                                    </Stack>
                                </AccordionItem>
                            </ListItemContent>
                        )}
                    </List>
                </Box>

                <Button
                block
                size="lg"
                align="start"
                variant="ghost"
                onClick={() => add(initialItem(items.length))}
                StartIcon={PlusIcon}>
                    Lägg till jobb
                </Button>
            </Box>
        </Box>
    );
}
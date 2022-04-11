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
    Switch,
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
    id: "skill-" + i.toString(),
    skill: "skill",
    url: "url"
});

export const Skills: React.FC = () => {

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
                resetable="Kompetenser"
                defaultValue="Kompetenser"/>
            </SubTitle>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Lista kunskaper och erfarenhet för att låta arbetsgivare veta vad du är bra på och optimera dina nyckelord.
            </Text>

            <Box
            css={{
                spaceY: "$6"
            }}>
                <Label
                name="Dölj erfarenhetsnivå">
                    <Switch/>
                </Label>

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
                                title={item.skill}
                                value={item.id}>
                                    <Stack
                                    fullX
                                    css={{
                                        gap: "$6"
                                    }}>
                                        <Label
                                        block
                                        name="Färdighet"
                                        orientation="vertical">
                                            <TextField
                                            size="lg"
                                            defaultValue={item.skill}/>
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
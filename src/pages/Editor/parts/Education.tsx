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
    DatePickerRange,
    EditText,
    Label,
    TextArea,
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
    id: "education-"+ i.toString(),
    school: "skola " + (i + 1),
    exam: "examen",
    city: "city",
    startDate: {
        year: new Date().getFullYear()
    },
    endDate: {
        year: new Date().getFullYear()
    },
    description: "description"
});

export const Education: React.FC = () => {

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
                resetable="Utbilding"
                defaultValue="Utbilding"/>
            </SubTitle>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Om så är  relevant, lägg till dina senaste utbildningsresultat och datum här
            </Text>

            <Box
            css={{
                spaceY: "$6"
            }}>
                <List 
                value={items}
                onValueChange={setItems}>
                    {item => (
                        <ListItemContent
                        removeable
                        value={item.id}>
                            <AccordionItem
                            title={item.school + ", " + item.exam}
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
                                        name="Skola"
                                        orientation="vertical">
                                            <TextField
                                            size="lg"
                                            defaultValue={item.school}/>
                                        </Label>

                                        <Label
                                        block
                                        name="Examen"
                                        orientation="vertical">
                                            <TextField
                                            size="lg"
                                            defaultValue={item.exam}/>
                                        </Label>
                                    </Stack>

                                    <Stack
                                    fullX
                                    css={{
                                        gap: "$6"
                                    }}>
                                        <Label
                                        block
                                        name="Datum"
                                        orientation="vertical">
                                            <DatePickerRange
                                            // @ts-ignore
                                            size="lg"

                                            defaultValue={[item.startDate, item.endDate] as any}/>
                                        </Label>

                                        <Label
                                        block
                                        name="Stad"
                                        orientation="vertical">
                                            <TextField
                                            size="lg"
                                            defaultValue={item.city}/>
                                        </Label>
                                    </Stack>

                                    <Label
                                    block
                                    name="Beskrivning"
                                    orientation="vertical">
                                        <TextArea
                                        size="lg"
                                        defaultValue={item.description}/>
                                    </Label>
                                </Box>
                            </AccordionItem>
                        </ListItemContent>
                    )}
                </List>

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
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
    id: "workExperience-" + i.toString(),
    jobtitle: "jobtitle " + (i + 1),
    employer: "employer",
    city: "city",
    startDate: {
        year: new Date().getFullYear()
    },
    endDate: {
        year: new Date().getFullYear()
    },
    description: "description"
});

export const WorkExperience: React.FC = () => {

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
                resetable="Arbetslivserfarenhet"
                defaultValue="Arbetslivserfarenhet"/>
            </SubTitle>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Här lägger du till all relevant erfarenhet, inklusive datum, som du har från de senaste 10 åren. Den senaste tjänsten placerar du högst upp.
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
                                title={item.jobtitle + ", " + item.employer}
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
                                            name="Jobbtitel"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                defaultValue={item.jobtitle}/>
                                            </Label>

                                            <Label
                                            block
                                            name="Arbetsgivare"
                                            orientation="vertical">
                                                <TextField
                                                size="lg"
                                                defaultValue={item.employer}/>
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
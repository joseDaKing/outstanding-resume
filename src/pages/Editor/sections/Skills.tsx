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
    Switch,
    TextField,
    Slider
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

import { skills } from "state/slices";

import { ItemsContainer } from "../ItemsContainer";



const initialSkills = skills.getInitialState();

const skillLevelLabels = [
    "Nybörjare",
    "Kunning",
    "Skicklig",
    "Erfaren",
    "Expert"
];

export const Skills: React.FC = () => {

    const dispatch = useAppDispatch();

    const skillsState = useAppSelector(store => store.skills);

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
                resetable={initialSkills.sectionTitle}
                value={skillsState.sectionTitle}
                onValueChange={value => dispatch(skills.actions.setSectionTitle(value))}/>
            </SubTitle>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                Lista kunskaper och erfarenhet för att låta arbetsgivare veta vad du är bra på och optimera dina nyckelord.
            </Text>

            <Label
            name="Dölj erfarenhetsnivå"
            css={{
                marginBottom: "$6"
            }}>
                <Switch
                checked={skillsState.isHidingLevel}
                onCheckedChange={value => dispatch(skills.actions.setIsHidingLevel(value))}/>
            </Label>

            <ItemsContainer
            items={skillsState.items}>
                <List 
                space="$6"
                value={skillsState.items}
                onValueChange={value => dispatch(skills.actions.changeItems(value))}>
                    {item => (
                        <ListItemContent
                        removeable>
                            <AccordionItem
                            title={item.name || "(Ej specificerat)"}
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
                                        value={item.name}
                                        onValueChange={value => dispatch(skills.actions.updateItem([
                                            item.id,
                                            { name: value }
                                        ]))}/>
                                    </Label>

                                    <Label
                                    block
                                    name={`Nivå - ${skillLevelLabels[item.level]}`}
                                    orientation="vertical">
                                        <Slider
                                        max={4}
                                        size="lg"
                                        value={[item.level]}
                                        onValueChange={([value]) => dispatch(skills.actions.updateItem([
                                            item.id,
                                            { level: value }
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
            StartIcon={PlusIcon}
            onClick={() => dispatch(skills.actions.addItem())}>
                Lägg till färdighet
            </Button>
        </Box>
    );
}
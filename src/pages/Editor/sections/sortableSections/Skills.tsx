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

import { SkillItem, skills } from "state/slices";

import { ItemsContainer } from "../../ItemsContainer";

import { ItemContainer } from "../../ItemContainer";



const initialSkills = skills.getInitialState();

const skillLevelLabels = [
    "Beginner",
    "Knowledgeable",
    "Skilled",
    "Experienced",
    "Expert",
];

const SkillListItem: React.FC<SkillItem> = props => {

    const dispatch = useAppDispatch();

    return (
        <ListItemContent
        removeable>
            <ItemContainer>
                <AccordionItem
                title={props.name || "(Not specified)"}
                value={props.id}>
                    <Stack
                    fullX
                    css={{
                        gap: "$6"
                    }}>
                        <Label
                        block
                        name="Skill"
                        orientation="vertical">
                            <TextField
                            size="lg"
                            value={props.name}
                            onValueChange={value => dispatch(skills.actions.updateItem([
                                props.id,
                                { name: value }
                            ]))}/>
                        </Label>

                        <Label
                        block
                        name={`Level - ${skillLevelLabels[props.level]}`}
                        orientation="vertical">
                            <Slider
                            max={4}
                            size="lg"
                            value={[props.level]}
                            onValueChange={([value]) => dispatch(skills.actions.updateItem([
                                props.id,
                                { level: value }
                            ]))}/>
                        </Label>
                    </Stack>
                </AccordionItem>
            </ItemContainer>
        </ListItemContent>
    );
}

const SkillList: React.FC = () => {

    const items = useAppSelector(store => store.skills.items);

    const dispatch = useAppDispatch();

    return (
        <ItemsContainer
        items={items}>
            <List 
            space="$6"
            value={items}
            onValueChange={value => dispatch(skills.actions.changeItems(value))}>
                {item => <SkillListItem key={item.id} {...item}/>}
            </List>
        </ItemsContainer>
    );
}

const SkillsHead: React.FC = () => {

    const dispatch = useAppDispatch();

    const sectionTitle = useAppSelector(store => store.skills.sectionTitle);

    return (
        <SubTitle
        css={{
            marginBottom: "$8"
        }}>
            <EditText
            leftSlot={<ListItemDragHandler/>}
            resetable={initialSkills.sectionTitle}
            value={sectionTitle}
            onValueChange={value => dispatch(skills.actions.setSectionTitle(value))}/>
        </SubTitle>
    );
}

const SkillsBody: React.FC = () => {

    const dispatch = useAppDispatch();

    const isHidingLevel = useAppSelector(store => store.skills.isHidingLevel);

    return (
        <Label
        name="Hide experience level"
        css={{
            marginBottom: "$6"
        }}>
            <Switch
            checked={isHidingLevel}
            onCheckedChange={value => dispatch(skills.actions.setIsHidingLevel(value))}/>
        </Label>
    );
}

export const Skills: React.FC = () => {

    const dispatch = useAppDispatch();
    
    return (
        <Box
        css={{
            backgroundColor: "$inverted",
            position: "relative"
        }}>
            <SkillsHead/>

            <Text
            css={{
                marginBottom: "$6"
            }}>
                List skills and experience to let employers know what you are good at and optimize your keywords.
            </Text>

            <SkillsBody/>

            <SkillList/>

            <Button
            block
            size="lg"
            align="start"
            variant="ghost"
            StartIcon={PlusIcon}
            onClick={() => dispatch(skills.actions.addItem())}>
                Add skill
            </Button>
        </Box>
    );
}
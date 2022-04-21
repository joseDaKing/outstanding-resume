import { 
    Box,
    Stack,
    ScrollArea,
    Accordion
}
from "components/layout";

import * as Sections from "./sections";

import { List } from "components/layout";

import { 
    useAppDispatch,
    useAppSelector
}
from "state";

import { 
    sections, 
    workExperience,
    education,
    links,
    skills,
    languages,
    hobbies,
    extraAcivities,
    references,
    interships,
    courses
}
from "state/slices";

import { ListItemType } from "helpers";



export const Editor: React.FC = () => {

    const sectionOrderState = useAppSelector(store => store.sections.items);

    const sectionItems = sectionOrderState.map(section => ({ 
        id: section
    }));

    const dispatch = useAppDispatch();

    const onValueChangeHandler = (items: ListItemType[]) => {
                            
        const newSectionOrder = items.map(({ id }) => id);

        dispatch(sections.actions.changeItems(newSectionOrder));
    }

    return (
        <Stack 
        screen
        alignCross="start"
        orientation="horizontal">
            <ScrollArea css={{
                width: "$1__2",
                height: "100%",
                backgroundColor: "$inverted",
            }}>
                <Accordion
                collapsible
                type="single">
                    <Box
                    css={{
                        padding: "$10",
                        paddingX: "$14",
                    }}>
                        <Box
                        css={{
                            marginBottom: "$16"
                        }}>
                            <Sections.ContactInformation/>
                        </Box>

                        <Box
                        css={{
                            marginBottom: "$16"
                        }}>
                            <Sections.ProfessionalExperience/>
                        </Box>

                        <List
                        space="$16"
                        value={sectionItems}
                        onValueChange={onValueChangeHandler}>
                            {({ id }) => (
                                <>
                                    {id === workExperience.name &&
                                    <Sections.WorkExperience/>}

                                    {id === education.name &&
                                    <Sections.Education/>}

                                    {id === links.name &&
                                    <Sections.Links/>}

                                    {id === skills.name &&
                                    <Sections.Skills/>}

                                    {id === languages.name &&
                                    <Sections.Languages/>}

                                    {id === hobbies.name &&
                                    <Sections.Hobbies/>}

                                    {id === extraAcivities.name &&
                                    <Sections.ExtraActivities/>}

                                    {id === references.name &&
                                    <Sections.References/>}

                                    {id === courses.name &&
                                    <Sections.Courses/>}

                                    {id === interships.name &&
                                    <Sections.Interhships/>}
                                </>
                            )}
                        </List>
                    </Box>
                </Accordion>
                
                <Sections.AddNewSections/>
            </ScrollArea>
        
            <Stack fullY alignMain="center" css={{
                width: "$1__2",
                padding: "$8",
                boxShadow: "$md",
                backgroundColor: "$inverted",
                gradientDirection: "45deg",
                gradientFrom: "$primary9",
                gradientTo: "$secondary9" ,
                position: "relative",
            }}>
                
            </Stack>
        </Stack>
    );
}
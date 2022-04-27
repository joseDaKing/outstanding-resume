import { 
    Box,
    Stack,
    ScrollArea,
    Accordion,
    List
}
from "components/layout";

import * as Sections from "./sections";

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
    extraActivities,
    references,
    interships,
    courses,
    Sections as SectionsType
}
from "state/slices";

import { ListItemType, useGetFileName } from "helpers";

import { PDFDownloadButton, PDFView } from "components/pdf";

import { MadridCVTemplate } from "cvTemplates";

import { useNavigate } from "react-router-dom";



export const Editor: React.FC = () => {

    const sectionOrderState = useAppSelector(store => store.sections.items);

    const sectionItems = sectionOrderState.map(section => ({ 
        id: section
    }));

    const dispatch = useAppDispatch();

    const onValueChangeHandler = (items: ListItemType[]) => {
                            
        const newSectionOrder = items.map(({ id }) => id);

        dispatch(sections.actions.changeItems(newSectionOrder as SectionsType[]));
    }

    const navigate = useNavigate();

    const onClikcHandler = () => navigate("/preview");

    const state = useAppSelector(state => state);
    
    const downloadName = useGetFileName();

    return (
        <Stack 
        screen
        alignCross="start"
        orientation="horizontal">
            <ScrollArea 
            css={{
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

                                    {id === extraActivities.name &&
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
        
            <Stack 
            fullY
            orientation="vertical"
            alignMain="center" 
            css={{
                gap: "$4",
                width: "$1__2",
                padding: "$8", 
                gradientDirection: "45deg",
                gradientFrom: "$primary9",
                gradientTo: "$secondary9" ,
                position: "relative",
            }}>
                <Box
                css={{
                    width: "52.5%",
                }}>
                    <PDFView
                    onClick={onClikcHandler}
                    state={state}
                    Document={MadridCVTemplate}
                    scale={0.75}/>
                </Box>

                <PDFDownloadButton
                variant="inverted"
                downloadName={downloadName}
                state={state}
                Document={MadridCVTemplate}/>
            </Stack>
        </Stack>
    );
}
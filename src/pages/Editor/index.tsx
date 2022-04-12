import { 
    Box,
    Stack,
    ScrollArea,
    Accordion
}
from "components/layout";

import * as Parts from "./sections";

import { List } from "components/layout";

import { 
    useAppDispatch,
    useAppSelector
}
from "state";

import { 
    sectionOrder, 
    workExperience,
    education,
    links,
    skills
}
from "state/slices";

import { ListItemType } from "helpers";



export const Editor: React.FC = () => {

    const sectionOrderState = useAppSelector(store => store.sectionOrder.items);

    const sectionItems = sectionOrderState.map(section => ({ 
        id: section
    }));

    const dispatch = useAppDispatch();

    const onValueChangeHandler = (items: ListItemType[]) => {
                            
        const newSectionOrder = items.map(({ id }) => id);

        dispatch(sectionOrder.actions.changeItems(newSectionOrder));
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
                            <Parts.ContactInformation/>
                        </Box>

                        <Box
                        css={{
                            marginBottom: "$16"
                        }}>
                            <Parts.ProfessionalExperience/>
                        </Box>

                        <List
                        space="$16"
                        value={sectionItems}
                        onValueChange={onValueChangeHandler}>
                            {({ id }) => (
                                <>
                                    {id === workExperience.name &&
                                    <Parts.WorkExperience/>}

                                    {id === education.name &&
                                    <Parts.Education/>}

                                    {id === links.name &&
                                    <Parts.Links/>}

                                    {id === skills.name &&
                                    <Parts.Skills/>}
                                </>
                            )}
                        </List>
                    </Box>
                </Accordion>
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
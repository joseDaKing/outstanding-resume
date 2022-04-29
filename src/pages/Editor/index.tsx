import { 
    Box,
    Stack,
    ScrollArea,
    Accordion
}
from "components/layout";

import * as Sections from "./sections";



export const Editor: React.FC = () => {

    return (
        <Stack 
        screen
        alignCross="start"
        orientation="horizontal">
            <ScrollArea 
            css={{
                width: "$1__2",
                "@2xl": {
                    width: "$1__3"
                },
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

                        <Sections.SortableSections/>
                    </Box>
                </Accordion>
                
                <Box
                css={{
                    padding: "$10",
                    paddingX: "$14",
                }}>
                    <Sections.AddNewSections/>
                </Box>
            </ScrollArea>
        
            <Box
            css={{
                width: "$1__2",
                "@2xl": {
                    width: "$2__3"
                },
                height: "100vh"
            }}>
                <Sections.Preview/>
            </Box>
        </Stack>
    );
}
import { 
    Box,
    Stack,
    ScrollArea,
    Accordion
}
from "components/layout";

import { useState } from "react";

import * as Parts from "./parts";

import { AccordionController } from "./AccordionController";



export const Editor: React.FC = () => {

    const [ activeAccordion, setActiveAccordion ] = useState("");

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
                value={activeAccordion}
                onValueChange={setActiveAccordion}
                collapsible
                type="single">
                    <AccordionController.Provider
                    value={{
                        active: activeAccordion,
                        setActive: setActiveAccordion
                    }}>
                        <Box
                        css={{
                            padding: "$10",
                            paddingX: "$14",
                            spaceY: "$16"
                        }}>
                            <Parts.ContactInformation/>

                            <Parts.ProfessionalExperience/>

                            <Parts.WorkExperience/>

                            <Parts.Education/>

                            <Parts.Links/>

                            <Parts.Skills/>
                        </Box>
                    </AccordionController.Provider>
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
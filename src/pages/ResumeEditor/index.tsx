import React from "react";

import { Stack, Box } from "../../components/layout";

import { Accordion } from "../../components/misc";

import { 
    OrderableSections,
    ProfessionalExperience,
    ContactDetails
} 
from "./sections";

import { AddSectionsContainer } from "../../containers";

import { Preview } from "./Preview";

export const ResumeEditor: React.FC = () => {

    return (
        <Accordion>
            <Stack 
            axis="x" 
            css={{ 
                _size: "$screen" 
            }}>
                <Box
                css={{
                    backgroundColor: "white",
                    overflowY: "scroll",
                    padding: "$10",
                    flexBasis: "50%",
                    width: "50%",
                    "@2xl": {
                        flexBasis: "40%",
                        width: "40%"
                    }
                }}>
                    <ContactDetails/>
                    
                    <ProfessionalExperience/>
                    
                    <OrderableSections/>
                    
                    <AddSectionsContainer/>
                </Box>

                <Box 
                css={{ 
                    backgroundColor: "$blue-gray-400",
                    flexBasis: "50%",
                    width: "50%",
                    "@2xl": {
                        flexBasis: "60%", 
                        width: "60%"
                    }
                }}>
                    <Preview/>
                </Box>
            </Stack>
        </Accordion>
    );
}
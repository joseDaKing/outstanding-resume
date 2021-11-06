import React from "react";

import { Stack, Box } from "./components/layout";

import { Accordion } from "./components/misc";

import "./globalStyles";

export const App: React.FC = () => {
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
                    padding: "$10"
                }}>
                    
                </Box>

                <Box 
                css={{
                    backgroundColor: "$blue-gray-400"
                }}>
                    
                </Box>
            </Stack>
        </Accordion>
    );
}

export default App;
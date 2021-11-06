import React from "react";

import { Stack, Box } from "./components/layout";

import { Accordion } from "./components/misc";

import { ItemsContainer } from "./container";

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
                    <Stack 
                    axis="y"
                    space="lg">
                        <ItemsContainer
                        section="workExperience"
                        label="Lägg till en ny"
                        render={props => (
                            <p> 
                                Abra 
                                <br/>
                                props.city: {props.city}
                            </p>
                        )}/>
                    </Stack>
                </Box>

                <Box css={{
                    backgroundColor: "$blue-gray-400"
                }}>
                    
                </Box>
            </Stack>
        </Accordion>
    );
}

export default App;
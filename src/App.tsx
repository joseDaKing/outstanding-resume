import { 
  Box,
  Stack, 
  ScrollArea,
}
from "components/layout";

import { useState } from "react";

import { Title } from "components/typography";
import { EditText } from "components/form";



function App() {

  const initialState = "Kontaktuppgifter";

  const [ state, setState ] = useState(initialState);

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
        
        <Box
        css={{
          padding: "$10",
          paddingX: "$12",
          spaceY: "$16"
        }}>
          <Title>
            <EditText
            value={state}
            onValueChange={setState}
            resetable={initialState}/>
          </Title>
        </Box>
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

export default App;
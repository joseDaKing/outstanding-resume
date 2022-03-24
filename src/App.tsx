import { 
  Box,
  Stack, 
  ScrollArea
}
from "components/layout";

import { DatePicker } from "components/form";



function App() {

  return (
    <Stack 
    screen
    alignCross="center"
    orientation="horizontal">
      <ScrollArea css={{
        width: "$1__2",
        height: "100%",
        backgroundColor: "$inverted",
      }}>
        <Box css={{
          padding: "$8"
        }}>
          <Box css={{
            spaceY: "$8",
            margin: "auto",
            width: "fit-content"
          }}>
            <DatePicker/>
          </Box>
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
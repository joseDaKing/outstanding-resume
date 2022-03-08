import { Box, Stack, ScrollArea } from "components/layout";

import { Label, Checkbox } from "components/form";



function App() {

  return (
    <Stack 
    screen
    alignCross="center"
    orientation="horizontal">
      <ScrollArea color="danger" css={{
        width: "$1__2",
        height: "100%",
        backgroundColor: "$inverted",
      }}>
        <Stack orientation="vertical" full css={{
          padding: "$6",
          paddingTop: "$16",
          gap: "$12",
        }}>
          <Label name="Label" help="Help">
            <Checkbox/>
          </Label>
        </Stack>
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
        <Box css={{
          margin: "auto",
          width: "$1__2",
        }}>
          <Label name="Label" help="Help" variant="inverted">            
            <Checkbox/>
          </Label>
        </Box>
      </Stack>
    </Stack>
  );
}

export default App;
import { Box, Stack, ScrollArea } from "components/layout";

import { Switch, Checkbox } from "components/form";



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
          <Stack orientation="horizontal" full css={{
            padding: "$6",
            gap: "$12",
          }}>
            <Switch label="Label" help="Help" variant="inverted" color="primary"/>
            <Checkbox label="Label" help="Help" variant="inverted" color="primary"/>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default App;
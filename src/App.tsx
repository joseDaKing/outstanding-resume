import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { Box, Stack, ScrollArea } from "components/layout";

import { TextField, Switch } from "components/form";



function App() {
  return (
    <Stack 
    screen
    alignCross="center"
    orientation="horizontal">
      <ScrollArea color="neutral" css={{
        width: "$1__2",
        height: "100%",
        backgroundColor: "$inverted",
      }}>
        <Stack orientation="vertical" full css={{
          padding: "$6",
          gap: "$12",
        }}>
          <TextField 
          label="Label"
          help="Help"
          placeholder="Placeholder"/>

          <Switch
          label="Label"
          help="Help"/>
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
          <Stack orientation="vertical" full css={{
            padding: "$6",
            gap: "$12",
          }}>
            <Switch
            variant="inverted"
            label="Label"
            help="Help"/>
          </Stack>
        </Box>
      </Stack>
    </Stack>
  );
}

export default App;
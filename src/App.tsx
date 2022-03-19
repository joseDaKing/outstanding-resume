import {
  IconToggle,
  ToggleGroup,
  ToggleGroupItem,
}
from "components/form";

import { 
  Box,
  Stack, 
  ScrollArea
}
from "components/layout";

import { PlusIcon } from "@radix-ui/react-icons";



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
        <Box
        css={{
          padding: "$8",
          spaceY: "$8"
        }}>
          
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
        <ToggleGroup
        type="multiple"
        css={{
          margin: "auto"
        }}
        variant="inverted"
        size="lg">
          <ToggleGroupItem value="1" asChild>
            <IconToggle
            Icon={PlusIcon}/>
          </ToggleGroupItem>

          <ToggleGroupItem value="2" asChild>
            <IconToggle
            Icon={PlusIcon}/>
          </ToggleGroupItem>

          <ToggleGroupItem value="3" asChild>
            <IconToggle
            Icon={PlusIcon}/>
          </ToggleGroupItem>
        </ToggleGroup>
      </Stack>
    </Stack>
  );
}

export default App;
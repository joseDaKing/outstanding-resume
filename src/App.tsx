import {
  Toggle,
  IconButton,
  ButtonGroup
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
          <ButtonGroup
          css={{
            margin: "auto"
          }}
          size="lg">
            <IconButton
            Icon={PlusIcon}/>

            <IconButton
            Icon={PlusIcon}/>

            <IconButton
            Icon={PlusIcon}/>
          </ButtonGroup>
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
        <ButtonGroup
        size="lg"
        variant="inverted">
          <IconButton
          Icon={PlusIcon}/>

          <IconButton
          Icon={PlusIcon}/>

          <IconButton
          Icon={PlusIcon}/>
        </ButtonGroup>
      </Stack>
    </Stack>
  );
}

export default App;
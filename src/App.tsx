import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { PlusIcon } from "@radix-ui/react-icons";

import { IconButton, Textfield } from "components/form";

import { Box, Stack, ScrollArea } from "components/layout";



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
        <Stack full css={{
          padding: "$6",
          gap: "$3" 
        }}>
          <IconButton
          content
          variant="ghost"
          Icon={PlusIcon}/>

          <Textfield
          defaultValue="Value"          
          placeholder="Placeholder"/>
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
          <AspectRatio ratio={1/Math.sqrt(2)}>
            <Box full css={{
              margin: "auto",
              boxShadow: "$2xl",
              borderRadius: "$sm",
              backgroundColor: "$inverted"
            }}/>
          </AspectRatio>
        </Box>
      </Stack>
    </Stack>
  );
}

export default App;
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { Box, Stack, ScrollArea } from "components/layout";

import { PlusIcon } from "@radix-ui/react-icons";

import { IconButton, Button } from "components/form";


function App() {
  return (
    <Stack 
    screen
    alignCross="center"
    axis="x">
      <ScrollArea color="neutral" css={{
        width: "$1__2",
        height: "100%",
        backgroundColor: "$inverted",
      }}>
        <Stack css={{
          spaceY: "$4",
          padding: "$4",
        }}>

          
        </Stack>

        <Stack axis="x" css={{
          gap: "$4"
        }}>
          <IconButton
          round
          content
          variant="ghost"
          Icon={PlusIcon}/>

          <Button
          round
          content
          variant="ghost"
          StartIcon={PlusIcon}>
            Abra
          </Button>
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
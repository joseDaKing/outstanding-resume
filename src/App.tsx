import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { Box, Stack, ScrollArea } from "components/layout";

import { SubTitle, Title, Text } from "./components/typography";



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
        <Box css={{
          spaceY: "$4",
          margin: "$4",
          padding: "$4",
          borderRadius: "$md",
          backgroundColor: "$secondary3"
        }}>
          <Title>
            Stats at a glance
          </Title>

          <SubTitle>
            Performant
          </SubTitle>
          
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
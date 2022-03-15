import {
  Button,
  Label,
  TextField
}
from "components/form";

import { 
  Box,
  Stack, 
  ScrollArea
}
from "components/layout";

import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} 
from "components/overlays";



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
            padding: "$32"
          }}>
            <Popover>
              <PopoverTrigger
              asChild>
                <Button
                variant="ghost"
                css={{
                  margin: "auto"
                }}>
                  Button
                </Button>
              </PopoverTrigger>

              <PopoverContent
              css={{
                height: "$48"
              }}>
                <Box
                css={{
                  spaceY: "$8"
                }}>
                  <Label 
                  name="Label"
                  orientation="vertical">
                    <TextField/>
                  </Label>

                  <Label 
                  name="Label"
                  orientation="vertical">
                    <TextField/>
                  </Label>

                  <Label 
                  name="Label"
                  orientation="vertical">
                    <TextField/>
                  </Label>
                </Box>
              </PopoverContent>
            </Popover>
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
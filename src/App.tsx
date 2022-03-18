import { 
  Button,
  ButtonGroup
}
from "components/form";

import { 
  Box,
  Stack, 
  ScrollArea
}
from "components/layout";




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
          <ButtonGroup block variant="ghost" size="lg">
            <Button>
              Abra
            </Button>

            <Button>
              Abra
            </Button>

            <Button>
              Abra
            </Button>
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
        
      </Stack>
    </Stack>
  );
}

export default App;
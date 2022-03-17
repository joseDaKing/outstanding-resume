import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import {
  Label,
  Select,
  SelectItem,
  SelectSeperator
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
          padding: "$32"
        }}>
          <Label name="Label">
            <Select defaultValue="none">
              <SelectItem value="none"/>
              
              {Array(22).fill(0).map((_, index) => (
                <SelectItem value={`apple-${index + 1}`}/>
              ))}
            </Select>
          </Label>
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
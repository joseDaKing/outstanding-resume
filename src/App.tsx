import { 
  Label,
  Select,
  SelectItem,
  TextArea,
  TextField
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
          <Stack
          css={{
            gap: "$4"
          }}>
            <Label
            block
            name="Label"
            help="Help"
            orientation="vertical">
              <Select defaultValue="value-1">
                {Array(10).fill("").map((_, index) => (
                  <SelectItem 
                  key={index}
                  value={`value-${index + 1}`}/>
                ))}
              </Select>
            </Label>

            <Label
            block
            name="Label"
            help="Help"
            orientation="vertical">
              <TextField/>
            </Label>
          </Stack>

          <Label
          block
          name="Label"
          help="Help"
          orientation="vertical">
            <TextArea/>
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
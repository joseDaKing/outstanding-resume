import { Label, TextArea } from "components/form";

import { Stack, ScrollArea } from "components/layout";



function App() {

  return (
    <Stack 
    screen
    alignCross="center"
    orientation="horizontal">
      <ScrollArea color="neutral" css={{
        width: "$1__2",
        height: "100%",
        padding: "$8",
        backgroundColor: "$inverted",
      }}>
        <Label 
        block
        name="Label"
        help="Help"
        orientation="vertical">
          <TextArea/>
        </Label>
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
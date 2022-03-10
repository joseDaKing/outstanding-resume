import { Label, Slider, TextField } from "components/form";

import { Stack, ScrollArea, Accordion } from "components/layout";



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
        <Accordion type="multiple">
          <Accordion.Item 
          color="neutral"
          title="Title 1"
          subtitle="Subtitle 1"
          value="1">
            <Label name="Label">
              <Slider/>
            </Label>
          </Accordion.Item>
          
          <Accordion.Item 
          color="neutral"
          title="Title 2"
          subtitle="Subtitle 2"
          value="2">
            
            <Label name="Label">
              <TextField/>
            </Label>
          </Accordion.Item>
        </Accordion>
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
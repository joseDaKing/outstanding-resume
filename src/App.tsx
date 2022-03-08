import { Box, Stack, ScrollArea } from "components/layout";

import { Slider, Label, Switch } from "components/form";



function App() {

  return (
    <Stack 
    screen
    alignCross="center"
    orientation="horizontal">
      <ScrollArea color="danger" css={{
        width: "$1__2",
        height: "100%",
        backgroundColor: "$inverted",
      }}>
        <Stack orientation="vertical" alignCross="start" full css={{
          padding: "$6",
          paddingTop: "$16",
          gap: "$12",
        }}>
          <Label
          name="Label"
          help="Help"
          css={{
            width: "100%"
          }}>   
            <Switch/>
          </Label>  

          <Label
          name="Label"
          help="Help"
          css={{
            width: "100%"
          }}>   
            <Slider defaultValue={[50]}/>
          </Label>     
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
        <Stack orientation="vertical" alignCross="start" full css={{
          padding: "$6",
          paddingTop: "$16",
          gap: "$12",
        }}>
          <Label
          variant="inverted"
          name="Label"
          help="Help"
          css={{
            width: "100%"
          }}>   
            <Switch/>
          </Label>  

          <Label
          name="Label"
          help="Help"
          variant="inverted"
          css={{
            width: "100%"
          }}>   
            <Slider defaultValue={[50]}/>
          </Label>     
        </Stack>
      </Stack>
    </Stack>
  );
}

export default App;
import { 
  Box,
  Stack, 
  ScrollArea
}
from "components/layout";

import { Button, Calendar, CalendarState } from "components/form";

import { useState } from "react";



function App() {

  const [state, setState] = useState<CalendarState>({
    active: "year",
    date: new Date("2017 08")
  })

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

          <Button onClick={() => setState({
            active: "month",
            date: new Date("2017 08")
          })}>
            change  
          </Button>          

          <Calendar
          value={state}
          onValueChange={setState}/>
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
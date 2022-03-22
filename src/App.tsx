import { 
  Box,
  Stack, 
  ScrollArea
}
from "components/layout";

import { Button, DatePicker, DatePickerState } from "components/form";

import { useState } from "react";

import { Text } from "components/typography";

import dayjs from "dayjs.config";

import { useEffect } from "react";



function App() {

  const [state, setState] = useState<DatePickerState>({
    active: "month",
    date: new Date("mar, 2001")
  });

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
        <Box css={{
          padding: "$8"
        }}>
          <Box css={{
            spaceY: "$8",
            margin: "auto",
            width: "fit-content"
          }}>
            <Button onClick={() => setState({
              active: "year",
              date: new Date("2015")
            })}>
              Change
            </Button>

            <Text align="center">
              {dayjs.monthsShort().concat([])[state?.date.getMonth() ?? 0]} - {state?.date.getFullYear()}
            </Text>

            <DatePicker
            />
          </Box>
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
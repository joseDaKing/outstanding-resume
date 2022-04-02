import { 
  Box,
  Stack, 
  ScrollArea,
  ListItem
}
from "components/layout";

import { List } from "components/layout";



function App() {

  return (
    <Stack 
    screen
    alignCross="start"
    orientation="horizontal">
      <ScrollArea css={{
        width: "$1__2",
        height: "100%",
        backgroundColor: "$inverted",
      }}>
        <Box css={{
          padding: "$10",
          paddingX: "$12",
          spaceY: "$4"
        }}>
          <List 
          defaultValue={Array(3).fill("").map((_, i) => ({
            id: String.fromCharCode("A".charCodeAt(0) + i)
          }))}>
            {({ id }) => (
              <ListItem
              deletable
              value={id}>
                <Box
                css={{
                  margin: "auto",
                  height: "$32",
                  borderRadius: "$sm",
                  backgroundColor: (
                    id === "A" ? 
                      "$action10"
                    : id === "B" ?
                      "$danger10"
                    : "$warning10" 
                  ),
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center"
                }}>
                  <span>
                    {id}
                  </span> 
                </Box>
              </ListItem>
            )}
          </List>
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
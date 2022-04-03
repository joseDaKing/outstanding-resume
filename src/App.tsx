import { 
  Box,
  Stack, 
  ScrollArea,
  ListItem
}
from "components/layout";

import { List } from "components/layout";



const Item: React.FC = props => {

  return (
    <Box
    css={{
      margin: "auto",
      height: "$16",
      borderRadius: "$sm",
      backgroundColor: "$warning10",
      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }}>
      <span>
        {props.children}
      </span> 
    </Box>
  );
}

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
                <Item>
                  {id}
                </Item>
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
import { PlusIcon } from "@radix-ui/react-icons";

import { Button } from "components/form";

import { 
  Box,
  Stack, 
  ScrollArea,
  ListItem
}
from "components/layout";

import { List } from "components/layout";

import { ListItemType, useItemsController } from "helpers";

import { useState } from "react";



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

let i = 1;

function App() {

  const [state, setState] = useState<ListItemType[]>(Array(4).fill("").map((_,i) => ({ id: i.toString() })));

  const itemsController = useItemsController([ state, setState]); 

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
        
        <Box
        css={{
          padding: "$10",
          paddingX: "$12",
          spaceY: "$4"
        }}>
          <List 
          value={state}
          onValueChange={setState}>
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
          
          <Button
          variant="ghost"
          onClick={() => {

            itemsController.remove("2")

            i++;
          }}
          StartIcon={PlusIcon}
          css={{
            marginTop: "$16"
          }}>
            Add a new item
          </Button>
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
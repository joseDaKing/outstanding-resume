import { Button } from "components/form";

import { 
  Box,
  Stack, 
  ScrollArea
}
from "components/layout";

import { 
  DropdownMenu, 
  DropdownMenuContent,
  DropdownSubMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuTriggerItem,
  DropdownMenuSeperator,
  DropdownMenuItemSlot
} 
from "components/overlays";



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
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" css={{
                margin: "auto"
              }}>
                Button
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent>
              <DropdownMenuItem>
                Item 1
                <DropdownMenuItemSlot>
                  Abra
                </DropdownMenuItemSlot>
              </DropdownMenuItem>

              <DropdownMenuItem>
                Item 2
              </DropdownMenuItem>

              <DropdownMenuSeperator/>

              <DropdownMenu>
                <DropdownMenuTriggerItem>
                  Item 3
                </DropdownMenuTriggerItem>

                <DropdownSubMenuContent>
                  <DropdownMenuItem>
                    Item 4
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    Item 5
                  </DropdownMenuItem>

                  <DropdownMenuSeperator/>
                  
                  <DropdownMenu>
                    <DropdownMenuTriggerItem>
                      Item 6
                    </DropdownMenuTriggerItem>

                    <DropdownSubMenuContent>
                      <DropdownMenuItem>
                        Item 7
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        Item 8
                      </DropdownMenuItem>

                      <DropdownMenuItem>
                        Item 9
                      </DropdownMenuItem>
                    </DropdownSubMenuContent>
                  </DropdownMenu>
                </DropdownSubMenuContent>
              </DropdownMenu>
            </DropdownMenuContent>
          </DropdownMenu>
        </Box>
      </ScrollArea>
      
      <Stack fullY alignMain="end" css={{
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
import { 
  Box,
  Stack, 
  ScrollArea,
  Accordion,
  AccordionItem,
  Items,
  Item,
  DragOverlay,
  DragHandler,
  RemoveHandler
}
from "components/layout";

import { useRef, useState } from "react";

import { stitches } from "stitches";



const StyledItem = stitches.styled(Item, {
  position: "relative",
  zIndex: "$0",
  display: "flex",
  alignItems: "center",
  "&[data-state='dragging']": {
    opacity: 0
  }
});

const StyledDragHandler = stitches.styled(DragHandler, {
  size: "$6",
  textAlign: "center",
  borderRadius: "$sm",
  backgroundColor: "$action8",
});

const StyledRemoveHandler = stitches.styled(RemoveHandler, {
  size: "$6",
  borderRadius: "$sm",
  backgroundColor: "$danger10",
});

const StyledDragOverlay = stitches.styled(DragOverlay, {
  overflow: "hidden",
  zIndex: "$1",
  position: "relative",
  filterDropShadow: "0px 0px 16px rgba(0 0 0 / 0.35)",
  opacity: "$85"
});

function App() {

  const [ items, setItems ] = useState(
    Array(6)
    .fill("")
    .map((_, index) => ({ 
      id: (index + 1).toString() 
    }))
  );

  const [active, setActive] = useState("");

  const activeItem = useRef("");
  
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
          padding: "$8",
          spaceY: "$4"
        }}>
          <Accordion
          collapsible
          value={active}
          onValueChange={setActive}
          type="single">
            <Items
            defaultValue={items}
            render={({ id }) => (
              <StyledItem
              value={id}>
                <StyledDragHandler>
                  {id}
                </StyledDragHandler>
                
                <AccordionItem
                value={id}
                title="Title"
                subtitle="Subtitle"
                css={{
                  flexShrink: 1,
                  marginX: "$4",
                  width: "$full"
                }}>
                  Content
                </AccordionItem>
                
                <StyledRemoveHandler/>
              </StyledItem> 
            )}>
              <StyledDragOverlay/>
            </Items>
          </Accordion>
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
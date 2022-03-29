import { 
  Box,
  Stack, 
  ScrollArea,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
}
from "components/layout";



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
          padding: "$8",
          spaceY: "$4"
        }}>
          <Tabs>
            <TabsList block>
              {Array(3).fill("").map((_, index) => (
                <TabsTrigger 
                key={index}
                value={index.toString()}>
                  {index+1}
                </TabsTrigger>
              ))}
            </TabsList>
            {Array(3).fill("").map((_, index) => (
              <TabsContent
              key={index}
              value={index.toString()}>
                {index+1}
              </TabsContent>
            ))}
          </Tabs>
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
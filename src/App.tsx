import { Stack, ScrollArea } from "components/layout";

import { Button } from "components/form";

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogTitle,
  AlertDialogDescription
}
from "components/overlays";

import { Text, Title } from "components/typography";



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
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button>
              open
            </Button>
          </AlertDialogTrigger>

          <AlertDialogContent
          css={{
            width: "$md"
          }}>
            <Stack
            full
            orientation="vertical"
            css={{
              gap: "$8"
            }}>
              <AlertDialogTitle asChild>
                <Title>
                  Are you absolutely sure?
                </Title>
              </AlertDialogTitle>
              
              <AlertDialogDescription asChild>
                <Text>
                  This action cannot be undone. This will permanently delete your account and remove your data from our servers.
                </Text>
              </AlertDialogDescription>
              <Stack
              fullX
              css={{
                gap: "$6"
              }}>
                <AlertDialogCancel
                variant="ghost"
                color="neutral"
                block>
                  Cancel
                </AlertDialogCancel>

                <AlertDialogAction
                variant="ghost"
                color="danger"
                block>
                  Yes, delete my account
                </AlertDialogAction>
              </Stack>
            </Stack>
          </AlertDialogContent>
        </AlertDialog>
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
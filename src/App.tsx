import { IconButton, Button, Label, TextField } from "components/form";

import { Stack, ScrollArea } from "components/layout";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} 
from "components/layout";

import { Text } from "components/typography";

import { PlusIcon } from "@radix-ui/react-icons";


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
          <Tabs
          css={{
            padding: "$8"
          }}
          defaultValue="account">
            <Stack 
            alignMain="start"
            alignCross="start">
              <TabsList>
                <TabsTrigger
                value="account">
                  Account
                </TabsTrigger>

                <TabsTrigger
                value="password">
                  Password
                </TabsTrigger>
              </TabsList>

              <IconButton
              css={{
                marginTop: "$2",
                marginLeft: "$4"
              }}
              round
              size="lg"
              variant="text"
              color="neutral"
              Icon={PlusIcon}/>
            </Stack>
            
            <TabsContent 
            value="account"
            css={{
              spaceY: "$4"
            }}>
              <Text>
                Make changes to your account here. Click save when you're done.
              </Text>

              <Label
              block
              name="Name"
              orientation="vertical">
                <TextField/>
              </Label>

              <Label
              block
              name="Username"
              orientation="vertical">
                <TextField/>
              </Label>
              
              <Button
              css={{
                marginRight: "auto"
              }}
              color="success"
              variant="ghost">
                Save Changes
              </Button>
            </TabsContent>

            <TabsContent 
            value="password"
            css={{
              spaceY: "$4"
            }}>
              <Text>
                Change your password here. After saving, you'll be logged out.
              </Text>

              <Label
              block
              orientation="vertical"
              name="Current password">
                <TextField/>
              </Label>

              <Label
              block
              orientation="vertical"
              name="New password">
                <TextField/>
              </Label>

              <Label
              block
              orientation="vertical"
              name="Confirm password">
                <TextField/>
              </Label>

              <Button
              css={{
                marginRight: "auto"
              }}
              color="success"
              variant="ghost">
                Save Changes
              </Button>
            </TabsContent>
          </Tabs>
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
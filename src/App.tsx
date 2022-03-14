import { 
  IconButton, 
  Button, 
  Label, 
  TextField
}
from "components/form";

import { 
  Box,
  Stack, 
  ScrollArea
}
from "components/layout";

import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent
} 
from "components/layout";

import { Text, Title } from "components/typography";

import { PlusIcon } from "@radix-ui/react-icons";

import { 
  Dialog, 
  DialogContent, 
  DialogTrigger,
  Popover, 
  PopoverContent, 
  PopoverTrigger 
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
          <Tabs
          css={{
            padding: "$8"
          }}
          defaultValue="account">
            
            <Stack
            alignCross="start"
            alignMain="start">
              <TabsList
              block>
                <TabsTrigger
                value="account">
                  Account
                </TabsTrigger>

                <TabsTrigger
                value="password">
                  Password
                </TabsTrigger>
              </TabsList>

              <Popover>
                <PopoverTrigger
                asChild>
                  <IconButton
                  css={{
                    marginLeft: "$4",
                    marginTop: "$2"
                  }}
                  round
                  size="lg"
                  variant="text"
                  color="neutral"
                  Icon={PlusIcon}/>
                </PopoverTrigger>

                <PopoverContent
                css={{
                  height: 128
                }}>
                  <Box
                  css={{
                    spaceY: "$6"
                  }}>
                    <Label 
                    block
                    name="label"
                    orientation="vertical">
                      <TextField/>
                    </Label>

                    <Label 
                    block
                    name="label"
                    orientation="vertical">
                      <TextField/>
                    </Label>

                    <Label 
                    block
                    name="label"
                    orientation="vertical">
                      <TextField/>
                    </Label>
                  </Box>
                </PopoverContent>
              </Popover>
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
              help="Help"
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
              
              <Dialog>
                <DialogTrigger
                asChild>
                  <Button
                  css={{
                    marginRight: "auto"
                  }}
                  color="success"
                  variant="ghost">
                    Save Changes
                  </Button>
                </DialogTrigger>

                <DialogContent>
                  <Box
                  css={{
                    spaceY: "$6"
                  }}>
                    <Title>
                      Edit Profile
                    </Title>

                    <Text>
                      Make changes to your profile here. Click save when you're done.
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
                    variant="ghost"
                    color="success"
                    css={{
                      marginLeft: "auto"
                    }}>
                      Save Changes
                    </Button>
                  </Box>
                </DialogContent>
              </Dialog>
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
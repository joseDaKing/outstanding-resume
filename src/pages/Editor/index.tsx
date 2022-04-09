import { 
    Box,
    Stack, 
    ScrollArea,
    List,
    ListItemDragHandler,
    ListItemRemoveHandler,
    ListItemContent
}
from "components/layout";



export const Editor: React.FC = () => {

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
                    paddingX: "$14",
                    spaceY: "$16"
                }}>
                    <Box>
                        <List
                        space="$8"
                        defaultValue={Array(8).fill("").map((_, i) => ({ id: (i + 1).toString() }))}>
                            {(({ id }) => (
                                <ListItemContent
                                value={id}
                                css={{
                                    padding: "$4",
                                    backgroundColor: "$neutral4"
                                }}>
                                    {id}
                                </ListItemContent>
                            ))}
                        </List>
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
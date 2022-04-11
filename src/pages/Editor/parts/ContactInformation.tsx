import { 
    Box,
    Stack, 
    Collapsible,
}
from "components/layout";

import {  
    EditText,
    Label,
    TextField
} 
from "components/form";

import { SubTitle } from "components/typography";

import { ThemedCSS } from "stitches";



export const ContactInformation: React.FC = () => {

    const gap: ThemedCSS["gap"] = "$6";
    
    return (

        <Box>
            <SubTitle
            css={{
                marginBottom: "$8"
            }}>
                <EditText/>
            </SubTitle>

            <Stack
            orientation="vertical"
            css={{
                gap
            }}>
                <Stack
                fullX
                alignMain="start"
                alignCross="end"
                css={{
                    gap
                }}>
                    <Label
                    block
                    name="Jobbtitel"
                    orientation="vertical"
                    help={`Lägg till en titel som "Senior marknadsförare" eller "Försäljningsansvarig som kort beskriver din övergripande erfarenhet eller den typ av roll du söker."`}>
                        <TextField
                        size="lg"
                        placeholder="t.ex lärare"/>
                    </Label>
                </Stack>

                <Stack
                fullX
                alignMain="start"
                alignCross="end"
                css={{
                    gap
                }}>
                    <Label
                    block
                    name="Förnamn"
                    orientation="vertical">
                        <TextField
                        size="lg"/>
                    </Label>

                    <Label
                    block
                    name="Efternamn"
                    orientation="vertical">
                        <TextField
                        size="lg"/>
                    </Label>
                </Stack>

                <Collapsible
                size="lg"
                space="$6"
                name="Vissa extra uppgifter">
                    <Stack 
                    orientation="vertical"
                    css={{
                        gap
                    }}>
                        <Stack
                        fullX
                        alignMain="start"
                        alignCross="end"
                        css={{
                            gap
                        }}>
                            <Label
                            block
                            name="E-post"
                            orientation="vertical">
                                <TextField
                                autoFocus
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Telefon"
                            orientation="vertical">
                                <TextField
                                size="lg"/>
                            </Label>
                        </Stack>

                        <Stack
                        fullX
                        alignMain="start"
                        alignCross="end"
                        css={{
                            gap
                        }}>
                            <Label
                            block
                            name="Land"
                            orientation="vertical">
                                <TextField
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Stad"
                            orientation="vertical">
                                <TextField
                                size="lg"/>
                            </Label>
                        </Stack>

                        <Stack
                        fullX
                        alignMain="start"
                        alignCross="end"
                        css={{
                            gap
                        }}>
                            <Label
                            block
                            name="Adress"
                            orientation="vertical">
                                <TextField
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Postnummer"
                            orientation="vertical">
                                <TextField
                                size="lg"/>
                            </Label>
                        </Stack>

                        <Stack
                        fullX
                        alignMain="start"
                        alignCross="end"
                        css={{
                            gap
                        }}>
                            <Label
                            block
                            name="Körkort"
                            orientation="vertical"
                            help="Lägg till denna del om ditt yrke kräver en vis typ av körkort. Lämna anars fältet tomt.">
                                <TextField
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Nationalitet"
                            orientation="vertical"
                            help="Lägg bara till din nationalitet om det är ett relevant krav för tjänsten. I de flesta fall kan du lämna det tomt.">
                                <TextField
                                size="lg"/>
                            </Label>
                        </Stack>

                        <Stack
                        fullX
                        alignMain="start"
                        alignCross="end"
                        css={{
                            gap
                        }}>
                            <Label
                            block
                            name="Födelseort"
                            orientation="vertical">
                                <TextField
                                size="lg"/>
                            </Label>

                            <Label
                            block
                            name="Födelsedatum"
                            orientation="vertical"
                            help="Lägg bara till det födelsedatum om det är ett relevant krav för tjänsten. I de flesta fall kan du lämna fältet tomt.">
                                <TextField
                                size="lg"/>
                            </Label>
                        </Stack>
                    </Stack>
                </Collapsible>
            </Stack>
        </Box>
    );
}
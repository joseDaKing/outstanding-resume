import { Button } from "components/form";

import { Stack } from "components/layout";

import { Display, SubTitle } from "components/typography";

import { useNavigate } from "react-router-dom";



export const PageNotFound: React.FC = () => {

    const navigate = useNavigate();

    const onClickHandler = () => navigate("/");

    return (
        <Stack
        screen
        alignMain="center"
        alignCross="center"
        orientation="vertical"
        css={{
            padding: "$10",
            paddingX: "$14",
        }}>
            <Stack
            alignMain="center"
            alignCross="start"
            orientation="vertical"
            css={{
                gap: "$8"
            }}>
                <Display
                css={{
                    width: "$md",
                }}>
                    Sidan tu letar efter finns tyvär inte
                </Display>

                <SubTitle
                css={{
                    opacity: "$90",
                    fontWeight: 300
                }}>
                    Kolla länkarna nedan - de kan vara användbara
                </SubTitle>

                <Button
                onClick={onClickHandler}
                size="lg">
                    Skapa mitt cv
                </Button>
            </Stack>
        </Stack>
    );
}
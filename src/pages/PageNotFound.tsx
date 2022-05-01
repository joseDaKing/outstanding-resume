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
                    Sorry, the page you are looking for does not exist
                </Display>

                <SubTitle
                css={{
                    opacity: "$90",
                    fontWeight: 300
                }}>
                    Check out the links below - they may be useful
                </SubTitle>

                <Button
                onClick={onClickHandler}
                size="lg">
                    Create my resume
                </Button>
            </Stack>
        </Stack>
    );
}
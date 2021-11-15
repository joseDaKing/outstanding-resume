import React from "react";

import { Box, Stack } from "../../layout";

import { IconContainer } from "../../primitives";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { styled } from "../../../stitches";

import { Spinner } from "../Spinner";

import { motion } from "framer-motion";

const StyledButton = styled(IconContainer, {
    borderRadius: "$full",
    _paddingX: "$1",
    cursor: "pointer",
    color: "white",
    _backgroundColor: "$gray-900",
    _backgroundOpacity: "$0",
    "&:hover": {
        _backgroundOpacity: "$20"
    },
    "&:disabled": {
        _backgroundOpacity: "$0",
        color: "$gray-300",
        cursor: "default"
    }
});

interface IHeaderProps {
    setCurrentPageNumber: React.Dispatch<React.SetStateAction<number>>;
    currentPageNumber: number;
    numberOfPages: number;
    isLoading: boolean;
}

export const Header: React.FC<IHeaderProps> = ({ currentPageNumber, isLoading, setCurrentPageNumber, numberOfPages }) => {

    const nextPage = () => {
        
        setCurrentPageNumber(prevCurrentPageNumber => {

            if (prevCurrentPageNumber < numberOfPages) {

                return ++prevCurrentPageNumber;
            }

            return prevCurrentPageNumber;
        });
    }

    const prevPage = () => {
        
        setCurrentPageNumber(prevCurrentPageNumber => {

            if (1 < prevCurrentPageNumber) {

                return --prevCurrentPageNumber;
            }

            return prevCurrentPageNumber;
        });
    }

    const shouldDisableButtons = numberOfPages === 1;

    return (
        <Stack
        align="center"
        space="sm"
        css={{
            alignItems: "center",
            marginBottom: "$2",
            position: "relative"
        }}>

            <Stack 
            as={motion.div}
            variants={{
                show: {
                    opacity: 1
                },
                hide: {
                    opacity: 0
                }
            }}
            initial="hide"
            animate={isLoading ? "show" : "hide"}
            css={{
                position: "absolute",
                left: 0,
                _insetY: "0px",
                alignItems: "center"
            }}
            align="start">
                <Spinner/>

                <Box 
                css={{
                    fontFamily: "sans-serif",
                    fontSize: "$sm",
                    color: "white",
                    marginLeft: "$2"
                }}>
                    loading
                </Box>
            </Stack>

            <StyledButton 
            as="button" 
            disabled={shouldDisableButtons}
            onClick={prevPage}>
                <MdKeyboardArrowLeft/>
            </StyledButton>

            <Box 
            css={{
                fontFamily: "$sans",
                userSelect: "none",
                color: "white"
            }}>
                {currentPageNumber} / {numberOfPages}
            </Box>

            <StyledButton 
            as="button" 
            disabled={shouldDisableButtons}
            onClick={nextPage}>
                <MdKeyboardArrowRight/>
            </StyledButton>
        </Stack>
    );
}
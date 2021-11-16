import React from "react";

import { Box, Stack } from "../layout";

import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { styled } from "../../stitches";

const TextContainer = styled(Box, {
    fontFamily: "sans-serif",
    letterSpacing: "$widest",
    userSelect: "none",
    textAlign: "center",
    color: "white",
});

const IconContainer = styled(Box, {
    _textColor: "white",
    cursor: "pointer",
    borderRadius: "$full",
    "&:hover": {
        _backgroundColor: "white",
        _backgroundOpacity: 0.2

    },
    variants: {
        disabled: {
            true: {
                _textOpacity: 0.5,
                cursor: "default",
                "&:hover": {
                    _backgroundOpacity: 0
                },
            }
        }
    },
    defaultVariants: {
        disabled: false 
    }
});

const PaginatorContainer = styled(Stack, {
    margin: "auto",
    marginBottom: "$2",
    width: 108,
    padding: "$0_5",
    borderRadius: "$full",
    alignItems: "center",
    backgroundColor: "transparent",
    variants: {
        dark: {
            true: {
                backgroundColor: "$blue-gray-800"
            }
        }
    }
});

export interface IPaginatorListeners {
    onNext: () => void;
    onPrev: () => void;
}

interface IPaginatorProps extends IPaginatorListeners {
    numberOfPages: number;
    currentPageNumber: number;
    black?: boolean;
}

export const Paginator: React.FC<IPaginatorProps> = ({ 
    onNext,
    onPrev,
    black,
    numberOfPages,
    currentPageNumber
}) => {

    const hasPrevPage = 1 < currentPageNumber;

    const hasNextPage = currentPageNumber < numberOfPages;

    return (
        <PaginatorContainer
        space="xs"
        axis="x"
        align="center"
        css={{
            backgroundColor: black ? "$blue-gray-800" : "transparent"
        }}>

            <IconContainer
            as="button"
            onClick={onPrev}
            disabled={!hasPrevPage}>
                <MdKeyboardArrowLeft
                size={22}/> 
            </IconContainer>
            
            <TextContainer>
                {currentPageNumber} / {numberOfPages}
            </TextContainer>

            <IconContainer
            as="button"
            onClick={onNext}
            disabled={!hasNextPage}>
                <MdKeyboardArrowRight
                size={22}/>
            </IconContainer>
        </PaginatorContainer>
    );
}
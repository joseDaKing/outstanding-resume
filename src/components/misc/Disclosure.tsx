import React from "react";

import { styled } from "../../stitches";

import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";

import { Spacer, Box } from "../../components/layout";

import { DisclosureAnimation } from "../../components/animations";

const ArrowDown = styled(MdKeyboardArrowDown, {
    fill: "CurrentColor",
    marginLeft: "$1_5",
});

const Button = styled("button", {
    display: "flex",
    _textColor: "$light-blue-500",
    "&:hover": {
        _textColor: "$light-blue-600",
        transitionDuration: "$100",
        transitionProperty: "$colors",
        transitionTimingFunction: "$inOut"
    },
    transitionDuration: "$100",
    transitionProperty: "$colors",
    transitionTimingFunction: "$inOut",
    fontFamily: "$mono",
    fontWeight: "bold",
    letterSpacing: "$normal",
    variants: {
        isOpen: {
            true: {
                [`& ${ArrowDown}`]: {
                    _transform: true,
                    _transformRotate: "$180",
                }
            }
        }
    }
});

interface IDisclosureProps {
    label: string;
}

export const Disclosure: React.FC<IDisclosureProps> = props => {

    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => setIsOpen(prevIsOpen => !prevIsOpen);

    return (
        <Box>
            <DisclosureAnimation isOpen={isOpen}>
                {props.children}
                <Spacer space="md"/>
            </DisclosureAnimation>

            <Button 
            isOpen={isOpen}
            onClick={toggle}>
                <Box>
                    {props.label}
                </Box>
                <ArrowDown size={24}/>
            </Button>
        </Box>
    );
}
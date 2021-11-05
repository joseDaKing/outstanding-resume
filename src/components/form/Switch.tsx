import React, { useEffect, useState } from "react";

import { Box } from "../layout";

import { FormComponent } from "../../types";

import { styled } from "../../stitches";

import { FormLabel } from "../primitives";

import { useId } from "../../utilis";

const StyledContainer = styled("span", {
    padding: "$0_5",
    borderRadius: "$full",
    boxSizing: "content-box",
    display: "inline-block",
    transitionDuration: "$100",
    transitionProperty: "all",
    transitionTimingFunction: "$inOut",
    cursor: "pointer",
    _backgroundColor: "$blue-gray-300",
    "&:hover": {
        _backgroundColor: "$blue-gray-400",
    },
    variants: {
        active: {
            true: {
                _backgroundColor: "$light-blue-400",
                "&:hover": {
                    _backgroundColor: "$light-blue-500",
                },
            }
        },
        disabled: {
            true: {
                cursor: "default",
                _backgroundColor: "$gray-300",
                "&:hover": {
                    _backgroundColor: "$gray-300",
                }
            }
        }
    },
    defaultVariants: {
        active: false,
        disabled: false
    }
});

const StyledSlider = styled("div", {
    borderRadius: "$full",
    _backgroundColor: "white",
    _transform: true,
    transitionDuration: "$100",
    transitionProperty: "all",
    transitionTimingFunction: "$inOut",
    variants: {
        active: {
            true: {
                _transformTranslateX: "$full"
            }
        },
        size: {
            sm: {
                _size: "$3",
                marginRight: "$3",
            },
            md: {
                _size: "$3_5",
                marginRight: "$3_5",
            },
            lg: {
                _size: "$4",
                marginRight: "$4",
            }
        }
    },
    defaultVariants: {
        size: "sm",
        active: false
    }
});

export const Switch: React.FC<FormComponent<boolean>> = ({ value, inline, onChange, disabled, label, size }) => {

    const [isChecked, setIsChecked] = useState(value ?? false);

    useEffect(() => {

        if (onChange) {

            onChange(isChecked);
        }
    /* eslint-disable */
    }, [isChecked]);
    /* eslint-enable */
    
    const onClickHandler = () => {

        if (!disabled) {

            setIsChecked(prevIsChecked => !prevIsChecked);
        }
    }

    const id = useId()

    return (
        <Box
        css={{
            display: "inline-flex",
            alignItems: "center"
        }}
        inline={inline}>
            <Box
            id={id}
            defaultChecked={isChecked}
            disabled={disabled}
            css={{
                display: "none"
            }}
            as="input"
            type="checkbox"/>

            <StyledContainer
            active={isChecked}
            disabled={disabled}
            onClick={onClickHandler}>
                <StyledSlider
                size={size}
                active={isChecked}/>
            </StyledContainer>

            {label &&
            <FormLabel
            css={{
                margin: 0,
                marginLeft: "$2"
            }}
            htmlFor={id}
            disabled={disabled}
            onClick={onClickHandler}>
                {label}
            </FormLabel>}
        </Box>
    );
}
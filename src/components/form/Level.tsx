import React, { useEffect, useState } from "react";

import { Box, Stack } from "../layout";

import { useId } from "../../utilis";

import { FormLabel } from "../primitives";

import { FormComponent } from "../../types";

import { styled } from "../../stitches";

export type LevelValue = 0 | 1 | 2 | 3 | 4;

type LevelLabels = {
    [K in LevelValue]: string;
};

const defaultLevels = Object.fromEntries(Array(5).fill(0).map((_, index) => [index, `${index}`])) as LevelLabels;

const colors = {
    0: "$red",
    1: "$orange",
    2: "$yellow",
    3: "$lime",
    4: "$green"
} as const;

interface ILevelProps extends FormComponent<LevelValue> {
    levels?: LevelLabels;
}

const StyledSquare = styled(Box, {
    variants: {
        size: {
            sm: {
                padding: "$4",
            },
            md: {
                padding: "$5",
            },
            lg: {
                padding: "$6",
            }
        }
    },
    defaultVariants: {
        size: "md"
    }
});

export const Level: React.FC<ILevelProps> = ({ label, levels = defaultLevels, disabled, size, inline, value, onChange }) => {
    
    const id = useId();    

    const [active, setActive] = useState<LevelValue>(value ?? 0);

    useEffect(() => {

        if (onChange && !disabled) {

            onChange(active);
        }
    }, [active]);

    const labelPrefix = levels[active];

    const color = disabled ? "$gray" : colors[active];

    const colorSquare = `${color}-400` as const;

    const labelColor = `${color}-500` as const;

    const onClickHandler = (index: number) => () => {
        
        if (!disabled) {

            setActive(index as LevelValue);
        }
    };

    return (
        <Box inline={inline}>
            {label &&
            <>
                <FormLabel
                htmlFor={id}
                disabled={disabled}>
                    {label} - 
                    <Box 
                    inline
                    css={{
                        marginLeft: "$2",
                        color: labelColor
                    }}>
                        {labelPrefix}
                    </Box>
                </FormLabel>
                <br/>
            </>}

            <Stack
            inline={inline}
            css={{
                width: inline ? "auto" : "100%",
                borderRadius: "$sm",
                transitionDuration: "$100",
                transitionProperty: "all",
                transitionTimingFunction: "$in-out",
                _backgroundColor: colorSquare,
                _backgroundOpacity: 0.20,
                cursor: disabled ? "default" : "pointer",
            }}
            align={inline ? "start" : "stretch"}>
                {Object.values(levels).map((_, index) => {

                    const isActive = index === active;

                    const isNextActive = index === (active + 1);

                    const isFirst = index === 0;

                    let opacity = 0;

                    if (isActive) {

                        opacity = 0.8;
                    }

                    let hoverOpacity = 0.25;

                    if (isActive) {
                        
                        hoverOpacity = 1;
                    }
                    
                    if (disabled) {

                        hoverOpacity = opacity;
                    }

                    return (
                        <StyledSquare
                        size={size}
                        key={index}
                        onClick={onClickHandler(index)}
                        css={{
                            transitionDuration: "$100",
                            transitionProperty: "all",
                            transitionTimingFunction: "$in-out",
                            borderRadius: "$sm",
                            _backgroundColor: colorSquare,
                            _backgroundOpacity: opacity,
                            "&:hover": {
                                _backgroundOpacity: hoverOpacity,
                            },
                            position: "relative"
                        }}>
                            {!(isActive || isFirst || isNextActive) &&
                            <Box
                            css={{
                                position: "absolute",
                                _insetY: "$3_5",
                                left: 0,
                                width: 0.5,
                                backgroundColor: colorSquare
                            }}/>}
                        </StyledSquare>
                    );
                })}
            </Stack>
        </Box>
    );
}
import { useValue, UseValueProps } from "helpers";

import { decode } from "html-entities";

import React, { forwardRef, useEffect, useRef } from "react";

import mergeRefs from "react-merge-refs";

import { stitches } from "stitches";

import { CSSProps } from "types";

import { IconButton } from "./IconButton";

import { Pencil1Icon, ResetIcon } from "@radix-ui/react-icons";


const EditTextContainer = stitches.styled("span", {
    all: "inherit",
    display: "inline-block",
    position: "relative",
    [`& ${IconButton}`]: {
        opacity: 0
    },
    [`&:hover ${IconButton}, &:focus-within ${IconButton},`]: {
        opacity: 1
    },
    borderBottomWidth: "$2",
    borderBottomStyle: "solid",
    borderBottomColor: "transparent",
    transition: "$200",
    transitionProperty: "color",
    variants: {
        color: {
            primary: {
                [`&:focus-within`]: {
                    borderBottomColor: "$primary9"
                }
            },
            secondary: {
                [`&:focus-within`]: {
                    borderBottomColor: "$secondary9"
                }
            },
            neutral: {
                [`&:focus-within`]: {
                    borderBottomColor: "$neutral9"
                }
            },
            action: {
                [`&:focus-within`]: {
                    borderBottomColor: "$action9"
                }
            },
            success: {
                [`&:focus-within`]: {
                    borderBottomColor: "$success9"
                }
            },
            warning: {
                [`&:focus-within`]: {
                    borderBottomColor: "$warning9"
                }
            },
            danger: {
                [`&:focus-within`]: {
                    borderBottomColor: "$danger9"
                }
            }
        }
    },
    defaultVariants: {
        color: "primary"
    }
});

EditTextContainer.displayName = "EditTextContainer";

const EditTextInput = stitches.styled("input", {
    all: "inherit",
    display: "inline-block",
});

EditTextInput.displayName = "EditTextInput";

const EditTextMeasureContainer = stitches.styled("span", {
    all: "inherit",
    width: 0,
    height: 0,
    display: "inline-block",
    overflow: "hidden",
    borderStyle: "none"
});

EditTextMeasureContainer.displayName = "EditTextMeasureContainer";

const EditTextMeasure = stitches.styled("span", {
    all: "inherit",
    display: "inline-block",
    size: "auto"
});

EditTextMeasure.displayName = "EditTextMeasure";


const EditTextInputContainer = stitches.styled("span", {
    all: "inherit",
    position: "relative",
    borderStyle: "none"
});

const EditTextInputIconContainer = stitches.styled("span", {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    display: "flex",
    alignItems: "center",
    width: 0,
    gap: "$1",
});



type EditTextProps = (
    UseValueProps<string> 
    & CSSProps 
    & Omit<
        JSX.IntrinsicElements["input"],
        "value"
        | "defaultValue"
        | "onChange"
    >
    & {
        resetable?: string;
    }
);

export const EditText = forwardRef<HTMLInputElement, EditTextProps>((props, ref) => {

    const {
        css,
        value,
        resetable,
        defaultValue,
        onValueChange,
        ...htmlProps
    } = props;

    const [ state, setState ] = useValue({
        initialValue: "",
        value,
        defaultValue,
        onValueChange
    });

    const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

        setState(event.currentTarget.value);
    }

    const measureRef = useRef<HTMLSpanElement|null>(null);

    const inputRef = useRef<HTMLInputElement|null>(null);

    useEffect(() => {

        if (!inputRef.current || !measureRef.current) {

            return;
        }

        inputRef.current.style.width = `${measureRef.current.clientWidth}px`;

    }, [state]);

    const onEditHandler = () => {

        if (!inputRef.current) {

            return;
        }

        inputRef.current.focus();
    }

    const onResetHandler = () => {

        if (resetable) {

            setState(resetable);
        }
    }

    return (
        <EditTextContainer 
        css={css}>
            <EditTextInputContainer>
                <EditTextInput
                {...htmlProps}
                ref={mergeRefs([
                    inputRef,
                    ref
                ])}
                value={state}
                onChange={onChangeHandler}/>

                {!props.disabled &&
                <EditTextInputIconContainer>
                    <IconButton
                    round
                    variant="text"
                    Icon={Pencil1Icon}
                    css={{
                        marginLeft: "$1_5"
                    }}
                    onClick={onEditHandler}/>

                    {resetable && resetable !== state &&
                    <IconButton
                    round
                    variant="text"
                    Icon={ResetIcon}
                    onClick={onResetHandler}/>}
                </EditTextInputIconContainer>}
            </EditTextInputContainer>
            
            <EditTextMeasureContainer aria-hidden>
                <EditTextMeasure 
                ref={measureRef}>
                    {decode(state.replaceAll(" ", "&nbsp;"))}
                </EditTextMeasure>
            </EditTextMeasureContainer>
        </EditTextContainer>
    );
});

EditText.displayName = "EditText";

EditText.toString = () => EditTextContainer.selector;
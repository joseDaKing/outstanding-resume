import React from "react";

import { Box } from "../../components/layout";

import type { KeyboardEvent } from "react";

import { useEffect, useRef, useState } from "react";

import { MdEdit, MdLoop } from "react-icons/md";

import { css, styled } from "../../stitches";

import { ContentEditable } from "../../components/misc";

import OutsideClickHandler from "react-outside-click-handler";

interface IEditTextProps {
    value?: string;
    resetable?: string;
    onChange?: (value: string) => void;
}

const IconContainer = styled("button", {
    display: "inline-block",
    color: "$blue-gray-300",
    cursor: "pointer",
    "&:hover": {
        color: "$light-blue-500"
    },
    "&:focus": {
        outline: "none"
    }
});

const Container = styled("span", {
    display: "inline-block",
    [`& ${IconContainer}`]: {
        opacity: 0
    },
    [`&:hover ${IconContainer}`]: {
        opacity: 1
    }
});

const ContentEditableStyles = css({
    display: "inline-block",
    borderBottomWidth: "$2",
    _borderBottomColor: "$light-blue-500",
    _borderBottomOpacity: 0,
    transitionDuration: "$100",
    transitionTimingFunction: "$inOut",
    "&:focus": {
        outline: "none",
        _borderBottomOpacity: 1,
    }
});

export const EditText: React.FC<IEditTextProps> = ({ value, resetable, onChange }) => {

    const contentEditableRef = useRef<HTMLDivElement>(null);

    const [text, setText] = useState(value ?? "");

    useEffect(() => {
        
        if (onChange) {

            onChange(text);
        }
    /* eslint-disable */
    }, [text]);
    /* eslint-endable */

    const [isDisabled, setIsDisabled] = useState(true);

    useEffect(() => {
        
        if (!isDisabled && contentEditableRef.current) {

            contentEditableRef.current.focus();

            const selection = getSelection();

            if (selection) {

                selection.removeAllRanges();

                selection.selectAllChildren(contentEditableRef.current);
            }
        }
    /* eslint-disable */
    }, [isDisabled]);
    /* eslint-enable */

    const onResetHandler = () => {

        if (resetable && text !== resetable) {

            setText(resetable);

            setIsDisabled(true);
        }
    }

    const onEditModeHandler = () => setIsDisabled(false);

    const toDisabled = () => setIsDisabled(true);

    const onKeyDownHandler = (event: KeyboardEvent<any>) => {

        if (event.key === "Enter") {

            setIsDisabled(true);
        }
    }
    
    return (
        <Container>
            <Box css={{ height: 0.1 }}/>

            <OutsideClickHandler
            display="inline-block"
            onOutsideClick={toDisabled}>
                <ContentEditable
                className={ContentEditableStyles()}
                disabled={isDisabled}
                innerRef={contentEditableRef}
                onBlur={toDisabled}
                onKeyDown={onKeyDownHandler}
                onChange={event => setText(event.target.value)}
                value={text}/>
            </OutsideClickHandler>
            
            <IconContainer
            css={{
                marginLeft: "$2",
            }}
            onClick={onEditModeHandler}>
                <MdEdit/>
            </IconContainer>
            
            {resetable !== text && 
            <IconContainer
            onClick={onResetHandler}>
                <MdLoop/>
            </IconContainer>}

            <Box css={{ height: 0.1 }}/>
        </Container>
    );
}
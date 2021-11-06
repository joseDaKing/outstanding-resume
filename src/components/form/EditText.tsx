import React from "react";

import { Box, PlaceAside } from "../layout";

import type { KeyboardEvent } from "react";

import { useEffect, useRef, useState } from "react";

import { MdEdit, MdLoop } from "react-icons/md";

import { css } from "../../stitches";

import { ContentEditable } from "./ContentEditable";

import OutsideClickHandler from "react-outside-click-handler";

import { IconContainer, IconGroupHover } from "../primitives";

import { InteractiveComponent } from "../../types";

interface IEditTextProps extends InteractiveComponent<string> {
    resetable?: string;
    Left?: React.FC;
    Right?: React.FC;
}

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

export const EditText: React.FC<IEditTextProps> = ({ value, resetable, onChange, Left, Right }) => {

    const contentEditableRef = useRef<HTMLDivElement>(null);

    const [text, setText] = useState(value ?? "");

    useEffect(() => {
        
        if (onChange) {

            onChange(text);
        }
    /* eslint-disable */
    }, [text]);
    /* eslint-enable */

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
        <Box 
        inline>
            <IconGroupHover inline>
                <Box css={{ height: 0.1 }}/>
                
                {Left &&
                <PlaceAside align="start">
                    {<Left/>}
                </PlaceAside>}                

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

                <PlaceAside align="end">
                    <IconContainer
                    hover
                    pointer
                    invisible
                    css={{
                        paddingLeft: "$2",
                    }}
                    onClick={onEditModeHandler}>
                        <MdEdit/>
                    </IconContainer>

                    {!!resetable && resetable !== text && 
                    <IconContainer
                    hover
                    pointer
                    invisible
                    onClick={onResetHandler}>
                        <MdLoop/>
                    </IconContainer>}

                    {Right && 
                    <Right/>}
                </PlaceAside>

                <Box css={{ height: 0.1 }}/>
            </IconGroupHover>
        </Box>
    );
}
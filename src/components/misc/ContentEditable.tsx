import React from "react";

import { KeyboardEvent, useRef } from "react";

import ContentEditable, {
  Props,
  ContentEditableEvent
} 
from "react-contenteditable";

import { AllHtmlEntities } from "html-entities";

import { styled } from "../../stitches";

const { decode, encode } = AllHtmlEntities;

const StyledContentEditable = styled(ContentEditable, {
    display: "inline-block"
})

type ContentEditableProps = Partial<Omit<Props, "html"> & {
    value?: string;
}>;

const MyContentEditable: React.FC<ContentEditableProps> = ({ value, ...props }) => {
    
    const sanitizedValue = encode((value ?? ""));

    const text = useRef(sanitizedValue);

    const onChangeHandler = (event: ContentEditableEvent) => {
        
        const value = decode(event.target.value);

        if (text.current !== value && props.onChange) {
            
            text.current = value;

            event.target.value = value;

            props.onChange(event);
        }
    };

    const onKeyDownHandler = (event: KeyboardEvent<any>) => {
       
        if (event.key === "Enter") {
        
            event.preventDefault();
        }

        if (props.onKeyDown) {
        
            props.onKeyDown(event);
        }
    };

    return (
        // @ts-ignore
        <StyledContentEditable
        {...props}
        html={sanitizedValue}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}/>
    );
}

export {
    MyContentEditable as ContentEditable
}
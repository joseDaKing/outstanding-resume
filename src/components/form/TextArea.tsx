import { textFieldContainer, textFieldTextContainer, textFieldText } from "mixins";

import { VariantProps } from "@stitches/react";

import React, { forwardRef } from "react";

import { stitches } from "stitches";



const StyledTextArea = stitches.styled("textarea", textFieldContainer, textFieldTextContainer, textFieldText, {
    minHeight: "$64",
    overflowY: "scroll"
});

StyledTextArea.displayName = "StyledTextArea";

export type TextAreaProps = Omit<JSX.IntrinsicElements["textarea"], "onChange" | "ref"> & VariantProps<typeof StyledTextArea> & {
    onValueChange?: (value: string) => void;
};

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ onValueChange, ...props }, ref) => {

    const onChangeHandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {

        if (onValueChange) {

            onValueChange(event.currentTarget.value);
        }
    }

    return (
        <StyledTextArea
        {...props}
        onChange={onChangeHandler}
        ref={ref}/>
    );
});
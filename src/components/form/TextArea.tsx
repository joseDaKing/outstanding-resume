import { textFieldContainer, textFieldTextContainer, textFieldText } from "mixins";

import { stitches } from "stitches";



export const TextArea = stitches.styled("textarea", textFieldContainer, textFieldTextContainer, textFieldText, {
    minHeight: "$64",
    overflowY: "scroll"
});

export type TextAreaProps = JSX.IntrinsicElements["textarea"];
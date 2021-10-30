import { globalCss } from "../stitches";

export const defaultCSS = globalCss({
    body: {
        padding: 0,
        margin: 0
    },
    "*": {
        _selectionBackgroundColor: "$light-blue-500",
        _selectionBackgroundOpacity: "$20",
        "&::selection": {
            color: "inherit",
        }    
    }
});
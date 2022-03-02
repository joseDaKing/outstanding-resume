import { stitches } from "stitches";



export const preflightStyles = stitches.globalCss({
    "*,::before,::after": {
        boxSizing: "border-box",
        borderWidth: 0,
        borderStyle: "solid",
        borderColor: "currentcolor",
    },
    html: {
        lineHeight: 1.5,
        "-webkit-text-size-adjust": "100%",
        "-moz-tab-size": 4,
        tabSize: 4,
        fontFamily: "sans-serif"
    },
    body: {
        margin: 0,
        lineHeight: "inherit",
    },
    hr: {
        height: 0,
        color: "inherit",
        borderTopWidth: "1px",
    },
    "abbr:where([title])": {
        textDecoration: "underline dotted"
    },
    "h1,h2,h3,h4,h5,h6": {
        fontSize: "inherit",
        fontWeight: "inherit"
    },
    a: {
        color: "inherit",
        textDecoration: "inherit"
    },
    "b,strong": {
        fontWeight: "bolder"
    },
    "code,kbd,samp,pre": {
        fontFamily: "monospace",
        fontSize: "1em"
    },
    small: {
        fontSize: "80%"
    },
    "sub,sup": {
        fontSize: "75%",
        lineHeight: 0,
        position: "relative",
        verticalAlign: "baseline"
    },
    sub: {
        bottom: "-0.25em"
    },
    sup: {
        top: "-0.5em"
    },
    table: {
        textIndent: 0,
        borderColor: "inherit",
        borderCollapse: "collapse"
    },
    "button,input,optgroup,select,textarea": {
        fontFamily: "inherit",
        fontSize: "100%",
        lineHeight: "inherit",
        color: "inherit",
        margin: 0,
        padding: 0,
    },
    "button,select": {
        textTransform: "none"
    },
    "button,[type='button'],[type='reset'],[type='submit']": {
        "-webkit-appearance": "button",
        backgroundColor: "transparent",
        backgroundImage: "none"
    },
    ":-moz-focusring": {
        outline: "auto"
    },
    ":-moz-ui-invalid": {
        boxShadow: "none"
    },
    progress: {
        verticalAlign: "baseline"
    },
    "::-webkit-inner-spin-button,::-webkit-outer-spin-button": {
        height: "auto"
    },
    "[type='search']": {
        "-webkit-appearance": "textfield",
        outlineOffset: "-2px"
    },
    "::-webkit-search-decoration": {
        "-webkit-appearance": "none"
    },
    "::-webkit-file-upload-button": {
        "-webkit-appearance": "button",
        font: "inherit"
    },
    summary: {
        display: "list-item"
    },
    "blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre": {
        margin: 0
    },
    fieldset: {
        margin: 0,
        padding: 0
    },
    legend: {
        padding: 0
    },
    "ol,ul,menu": {
        listStyle: "none",
        margin: 0,
        padding: 0,
    },
    textarea: {
        resize: "vertical"
    },
    "input::placeholder,textarea::placeholder": {
        opacity: 1,
        color: "#9ca3af"
    },
    "button, [role='button']": {
        cursor: "pointer"
    },
    ":disabled": {
        cursor: "default"
    },
    "img, svg, video, canvas, audio, iframe, embed, object": {
        display: "block",
        verticalAlign: "middle"
    },
    "img, video": {
        maxWidth: "100%",
        height: "auto"
    },
    "[hidden]": {
        display: "none"
    }   
});
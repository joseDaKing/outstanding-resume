export const _lineClamp = (line: "none" | number) => {

    if (line === "none") {

        return {
            "-webkit-line-clamp": "unset"
        }
    }

    return {
        overflow: "hidden",
        display: "-webkit-box",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": `${line}`
    }
}
type TextOverflowValue = "truncate" | "overflow-ellipsis" | "overflow-clip";

export const _textOverflow = (value: TextOverflowValue) => {

    switch(value) {
     
        case "overflow-ellipsis":
            return {
                textOverflow: "ellipsis"
            };
        case "overflow-clip":
            return {
                textOverflow: "clip"
            };
        case "truncate":
            return { 
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap"
            }

        default:
            return {}
    }
}
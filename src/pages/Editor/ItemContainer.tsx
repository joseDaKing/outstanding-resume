import { Box, useIsDragging } from "components/layout"



export const ItemContainer: React.FC = props => {

    const isDragging = useIsDragging();

    let marginBottom = "$6";

    let overflow = "initial";

    let height = "initial";

    let maskMode = "initial";

    let maskImage = "initial";

    if (isDragging) {

        overflow = "hidden";

        marginBottom = "initial";

        maskMode = "alpha";

        maskImage = "linear-gradient(black, transparent)";

        height = "$14";
    }

    return (
        <Box
        css={{
            marginBottom,
            overflow,
            maskMode,
            maskImage,
            height
        }}>
            {props.children}
        </Box>
    );
}
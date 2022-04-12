import { Box, useIsDragging } from "components/layout";



type ItemsContainerProps = {
    items: any[];
}

export const ItemsContainer: React.FC<ItemsContainerProps> = props => {    

    const isDragging = useIsDragging();

    return (
        <Box
        css={{
            marginBottom: isDragging ? "initial" : "$6",
            height: isDragging && props.items.length !== 0 ? "$16" : "initial",
            overflow: isDragging ? "hidden" : "initial"
        }}>
            {props.children}
        </Box>
    );
}
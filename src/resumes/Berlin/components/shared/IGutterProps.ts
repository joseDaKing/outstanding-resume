import { theme } from "../../theme";

export interface IGutterProps {
    gutter?: keyof typeof theme.spacings;
}
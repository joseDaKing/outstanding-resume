import { theme } from "../theme";

import { createTypeography } from "./shared";

export const HeaderTitle = createTypeography({
    fontSize: 42,
    letterSpacing: 3,
    color: theme.colors.dark,
});
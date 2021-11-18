import { theme } from "../theme";

import { createTypeography } from "./shared";

const MyText = createTypeography({
    fontSize: 8.5,
    color: theme.colors.dark
});

export {
    MyText as Text
}
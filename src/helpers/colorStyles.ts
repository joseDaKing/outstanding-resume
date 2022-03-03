import { ThemedCSS } from "stitches";



const componentColors = [
    "primary",
    "secondary",
    "neutral",
    "action",
    "success",
    "warning",
    "danger"
] as const;

type Levels = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";

type GetColor = (levels: Levels, alpha?: boolean) => string;

type Colors = (typeof componentColors)[number];

type Styles = (getColor: GetColor, color: Colors) => ThemedCSS;

type ColorStylesConfig<T extends string> = {
    variant?: T;
    styles: Styles
};

type ColorCompoundVariants<T extends string> = Array<
    (string extends T ? {} : { variant: T }) & {
        color: Colors;
        css: ThemedCSS;
    }
>

export function colorStyles<T extends string>({ variant, styles}: ColorStylesConfig<T>): ColorCompoundVariants<T> {

    return componentColors.map(color => {

        const getColor: GetColor = (level, alpha = false) => `$${color}${alpha ? "A" : ""}${level}`;
        
        const css = styles(getColor, color)
    
        if (variant) {

            return {
                variant,
                color,
                css
            };
        }

        return {
            color,
            css 
        };
    }) as ColorCompoundVariants<T>;
}
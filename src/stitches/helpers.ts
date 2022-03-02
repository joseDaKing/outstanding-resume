const filterFns = {
    url: (value: string) => `url(${value})`,
    blur: (value: string) => `blur(${value})`,
    brightness: (value: string) => `brightness(${value})`,
    contrast: (value: string) => `contrast(${value})`,
    dropShadow: (value: string) => `drop-shadow(${value})`,
    grayscale: (value: string) => `grayscale(${value})`,
    hueRotate: (value: string) => `hue-rotate(${value})`,
    invert: (value: string) => `invert(${value})`,
    opacity: (value: string) => `opacity(${value})`,
    saturate: (value: string) => `saturate(${value})`,
    sepia: (value: string) => `sepia(${value})`,
}

export type FilterConfig = Partial<Record<keyof typeof filterFns, string>>;

export function filter(config: FilterConfig) {

    const filterStr = [];

    for (const fnName in config) {

        const fnValue = (config as any)[fnName];

        if (fnValue) {

            const fn = (filterFns as any)[fnName];

            filterStr.push(fn(fnValue));
        } 
    }

    return filterStr.join(" ");
}



type XY = { x: string; y: string; };

type XYZ = XY & { z: string; };

type Rotation3d = XYZ & { angle: string; };

type Matrix = [
    string,
    string,
    string,
    string,
    string,
    string,
];

type Matrix3d = [
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
    string,
];

const transformFNS = {
    matrix3d: (value: Matrix3d) => `matrix3d(${value.join(",")})`,
    matrix: (value: Matrix) => `matrix(${value.join(",")})`,
    perspective: (value: string) => `perspective(${value})`,
    skew: (value: string | XY) => {

        if (typeof value === "object") {

            const { x, y } = value;

            return `skew(${x},${y})`;
        }

        return `skew(${value})`
    },
    skewX: (value: string) => `skewX(${value})`,
    skewY: (value: string) => `skewY(${value})`,
    scale: (value: string | XY) => {

        if (typeof value === "object") {

            const { x, y } = value;

            return `scale(${x},${y})`;
        }

        return `scale(${value})`
    },
    scale3d: ({ x, y, z }: XYZ) => `scale3d(${x},${y},${z})`,
    scaleX: (value: string) => `scaleX(${value})`,
    scaleY: (value: string) => `scaleY(${value})`,
    scaleZ: (value: string) => `scaleZ(${value})`,
    rotate: (value: string) => `rotate(${value})`,
    rotate3d: ({ x, y, z }: XYZ) => `rotate3d(${x},${y},${z})`,
    rotateX: (value: string) => `rotateX(${value})`,
    rotateY: (value: string) => `rotateY(${value})`,
    rotateZ: (value: string) => `rotateZ(${value})`,
    translate: ({ x, y }: XY) => `translate(${x},${y})`,
    translate3d: ({ x, y, z, angle }: Rotation3d) => `translate3d(${x},${y},${z},${angle})`,
    translateX: (value: string) => `translateX(${value})`,
    translateY: (value: string) => `translateY(${value})`,
    translateZ: (value: string) => `translateZ(${value})`,
}

export type TransformConfig = {
    [K in keyof typeof transformFNS]?: Parameters<(typeof transformFNS)[K]>[0]
}

export function transform(config: TransformConfig) {

    const transformStr = [];

    for (const fnName in config) {

        const fnValue = (config as any)[fnName];

        if (fnValue) {

            const fn = (transformFNS as any)[fnName];

            transformStr.push(fn(fnValue));
        } 
    }

    return transformStr.join(" ");
}



export type ShadowConfig = {
    hOffset?: string,
    vOffset?: string,
    blur: string,
    spread?: string
    color: string,
    inset?: boolean
};

export function shadow(config: ShadowConfig) {

    const {
        hOffset = "0px",
        vOffset = "0px",
        blur,
        spread = "",
        color,
        inset
    } = config

    return [
        hOffset,
        vOffset,
        blur,
        spread,
        color,
        inset ? "inset" : ""
    ]
    .join(" ");
}



export type RingConfig = {
    offsetColor?: string,
    offsetWidth?: string
    color: string;
    width: string;
    inset?: boolean
}

export function ring(config: RingConfig) {

    const {
        offsetWidth = "0px",
        offsetColor = "white",
        width,
        color,
        inset
    } = config;

    return [
        shadow({
            hOffset: "0px",
            vOffset: "0px",
            blur: "0px",
            spread: offsetWidth,
            color: offsetColor,
            inset
        }),
        shadow({
            hOffset: "0px",
            vOffset: "0px",
            blur: "0px",
            spread: `calc(${width} + ${offsetWidth})`,
            color,
            inset
        })
    ]
    .join(",")
}



type GradientStop = string | {
    color: string;
    stop: string;
}

function gradientStopToStr(stop: GradientStop): string {

    if (typeof stop === "object") {

        return `${stop.color} ${stop.stop}`;
    }

    return stop;
}

type GradientStops = {
    stops: GradientStop[]
}

function gradientStopsToStr({ stops }: GradientStops): string {

    return stops.map(gradientStopToStr).join(",");
}

type GradientConfig = GradientStops & {
    repeating?: boolean;
}

export type LinearGradientConfig = GradientConfig & {
    direction?: string;
}

export function linearGradient(config: LinearGradientConfig): string {

    const { direction, repeating } = config;

    return `${repeating ? "repeating-" : ""}linear-gradient(${direction ? `${direction},` : ""}${gradientStopsToStr(config)})`
}

/**
 * @typedef {GradientConfig & {
 *  size?: (
 *      "closest-side" 
 *      | "closest-corner"
 *      | "farthest-side"
 *      | "farthest-corner"
 *  ),
 *  position?: string;
 * }} RadialGradientConfig
 */

export type RadialGradientConfig = GradientConfig & {
    size?: (
        "closest-side" 
        | "closest-corner"
        | "farthest-side"
        | "farthest-corner"
    ),
    position?: string;
}

export function radialGradient(config: RadialGradientConfig): string {

    const { size, position, repeating } = config;

    return `${repeating ? "repeating-" : ""}radial-gradient(${size || position ? `${size ? `${size} ` : ""} ${position ? `at ${position}` : ""},` : ""}${gradientStopsToStr(config)})`;
}

type ConicGradientConfig = GradientConfig & {
    angle?: string;
    position: string;
}

export function conicGradient(config: ConicGradientConfig): string {

    const { angle, position, repeating } = config;

    return `${repeating ? "repeating-" : ""}conic-gradient(${angle || position ? `${angle ? `from ${angle} ` : ""} ${position ? `at ${position}` : ""},` : ""}${gradientStopsToStr(config)})`;
}
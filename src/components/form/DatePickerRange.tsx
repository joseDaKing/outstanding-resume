import React from "react";

import { DatePicker } from "./DatePicker";

import { stitches } from "stitches";

import { block } from "mixins";

import { VariantProps } from "@stitches/react";

import { ButtonProps } from "./Button";

import { CSSProps } from "types";

import { CalendarState } from "./Calendar";
import { useValue } from "helpers";



const StyledRoot = stitches.styled("div", block, {
    display: "flex",
    gap: "$4"
});

StyledRoot.displayName = "StyledDatePickerRangeRoot";

type DatePickerRangeState = {
    start?: CalendarState;
    end?: CalendarState
}

type DatePickerRangeProps = (
    VariantProps<typeof StyledRoot> 
    & Pick<ButtonProps, "color"> 
    & CSSProps 
    & Omit<JSX.IntrinsicElements["div"], "ref">
    & {
        value?: DatePickerRangeState;
        defaultValue?: DatePickerRangeState;
        onValueChange?: (value: DatePickerRangeState) => void;
        startOpen?: boolean;
        defaultStartOpen?: boolean;
        onStartOpenChange?: (value: boolean) => void;
        endOpen?: boolean;
        defaultEndOpen?: boolean;
        onEndOpenChange?: (value: boolean) => void;
    }
);

export const DatePickerRange: React.FC<DatePickerRangeProps> = props => {

    const { 
        color,
        block,
        value,
        defaultValue,
        onValueChange,
        startOpen,
        defaultStartOpen,
        onStartOpenChange,
        endOpen,
        defaultEndOpen,
        onEndOpenChange,
        ...htmlProps
    } = props;

    const variantProps = {
        block,
        color
    }

    const [ state, setState ] = useValue({
        initialValue: {},
        value,
        defaultValue,
        onValueChange,
    });

    const [ startOpenState, setStartOpenState ] = useValue({
        initialValue: false,
        value: startOpen,
        defaultValue: defaultStartOpen,
        onValueChange: onStartOpenChange,
    });

    const [ endOpenState, setEndOpenState ] = useValue({
        initialValue: false,
        value: endOpen,
        defaultValue: defaultEndOpen,
        onValueChange: onEndOpenChange,
    });

    const setStartDate = (start: CalendarState) => setState(prevState => ({
        ...prevState,
        start
    }));

    const setEndDate = (end: CalendarState) => setState(prevState => ({
        ...prevState,
        end
    }));

    return (
        <StyledRoot
        {...htmlProps}
        block={block}>
            <DatePicker
            open={startOpenState}
            onOpenChange={setStartOpenState}
            value={state.start}
            onValueChange={setStartDate}
            {...variantProps}/>
            
            <DatePicker
            open={endOpenState}
            onOpenChange={setEndOpenState}
            value={state.end}
            onValueChange={setEndDate}
            {...variantProps}/>
        </StyledRoot>
    );
}

DatePickerRange.toString = () => StyledRoot.selector;

DatePickerRange.displayName = "DatePickerRange";
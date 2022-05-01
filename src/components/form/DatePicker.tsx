import { TextField, TextFieldVariantProps } from "./TextField";

import { Calendar, CalendarProps, CalendarState } from "./Calendar";

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

import { stitches } from "stitches";

import { block, popoverAnimation, popoverContent } from "mixins";

import React, { forwardRef, useEffect, useState } from "react";

import { CalendarIcon } from "@radix-ui/react-icons";

import dayjs from "dayjs.config";

import { useOnChange, useValue } from "helpers";



const StyledContent = stitches.styled(PopoverContent, popoverAnimation, popoverContent);

StyledContent.displayName = "StyledDatePickerContent"; 

const StyledTrigger = stitches.styled(PopoverTrigger, block);

StyledTrigger.displayName = "StyledDatePickerTrigger";

export type DatePickerProps = (
    Pick<CalendarProps, "color">
    & TextFieldVariantProps
    & Omit<
        JSX.IntrinsicElements["input"], 
        "onChange" 
        | "ref" 
        | "type" 
        | "value" 
        | "defaultValue"
        | "size"
    > & TextFieldVariantProps & {
        open?: boolean;
        defaultOpen?: boolean;
        onOpenChange?: (open: boolean) => void;
        value?: CalendarState;
        defaultValue?: CalendarState;
        onValueChange?: (value: CalendarState) => void;
    }
);

const months = dayjs.monthsShort().concat([]);

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>((props, ref) => {

    const {
        size,
        color,
        block,
        open,
        defaultOpen,
        onOpenChange,
        value,
        defaultValue,
        onValueChange,
        ...htmlProps
    } = props;

    const variantProps = {
        size,
        block,
        color
    }

    const [calendarState, setCalendarState] = useValue({
        initialValue: {},
        value,
        defaultValue,
        onValueChange,
    });

    const [inputState, setInputState] = useState("");

    const [ isOpen, setIsOpen ] = useValue({
        initialValue: false,
        value: open,
        defaultValue: defaultOpen,
        onValueChange: onOpenChange,
    });

    useOnChange(() => {

        const newDate = new Date(dateStrToIsoDateStr(inputState));

        const value = {
            month: newDate.getMonth(),
            year: newDate.getFullYear()
        }

        if (isValidMonthDateStr(inputState) && isValidDate(value)) {

            setCalendarState({
                active: "month",
                ...value
            });
        }
        if (isValidYearDateStr(inputState) && isValidDate(value)) {

            setCalendarState({
                active: "year",
                ...value
            });
        }

    }, [inputState]);

    /* eslint-disable */
    useEffect(() => {

        if (calendarState.active) {

            const newState = calendarStateToStr(calendarState); 

            const currentState = inputState;

            if (standarizeDateInput(newState) !== standarizeDateInput(currentState)) {

                setInputState(newState);
            }
        }
    }, [ JSON.stringify(calendarState) ]);
    /* eslint-enable */

    const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.key === "Enter") {

            setIsOpen(false);
        }
    }

    const closeHandler = () => setIsOpen(false);

    const openHandler = () => setIsOpen(true);

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

    return (
        <Popover
        open={isOpen}
        onOpenChange={setIsOpen}>
            <StyledTrigger
            block={block}
            tabIndex={-1}
            onClick={onClickHandler}>
                <TextField
                {...htmlProps}
                {...variantProps}
                ref={ref}
                placeholder="MM / YYYY"
                value={inputState}
                onValueChange={setInputState}
                onFocus={openHandler}
                onClick={openHandler}
                StartIcon={CalendarIcon}
                onKeyDown={onKeyDownHandler}/>
            </StyledTrigger>

            <StyledContent
            onOpenAutoFocus={event => event.preventDefault()}
            side="bottom"
            align="start"
            sideOffset={6}>
                <Calendar
                color={color}
                onClick={closeHandler}
                value={calendarState}
                onValueChange={setCalendarState}/>
            </StyledContent>
        </Popover>
    );
});

DatePicker.toString = () => StyledContent.selector;

DatePicker.displayName = "DatePicker";

function dateStrToIsoDateStr(inputState: string): string {
    
    return (
        standarizeDateInput(inputState)
        .split(",")
        .reverse()
        .map(str => str.trim())
        .map(str => {
            const monthIndex = months.map(str => str.toLowerCase()).indexOf(str);

            if (monthIndex < 0) {

                return str;
            }

            let monthStr = `${monthIndex + 1}`;

            if (monthStr.length === 1) {

                monthStr = `0${monthStr}`;
            }

            return monthStr;
        })
        .join("-")
    );
} 

function standarizeDateInput(value: string): string {

    const [month, year] = value.trim().replace(/\s{2,}/g, " ").split(",");

    if (!year) {

        return month;
    }

    return [month.trim(), year.trim()].join(", ").toLowerCase();
}

function isValidDate(value: Omit<CalendarState, "active">) {

    let isMonthValid = true;

    if (value.month !== undefined) {

        isMonthValid = !isNaN(value.month);
    }

    let isYearValid = true;

    if (value.year !== undefined) {

        isYearValid = !isNaN(value.year);
    }

    return isYearValid && isMonthValid;
}

const isValidYearDateStrRegex = new RegExp(`^((\\s*)([0-9]{4,5})(\\s*))$`, "i");

function isValidYearDateStr(value: string): boolean {
    
    return isValidYearDateStrRegex.test(value);
}

const isValidMonthDateStrRegex = new RegExp(`^((\\s*)(${months.map(v => v.toLowerCase()).join("|")})(\\s*),(\\s*)([0-9]{4,5})(\\s*))$`, "i");

function isValidMonthDateStr(value: string): boolean {

    return isValidMonthDateStrRegex.test(value);
}

function calendarStateToStr(state: CalendarState): string {

    let date = dayjs();

    date = date.year(state.year ?? date.year());

    date = date.month(state.month ?? date.month());

    if (state.active === "year") {

        return date.format("YYYY");
    }

    return date.format("MMM, YYYY");
}
import { TextField, TextFieldVariantProps } from "./TextField";

import { Calendar, CalendarState } from "./Calendar";

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

import { stitches } from "stitches";

import { popoverAnimation, popoverContent } from "mixins";

import React, { forwardRef, useEffect, useState } from "react";

import { CalendarIcon } from "@radix-ui/react-icons";

import dayjs from "dayjs.config";

import { useOnChange, useValue } from "helpers";



const StyledContent = stitches.styled(PopoverContent, popoverAnimation, popoverContent);

StyledContent.displayName = "StyledDatePickerContent"; 

const initialState: CalendarState = {
    active: "year",
    date: new Date()   
}

export type DatePickerState = CalendarState | null;

export type DatePickerProps = Omit<JSX.IntrinsicElements["input"], "onChange" | "ref" | "type" | "value" | "defaultValue"> & TextFieldVariantProps & {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
    value?: DatePickerState;
    defaultValue?: DatePickerState;
    onValueChange?: (value: DatePickerState) => void;
}

export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>((props, ref) => {

    const {
        size,
        color,
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
        color
    }

    const valueProps = {
        value,
        defaultValue,
        onValueChange,
    }

    const [calendarState, setCalendarState] = useValue<CalendarState | null>({
        initialValue: null,
        ...valueProps
    });

    const openProps = {
        value: open,
        defaultValue: defaultOpen,
        onValueChange: onOpenChange,
    }

    const [ isOpen, setIsOpen ] = useValue({
        initialValue: false,
        ...openProps
    });

    const [inputState, setInputState] = useState("");

    useOnChange(() => {

        if (isValidMonthDateStr(inputState)) {

            setCalendarState({
                active: "month",
                date: new Date(inputState)
            });
        }

        if (isValidYearDateStr(inputState)) {

            setCalendarState({
                active: "year",
                date: new Date(inputState)
            });
        }

    }, [inputState]);

    useEffect(() => {

        if (calendarState) {

            const newState = calendarStateToStr(calendarState);

            const currentState = inputState;
            
            if (newState.toLowerCase() !== standarize(currentState.toLowerCase())) {
            
                setInputState(newState);
            }
        }
    }, [
        calendarState?.active,
        calendarState?.date.getFullYear(),
        calendarState?.date.getMonth(),
    ]);

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
            <PopoverTrigger 
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
            </PopoverTrigger>

            <StyledContent
            onOpenAutoFocus={event => event.preventDefault()}
            side="bottom"
            align="start"
            sideOffset={6}>
                <Calendar
                onClick={closeHandler}
                value={calendarState ?? initialState}
                onValueChange={value => {

                    setCalendarState(value);
                }}/>
            </StyledContent>
        </Popover>
    );
});

DatePicker.displayName = "DatePicker";

function standarize(value: string): string {

    const [month, year] = value.trim().replace(/\s{2,}/g, " ").split(",");

    if (!year) {

        return month;
    }

    return [month.trim(), year.trim()].join(", ");
}

const isValidYearDateStrRegex = new RegExp(`^((\\s*)([0-9]{4,5})(\\s*))$`, "i");

function isValidYearDateStr(value: string): boolean {
    
    return isValidYearDateStrRegex.test(value);
}

const isValidMonthDateStrRegex = new RegExp(`^((\\s*)(${dayjs.monthsShort().concat([]).map(v => v.toLowerCase()).join("|")})(\\s*),(\\s*)([0-9]{4,5})(\\s*))$`, "i");

function isValidMonthDateStr(value: string): boolean {

    return isValidMonthDateStrRegex.test(value);
}

function calendarStateToStr(state: CalendarState): string {

    if (state.active === "year") {

        return dayjs(state.date).format("YYYY");
    }

    return dayjs(state.date).format("MMM, YYYY");
}
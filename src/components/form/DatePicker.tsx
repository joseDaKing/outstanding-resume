import { TextField } from "./TextField";

import { Calendar, CalendarState } from "./Calendar";

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

import { stitches } from "stitches";

import { popoverAnimation, popoverContent } from "mixins";

import React, { useState } from "react";

import { CalendarIcon } from "@radix-ui/react-icons";

import dayjs from "dayjs.config";

import { useOnChange, useValue } from "helpers";



const StyledContent = stitches.styled(PopoverContent, popoverAnimation, popoverContent);

const initialState: CalendarState = {
    active: "year",
    date: new Date()   
}

export const DatePicker = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const onKeyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {

        if (event.key === "Enter") {

            setIsOpen(false);
        }
    }

    const close = () => setIsOpen(false);

    const open = () => setIsOpen(true);

    const onClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault();

    const [inputState, setInputState] = useState("");

    const [calendarState, setCalendarState] = useState(initialState);

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
            })
        }

    }, [inputState]);

    useOnChange(() => {

        const newState = calendarStateToStr(calendarState)

        const currentState = inputState;
        
        if (newState.toLowerCase() !== balance(currentState.toLowerCase())) {
        
            setInputState(newState);
        }

    }, [JSON.stringify(calendarState)]);

    return (
        <Popover
        open={isOpen}
        onOpenChange={setIsOpen}>
            <PopoverTrigger 
            tabIndex={-1}
            onClick={onClickHandler}>
                <TextField
                placeholder="MM / YYYY"
                value={inputState}
                onValueChange={setInputState}
                onFocus={open}
                onClick={open}
                StartIcon={CalendarIcon}
                onKeyDown={onKeyDownHandler}/>
            </PopoverTrigger>

            <StyledContent
            onOpenAutoFocus={event => event.preventDefault()}
            side="bottom"
            align="start"
            sideOffset={6}>
                <Calendar
                onClick={close}
                value={calendarState}
                onValueChange={setCalendarState}/>
            </StyledContent>
        </Popover>
    );
}

function balance(value: string): string {

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
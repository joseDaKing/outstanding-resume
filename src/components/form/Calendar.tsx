import React, { ElementRef, forwardRef } from "react";

import { stitches } from "stitches";

import { Toggle } from "./Toggle";

import { IconButton } from "./IconButton";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import * as PrimitiveToggleGroup from "@radix-ui/react-toggle-group";

import { useValue } from "helpers";

import dayjs from "dayjs.config";

import { CSSProps } from "types";



const StyledCalendarRoot = stitches.styled(PrimitiveToggleGroup.Root, {
    spaceY: "$4"
});

StyledCalendarRoot.displayName = "StyledCalendarRoot";



const StyledCalendarHead = stitches.styled("div", {
    display: "flex",
    width: "100%",
    gap: "$4"
});

StyledCalendarHead.displayName = "StyledCalendarHead";



const StyledCalendarBody = stitches.styled("div", {
    gridTemplateColumns: "repeat(4, 1fr)",
    gridTemplateRows: "repeat(3, 1fr)",
    display: "grid",
    width: "100%",
    gap: "$2",
});

StyledCalendarBody.displayName = "StyledCalendarBody";



const months = dayjs.monthsShort();

export type CalendarState = {
    active: "month" | "year";
    date: Date;
}

export type CalendarProps = Omit<PrimitiveToggleGroup.ToggleGroupSingleProps, "value" | "defaultValue" | "type" | "onValueChange"> & CSSProps & {
    defaultValue?: CalendarState;
    value?: CalendarState;
    onValueChange?: (state: CalendarState) => void;
    onClick?: () => void;
}

const initialState: CalendarState = {
    active: "year",
    date: new Date()
};

export const Calendar = forwardRef<ElementRef<typeof PrimitiveToggleGroup.Root>, CalendarProps>(({ 
    value, 
    defaultValue, 
    onClick = () => {},
    onValueChange: onChange, 
    ...props
}, ref) => {

    const [ state, setState ] = useValue({
        initialValue: initialState,
        value,
        defaultValue,
        onValueChange: onChange
    });

    const incrementYearHandler = () => setState(prevState => {

        const newDate = new Date(prevState.date);
    
        newDate.setFullYear(newDate.getFullYear() + 1);
    
        return {
            ...prevState,
            date: newDate
        };
    });

    const decrementYearHandler = () => setState(prevState => {

        const newDate = new Date(prevState.date);
    
        newDate.setFullYear(newDate.getFullYear() - 1);
    
        return {
            ...prevState,
            date: newDate
        };
    });

    const onValueChange = (value: string) => setState(prevState => {

        if (value === "year") {
    
            return {
                ...prevState,
                active: "year"
            };
        }
    
        const newDate = new Date(prevState.date);
    
        newDate.setMonth(Number(value));
    
        return {
            date: newDate,
            active: "month"
        };
    });

    const yearClickHandler = (event: React.MouseEvent) => {

        if (state.active === "year") {

            event.preventDefault();
        }

        onClick();
    }

    const createMonthClickHandler = (month: number) => (event: React.MouseEvent) => {

        if (state.active === "month" && state.date.getMonth() === month) {

            event.preventDefault();
        }

        onClick();
    }

    return (
        <StyledCalendarRoot
        {...props}
        ref={ref}
        type="single"
        value={state.active === "year" ? "year" : state.date.getMonth().toString()}
        onValueChange={onValueChange}>
            <StyledCalendarHead>
                <IconButton
                onClick={decrementYearHandler}
                round
                variant="text"
                Icon={ChevronLeftIcon}
                css={{
                    margin: "auto"
                }}/>

                <PrimitiveToggleGroup.Item 
                value="year" 
                asChild>
                    <Toggle
                    onClick={yearClickHandler}
                    variant="text"
                    css={{
                        margin: "auto"
                    }}>
                        {state.date.getFullYear()}
                    </Toggle>
                </PrimitiveToggleGroup.Item>

                <IconButton 
                onClick={incrementYearHandler}
                round
                variant="text"
                Icon={ChevronRightIcon}
                css={{
                    margin: "auto"
                }}/>
            </StyledCalendarHead>

            <StyledCalendarBody>
                {months.map((month, monthIndex) => (
                    <PrimitiveToggleGroup.Item
                    key={month}
                    value={monthIndex.toString()} 
                    asChild>
                        <Toggle 
                        onClick={createMonthClickHandler(monthIndex)}
                        variant="text"
                        block>
                            {month}
                        </Toggle>
                    </PrimitiveToggleGroup.Item>
                ))}
            </StyledCalendarBody>
        </StyledCalendarRoot>
    );
});

Calendar.displayName = "Calendar";

Calendar.toString = () => StyledCalendarRoot.selector;
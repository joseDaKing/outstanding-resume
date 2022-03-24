import React, { ElementRef, forwardRef } from "react";

import { stitches } from "stitches";

import { ToggleProps, Toggle } from "./Toggle";

import { IconButton } from "./IconButton";

import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";

import * as PrimitiveToggleGroup from "@radix-ui/react-toggle-group";

import { useValue, UseValueProps } from "helpers";

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

const currentDate = new Date();

export type CalendarState = {
    active?: "month" | "year";
    year?: number;
    month?: number;
}

export type CalendarProps = (
    Omit<
        PrimitiveToggleGroup.ToggleGroupSingleProps, 
        "value" 
        | "defaultValue" 
        | "type" 
        | "onValueChange"
    > 
    & Pick<ToggleProps, "color">
    & CSSProps 
    & UseValueProps<CalendarState>
    & { onClick?: () => void; }
)

export const Calendar = forwardRef<ElementRef<typeof PrimitiveToggleGroup.Root>, CalendarProps>(({ 
    color,
    value,
    defaultValue,
    onValueChange: onChange, 
    onClick = () => {},
    ...props
}, ref) => {

    const [ state, setState ] = useValue<CalendarState>({
        initialValue: {
            year: currentDate.getFullYear(),
            month: currentDate.getMonth()
        },
        value,
        defaultValue,
        onValueChange: onChange,
    })

    const onValueChange = (value: string) => setState(prevState => {

        if (value === "year") {
            
            return {
                ...prevState,
                active: "year"
            };
        }

        return {
            ...prevState,
            month: Number(value),
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

        
        if (state.active === "month" && state.month === month) {

            event.preventDefault();
        }

        onClick();
    }

    const incrementYear = () => setState(prevState => ({
        ...prevState,
        year: (prevState.year ?? currentDate.getFullYear()) + 1
    }));

    const decrementYear = () => setState(prevState => ({
        ...prevState,
        year: (prevState.year ?? currentDate.getFullYear()) - 1
    }));

    let toggleValue: string | undefined = undefined;

    if (state.active === "year") {

        toggleValue = "year";
    }

    if (state.active === "month") {

        toggleValue = state.month?.toString();
    }    

    return (
        <StyledCalendarRoot
        {...props}
        ref={ref}
        type="single"
        value={toggleValue}
        onValueChange={onValueChange}>
            <StyledCalendarHead>
                <IconButton
                color={color}
                onClick={decrementYear}
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
                    color={color}
                    onClick={yearClickHandler}
                    variant="text"
                    css={{
                        margin: "auto"
                    }}>
                        {state.year ?? currentDate.getFullYear()}
                    </Toggle>
                </PrimitiveToggleGroup.Item>

                <IconButton
                color={color}
                onClick={incrementYear}
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
                        color={color}
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
import { CalendarState } from "components/form";

import dayjs from "dayjs";



export function calendarStateToStr(value: CalendarState | undefined): string {

    if (!value?.active) return "";

    if (!value.year) return "";

    if (value.active === "year") {

        return value.year.toString();
    }

    if (!value.month) return "";

    return `${dayjs.months().concat([])[value.month].toUpperCase()} ${value.year}`
}
import { TextField } from "./TextField";

import { Calendar } from "./Calendar";

import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";

import { stitches } from "stitches";

import { popoverAnimation, popoverContent } from "mixins";

const StyledContent = stitches.styled(PopoverContent, popoverAnimation, popoverContent);

export const DatePicker = () => {

    return (
        <Popover>
            <PopoverTrigger>
                <TextField/>
            </PopoverTrigger>

            <StyledContent
            side="bottom"
            align="start"
            sideOffset={6}>
                <Calendar/>
            </StyledContent>
        </Popover>
    );
}
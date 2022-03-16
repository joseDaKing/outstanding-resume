import * as PrimitiveDropdownMenu from "@radix-ui/react-dropdown-menu";

import { ElementRef, forwardRef } from "react";

import { stitches } from "stitches";

import { CSSProps } from "types";

import {    
    popoverArrow, 
    dropdownContent,
    dropdownSubContent,
    dropdownIcon,
    dropdownItem,
    dropdownSeperator,
    dropdownSlot,
    dropdownItemText,
} 
from "mixins";

import { ChevronRightIcon } from "@radix-ui/react-icons";

import { VariantProps } from "@stitches/react";



export const DropdownMenuSeperator = stitches.styled(PrimitiveDropdownMenu.Separator, dropdownSeperator);

DropdownMenuSeperator.displayName = "DropdownMenuSeperator";



const DropdownMenuIcon = stitches.styled(ChevronRightIcon, dropdownIcon);

export const DropdownMenuItemSlot = stitches.styled("div", dropdownSlot);

DropdownMenuItemSlot.displayName = "DropdownMenuItemSlot";



const StyledTriggerItem = stitches.styled(PrimitiveDropdownMenu.TriggerItem, dropdownItem);

const StyledItemText = stitches.styled("span", dropdownItemText);

type DropdownMenuTriggerItemProps = Omit<PrimitiveDropdownMenu.DropdownMenuTriggerItemProps, "asChild"> & CSSProps;

export const DropdownMenuTriggerItem = forwardRef<ElementRef<typeof PrimitiveDropdownMenu.TriggerItem>, DropdownMenuTriggerItemProps>((props, ref) => {

    return (
        <StyledTriggerItem
        {...props}
        ref={ref}>
            <StyledItemText>
                {props.children}

                <DropdownMenuIcon/>
            </StyledItemText>
        </StyledTriggerItem>
    );
});

DropdownMenuTriggerItem.toString = () => StyledItem.selector;

DropdownMenuTriggerItem.displayName = "DropdownMenuTriggerItem";



const StyledItem = stitches.styled(PrimitiveDropdownMenu.Item, dropdownItem);

type DropdownMenuItemProps = Omit<PrimitiveDropdownMenu.MenuItemProps, "asChild"> & CSSProps;

export const DropdownMenuItem = forwardRef<ElementRef<typeof PrimitiveDropdownMenu.Item>, DropdownMenuItemProps>((props, ref) => {

    return (
        <StyledItem
        {...props}
        ref={ref}>
            <StyledItemText>
                {props.children}
            </StyledItemText>
        </StyledItem>
    );
});

DropdownMenuItem.toString = () => StyledItem.selector;

DropdownMenuItem.displayName = "DropdownMenuItem";



const StyledArrow = stitches.styled(PrimitiveDropdownMenu.Arrow, popoverArrow);

StyledArrow.displayName = "StyledDropdownMenuArrow";



const StyledContent = stitches.styled(PrimitiveDropdownMenu.Content, dropdownContent);

StyledContent.displayName = "StyledDropdownMenuContent";

type DropdownMenuContentProps = Omit<PrimitiveDropdownMenu.MenuContentProps, "asChild"> & VariantProps<typeof StyledContent> & CSSProps;

export const DropdownMenuContent = forwardRef<ElementRef<typeof StyledContent>, DropdownMenuContentProps>((props, ref) => {

    return (
        <StyledContent
        side="bottom"
        align="center"
        sideOffset={6}
        {...props}
        ref={ref}>
            {props.children}
            <StyledArrow/>
        </StyledContent>
    );
});

DropdownMenuContent.displayName = "DropdownMenuContent";

DropdownMenuContent.toString = () => StyledContent.selector;



const StyledSubContent = stitches.styled(PrimitiveDropdownMenu.Content, dropdownSubContent);

StyledSubContent.displayName = "StyledDropdownMenuContent";

export const DropdownSubMenuContent = forwardRef<ElementRef<typeof StyledContent>, DropdownMenuContentProps>((props, ref) => {

    return (
        <StyledSubContent
        side="right"
        align="center"
        sideOffset={6}
        {...props}
        ref={ref}>
            {props.children}
        </StyledSubContent>
    );
});

DropdownSubMenuContent.displayName = "DropdownSubMenuContent";

DropdownSubMenuContent.toString = () => StyledContent.selector;



export {
    DropdownMenu,
    DropdownMenuGroup,
    DropdownMenuTrigger
} 
from "@radix-ui/react-dropdown-menu";

export type {
    DropdownMenuProps,
    DropdownMenuGroupProps,
    DropdownMenuTriggerProps
} 
from "@radix-ui/react-dropdown-menu";
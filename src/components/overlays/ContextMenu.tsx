import * as PrimitiveContextMenu from "@radix-ui/react-context-menu";

import { ElementRef, forwardRef } from "react";

import { stitches } from "stitches";

import { CSSProps } from "types";

import {
    dropdownContent,
    fadeAnimation,
    dropdownIcon,
    dropdownItem,
    dropdownSeperator,
    dropdownSlot,
    dropdownItemText,
} 
from "mixins";

import { ChevronRightIcon } from "@radix-ui/react-icons";

import { VariantProps } from "@stitches/react";



export const ContextMenuSeperator = stitches.styled(PrimitiveContextMenu.Separator, dropdownSeperator);

ContextMenuSeperator.displayName = "DropdownMenuSeperator";



const ContextMenuIcon = stitches.styled(ChevronRightIcon, dropdownIcon);

export const ContextMenuItemSlot = stitches.styled("div", dropdownSlot);

ContextMenuItemSlot.displayName = "DropdownMenuItemSlot";



const StyledTriggerItem = stitches.styled(PrimitiveContextMenu.TriggerItem, dropdownItem);

const StyledItemText = stitches.styled("span", dropdownItemText);

type ContextMenuTriggerItemProps = Omit<PrimitiveContextMenu.ContextMenuTriggerItemProps, "asChild"> & CSSProps;

export const ContextMenuTriggerItem = forwardRef<ElementRef<typeof PrimitiveContextMenu.TriggerItem>, ContextMenuTriggerItemProps>((props, ref) => {

    return (
        <StyledTriggerItem
        {...props}
        ref={ref}>
            <StyledItemText>
                {props.children}

                <ContextMenuIcon/>
            </StyledItemText>
        </StyledTriggerItem>
    );
});

ContextMenuTriggerItem.toString = () => StyledItem.selector;

ContextMenuTriggerItem.displayName = "DropdownMenuTriggerItem";



const StyledItem = stitches.styled(PrimitiveContextMenu.Item, dropdownItem);

type ContextMenuItemProps = Omit<PrimitiveContextMenu.MenuItemProps, "asChild"> & CSSProps;

export const ContextMenuItem = forwardRef<ElementRef<typeof PrimitiveContextMenu.Item>, ContextMenuItemProps>((props, ref) => {

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

ContextMenuItem.toString = () => StyledItem.selector;

ContextMenuItem.displayName = "DropdownMenuItem";



const StyledContent = stitches.styled(PrimitiveContextMenu.Content, dropdownContent, fadeAnimation);

StyledContent.displayName = "StyledDropdownMenuContent";

type ContextContentProps = Omit<PrimitiveContextMenu.MenuContentProps, "asChild"> & VariantProps<typeof StyledContent> & CSSProps;

export const ContextMenuContent = forwardRef<ElementRef<typeof StyledContent>, ContextContentProps>((props, ref) => {

    return (
        <StyledContent
        side="bottom"
        align="start"
        sideOffset={6}
        {...props}
        ref={ref}>
            {props.children}
        </StyledContent>
    );
});

ContextMenuContent.displayName = "DropdownMenuContent";

ContextMenuContent.toString = () => StyledContent.selector;



const StyledSubContent = stitches.styled(PrimitiveContextMenu.Content, dropdownContent, fadeAnimation);

StyledSubContent.displayName = "StyledDropdownMenuContent";

export const ContextSubMenuContent = forwardRef<ElementRef<typeof StyledContent>, ContextContentProps>((props, ref) => {

    return (
        <StyledSubContent
        side="right"
        align="start"
        sideOffset={6}
        {...props}
        ref={ref}>
            {props.children}
        </StyledSubContent>
    );
});

ContextSubMenuContent.displayName = "DropdownSubMenuContent";

ContextSubMenuContent.toString = () => StyledContent.selector;



export {
    ContextMenu,
    ContextMenuGroup,
    ContextMenuTrigger
} 
from "@radix-ui/react-context-menu";

export type {
    ContextMenuProps,
    ContextMenuGroupProps,
    ContextMenuTriggerProps
} 
from "@radix-ui/react-context-menu";
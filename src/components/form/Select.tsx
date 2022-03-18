import { ElementRef, forwardRef } from "react";

import * as PrimitiveSelect from "@radix-ui/react-select";

import { stitches } from "stitches";

import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "@radix-ui/react-icons";

import {
    dropdownContent,
    dropdownIcon,
    dropdownItem,
    dropdownSeperator,
    dropdownItemText,
    popoverAnimation,
    textFieldContainer, 
    textFieldTextContainer, 
    textFieldText
} 
from "mixins";

import { VariantProps } from "@stitches/react";



const StyledIcon = stitches.styled(CheckIcon, dropdownIcon);

StyledIcon.displayName = "StyledSelectItemIcon";

const StyledItem = stitches.styled(PrimitiveSelect.Item, dropdownItem);

StyledItem.displayName = "StyledSelectItem";

const StyledItemText = stitches.styled("span", dropdownItemText);

StyledItemText.displayName = "StyledSelectItemText";

export const SelectItem = forwardRef<ElementRef<typeof PrimitiveSelect.Item>, PrimitiveSelect.SelectItemProps>((props, ref) => {

    return (
        <StyledItem
        {...props}
        ref={ref}>
            <StyledItemText>
                <PrimitiveSelect.ItemText>
                    {props.children ?? props.value}
                </PrimitiveSelect.ItemText>

                <PrimitiveSelect.ItemIndicator asChild>
                    <StyledIcon/>
                </PrimitiveSelect.ItemIndicator>
            </StyledItemText>
        </StyledItem>
    );
});

SelectItem.displayName = "SelectItem";

SelectItem.toString = () => StyledItem.selector;



export const SelectSeperator = stitches.styled(PrimitiveSelect.Separator, dropdownSeperator);

SelectSeperator.displayName = "SelectSeperator";



const StyledContent = stitches.styled(PrimitiveSelect.Content, dropdownContent, popoverAnimation, {
    minWidth: "$48"
});

StyledContent.displayName = "StyledSelectContent";

const ScrollButton = stitches.styled(PrimitiveSelect.ScrollUpButton, dropdownItem, {
    "&::before": {
        display: "none"
    },
    "&::after": {
        display: "none"
    },
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px",
});



const TextFieldContainer = stitches.styled(PrimitiveSelect.Trigger, textFieldContainer, {
    cursor: "pointer"
});

TextFieldContainer.displayName = "TextFieldContainer";

const TextFieldTextContainer = stitches.styled("span", textFieldTextContainer);

TextFieldTextContainer.displayName = "TextFieldTextContainer";

const TextFieldText = stitches.styled(PrimitiveSelect.Value, textFieldText);

TextFieldText.displayName = "TextFieldText";



type SelectProps = (
    Omit<PrimitiveSelect.SelectTriggerProps, "asChild"> 
    & VariantProps<typeof TextFieldContainer>
    & PrimitiveSelect.SelectProps 
);

export const Select = forwardRef<ElementRef<typeof PrimitiveSelect.Trigger>, SelectProps>((props, ref) => {

    const { 
        defaultValue,
        value,
        onValueChange,
        defaultOpen,
        open,
        onOpenChange,
        dir,
        name,
        ...htmlProps
    } = props;

    const rootProps = {
        defaultValue,
        value,
        onValueChange,
        defaultOpen,
        open,
        onOpenChange,
        dir,
        name
    }

    return (
        <PrimitiveSelect.Root 
        {...rootProps}>
            <TextFieldContainer 
            {...htmlProps}
            ref={ref}>
                <TextFieldTextContainer>
                    <TextFieldText/>
                    <PrimitiveSelect.Icon asChild>
                        <ChevronDownIcon
                        style={{
                            marginLeft: "auto"
                        }}/>
                    </PrimitiveSelect.Icon>
                </TextFieldTextContainer>
            </TextFieldContainer>

            <StyledContent>
                <ScrollButton>
                    <ChevronUpIcon/>
                </ScrollButton>
                
                <PrimitiveSelect.Viewport>
                    {props.children}
                </PrimitiveSelect.Viewport>

                <ScrollButton 
                as={PrimitiveSelect.ScrollDownButton}>
                    <ChevronDownIcon/>
                </ScrollButton>
            </StyledContent>
        </PrimitiveSelect.Root>
    );
});
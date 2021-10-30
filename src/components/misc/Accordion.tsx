import { styled } from "../../stitches";

import { DisclosureAnimation } from "../../components/animations";

import { Box } from "../../components/layout";

import { MdKeyboardArrowDown } from "react-icons/md";

import { usePreviousImmediate } from "rooks";

import { IID } from "../../types";

import React, { createContext, useContext, useEffect, useState } from "react";

const ArrowDown = styled(MdKeyboardArrowDown, {
    fill: "$blue-gray-400",
    display: "inline-block"
});

const AccordionItemContainer = styled("div", {
    borderRadius: "$sm",
    borderWidth: "$1",
    borderStyle: "solid",
    borderColor: "$blue-gray-300",
    backgroundColor: "white"
});

const AccordionItemButton = styled("button", {
    display: "flex",
    width: "$full",
    textAlign: "left",
    fontSize: "$sm",
    fontFamily: "$mono",
    _textColor: "$blue-gray-700",
    fontWeight: "$extrabold",
    transitionDuration: "$100",
    transitionProperty: "$colors",
    transitionTimingFunction: "$inOut",
    padding: "$5",
    _paddingX: "$6",
    "&:hover": {
        _textColor: "$light-blue-500",
        [`& ${ArrowDown}`]: {
            fill: "$light-blue-500",
            transitionDuration: "$100",
            transitionProperty: "$colors",
            transitionTimingFunction: "$inOut"
        }
    },
    variants: {
        isOpen: {
            true: {
                [`& ${ArrowDown}`]: {
                    _transform: true,
                    _transformRotate: "$180",
                }
            }
        }
    }
});

interface IAccordionContext {
    setActive: React.Dispatch<React.SetStateAction<string | null>>,
    activeValue: string | null;
}


const AccordionContext = createContext<IAccordionContext|null>(null);

export const useAccordion = () => {
    
    const accordionContext = useContext(AccordionContext);

    if (!accordionContext) {

        throw new Error("AccordionItem must be wrapped in Accordion component")
    }

    return accordionContext;
}

export const useActivateLatestAccordionItem = (items: IID[]) => {

    const { setActive } = useAccordion();

    const prevItemsLength = usePreviousImmediate(items.length) ?? -1;

    useEffect(() => {

        const lastItemId = items[items.length - 1]?.id || null;

        if (prevItemsLength < items.length && lastItemId) {

            setActive(lastItemId);
        }
    /* eslint-disable */
    }, [items.length]);
    /* eslint-enable */
}

interface IAccordionItemProps {
    title: string;
    id: string;
}

const AccordionItem: React.FC<IAccordionItemProps> = ({ id, title, children }) => {

    const { activeValue, setActive } = useAccordion();

    const isOpen = activeValue === id;

    const onClickHandler = () => {
        
        if (!isOpen) {

            setActive(id);
        }
        else {

            setActive(null);
        }
    };

    return (
        <AccordionItemContainer>
            <AccordionItemButton 
            isOpen={isOpen}
            onClick={onClickHandler}>
                
                {title}

                <Box 
                css={{
                    marginLeft: "auto",
                }}
                inline>
                    <ArrowDown size={24}/>
                </Box>
            </AccordionItemButton>
            
            <DisclosureAnimation isOpen={isOpen}>
                <Box css={{
                    paddingBottom: "$5",
                    _paddingX: "$6",
                }}>
                    {children}
                </Box>
            </DisclosureAnimation> 
        </AccordionItemContainer>
    );
}

interface IAccordionProps {
    active?: string | null;
}

interface IAccordionSubComponents {
    Item: typeof AccordionItem;
}

export const Accordion: React.FC<IAccordionProps> & IAccordionSubComponents = props => {

    const [activeValue, setActive] = useState<string|null>(props.active ?? null);

    useEffect(() => {

        setActive(props.active ?? null);

    }, [props.active]);

    return (
        <AccordionContext.Provider value={{
            activeValue,
            setActive
        }}>
            {props.children}
        </AccordionContext.Provider>
    );
}

Accordion.Item = AccordionItem;
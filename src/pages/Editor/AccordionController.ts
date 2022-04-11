import { createContext, Dispatch, SetStateAction, useContext } from "react";



type AccordionControllerType = {
    active: string;
    setActive: Dispatch<SetStateAction<string>>
}

export const AccordionController = createContext<AccordionControllerType|null>(null);

export const useAccordionController = () => {

    const accordionController = useContext(AccordionController);

    if (!accordionController) {

        throw new Error("useAccordionController hook muste be used inside a AccordionController context")
    }

    return accordionController;
}
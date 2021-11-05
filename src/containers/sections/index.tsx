import React from "react";

import { ContactDetails } from "./ContactDetails";

import { ProfessionalExperience } from "./ProfessionalExperience";

import { OrderableSections } from "./OrderableSections";

export const Sections: React.FC = () => {

    return (
        <>
            <ContactDetails/>

            <ProfessionalExperience/>

            <OrderableSections/>   
        </>
    );
}
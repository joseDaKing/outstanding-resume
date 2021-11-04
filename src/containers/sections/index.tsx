import React from "react";

import { 
    useAppDispatch, 
    useAppSelector, 
    sectionOrder, 
    workExperience, 
    education
}
from "../../store";

import { ContactDetails } from "./ContactDetails";

import { Education } from "./Education";

import { Links } from "./Links";

import { ProfessionalExperience } from "./ProfessionalExperience";

import { WorkExperience } from "./WorkExperience";

import { Reorder } from "../../components/misc";

import { IID } from "../../types";

const SortableSection: React.FC<IID> = ({ id }) => {

    if (id === workExperience.name) {

        return <WorkExperience/>;
    }
    
    if (id === education.name) {

        return <Education/>;
    }

    return <Links/>;
}

export const Sections: React.FC = () => {

    const order = useAppSelector(state => state.sectionOrder.items.map(id => ({ id })));

    const dispatch = useAppDispatch();

    const onChangeHandler = (ids: [fromId: string, toId: string]) => dispatch(sectionOrder.actions.reorder(ids));

    return (
        <>            
            <ContactDetails/>

            <ProfessionalExperience/>     
            
            <Reorder
            value={order}
            onChange={onChangeHandler}
            render={({ id }) => <SortableSection key={id} id={id}/>}/>
        </>
    );
}
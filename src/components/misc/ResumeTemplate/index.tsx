import React from "react";

import { Document, Page } from "@react-pdf/renderer";

import { 
    ResumeTemplateProps,
    ResumeTemplateContext,
    ItemsComponents
}
from "./shared";

import { Orderable } from "./Orderable";

import { HeaderWrapper } from "./HeaderWrapper";

import { ContactDetailsWrapper } from "./ContactDetailsWrapper";

import { ProfessionalExperienceWrapper } from "./ProfessionalExperienceWrapper";

export const ResumeTemplate: React.FC<ResumeTemplateProps> = props => {

    const {
        Layout,
        Header,
        ContactDetails,
        Description,
        ...ItemComponents
    } = props

    const itemsComponents: ItemsComponents = {
        "work-experience": ItemComponents.WorkExperience,
        internship: ItemComponents.WorkExperience,
        "extra-activity": ItemComponents.WorkExperience,
        education: ItemComponents.Education,
        link: ItemComponents.Link,
        skill: ItemComponents.Skill,
        course: ItemComponents.Course,
        language: ItemComponents.Language,
        reference: ItemComponents.Reference
    }
    return (
        <Document>
            <Page>
                <ResumeTemplateContext.Provider 
                value={{
                    ...props,
                    ...itemsComponents
                }}>
                    <Layout
                    Orderable={Orderable}
                    Header={HeaderWrapper}
                    ContactDetails={ContactDetailsWrapper}
                    ProfessionalExperience={ProfessionalExperienceWrapper}/>
                </ResumeTemplateContext.Provider>
            </Page>
        </Document>
    );
}
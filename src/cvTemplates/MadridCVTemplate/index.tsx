import { 
    Document,
    Page,
    View
}
from "@react-pdf/renderer";

import { RootState } from "state";

import { 
    courses, 
    education, 
    extraActivities, 
    hobbies, 
    interships, 
    languages, 
    links, 
    references, 
    skills, 
    workExperience
}
from "state/slices";

import { 
    Header, 
    ContactInformation,
    ProfessionalExperience,
    WorkExperience,
    Education,
    Courses,
    References,
    Links,
    Skills,
    Languages
}
from "./sections";



export const MadridCVTemplate: React.FC<RootState> = state => {
    return (
        <Document>
            <Page
            style={{
                padding: "48pt"
            }}>
                <Header
                {...state.contactInformation}/>

                <ContactInformation
                {...state.contactInformation}/>

                <ProfessionalExperience
                {...state.professionalExperience}/>

                {state.sections.items.map(section => {

                    const sectionState = state[section]

                    return (
                        <View
                        key={section}>

                            {section === workExperience.name &&
                            <WorkExperience
                            {...sectionState as RootState["workExperience"]}/>}
    
                            {section === education.name &&
                            <Education
                            {...sectionState as RootState["education"]}/>}
    
                            {section === links.name &&
                            <Links
                            {...sectionState as RootState["links"]}/>}
    
                            {section === skills.name &&
                            <Skills
                            {...sectionState as RootState["skills"]}/>}
    
                            {section === extraActivities.name &&
                            <WorkExperience
                            {...sectionState as RootState["extraActivities"]}/>}
    
                            {section === hobbies.name &&
                            <ProfessionalExperience
                            {...sectionState as RootState["professionalExperience"]}/>}
    
                            {section === references.name &&
                            <References
                            {...sectionState as RootState["references"]}/>}
                                
                            {section === courses.name && 
                            <Courses
                            {...sectionState as RootState["courses"]}/>}

                            {section === interships.name && 
                            <WorkExperience
                            {...sectionState as RootState["interships"]}/>}
    
                            {section === languages.name &&
                            <Languages
                            {...sectionState as RootState["languages"]}/>}
                        </View>
                    );
                })}
            </Page>
        </Document>
    );
}
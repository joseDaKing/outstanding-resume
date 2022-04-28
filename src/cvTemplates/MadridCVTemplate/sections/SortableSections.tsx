import { View } from "@react-pdf/renderer";

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
    Sections, 
    skills, 
    workExperience
}
from "state/slices";

import { Header } from "./Header";

import { ContactInformation } from "./ContactInformation";

import { ProfessionalExperience } from "./ProfessionalExperience";

import { WorkExperience } from "./WorkExperience";

import { Education } from "./Education";

import { Courses } from "./Courses";

import { References } from "./References";

import { Links } from "./Links";

import { Skills } from "./Skills";

import { Languages } from "./Languages";




type SortableSectionsProps = {
    state: RootState;
    section: Sections;
};

export const SortableSections: React.FC<SortableSectionsProps> = ({ state, section }) => {

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
}
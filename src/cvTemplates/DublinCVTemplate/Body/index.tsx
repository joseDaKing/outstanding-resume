import { View } from "@react-pdf/renderer";

import { RootState } from "state";

import { Profile } from "./Profile";

import { WorkExperience } from "./WorkExperience";

import { Education } from "./Education";

import { References } from "./References";

import { 
    workExperience,
    interships,
    extraActivities,
    education,
    references
} 
from "state/slices";



export const Body: React.FC<RootState> = state => {

    return (
        <View
        style={{
            minHeight: "100%",
            padding: "32pt",
            width: "67%",
        }}>
            <Profile
            {...state.professionalExperience}/>

            {state.sections.items.map(section => (
                <View
                key={section}>
                    {section === workExperience.name &&
                    <WorkExperience
                    {...state.workExperience}/>}

                    {section === interships.name &&
                    <WorkExperience
                    {...state.interships}/>}

                    {section === extraActivities.name &&
                    <WorkExperience
                    {...state.extraActivities}/>}

                    {section === education.name &&
                    <Education
                    {...state.education}/>}

                    {section === references.name &&
                    <References
                    {...state.references}/>}
                </View>
            ))}
        </View>
    );
}
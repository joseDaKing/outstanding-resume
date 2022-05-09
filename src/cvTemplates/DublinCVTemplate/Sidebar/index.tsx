import { RootState } from "state";

import { View } from "@react-pdf/renderer";

import { Header } from "./Header";

import { Links } from "./Links";

import { Hobbies } from "./Hobbies";

import { ContactDetails } from "./ContactDetails";

import { Skills } from "./Skills";

import { Languages } from "./Languages";

import { 
    hobbies, 
    links,
    languages,
    skills
} 
from "state/slices";



export const Sidebar: React.FC<RootState> = state => {

    return (
        <View
        style={{
            padding: "32pt",
            minHeight: "100%",
            width: "33%",
            backgroundColor: "#0e4f92"
        }}>

            <Header
            {...state.contactInformation}/>

            <ContactDetails
            {...state.contactInformation}/>

            {state.sections.items.map(section => (
                <View
                key={section}>
                    {section === links.name &&
                    <Links
                    {...state.links}/>}

                    {section === hobbies.name &&
                    <Hobbies
                    {...state.hobbies}/>}

                    {section === skills.name &&
                    <Skills
                    {...state.skills}/>}

                    {section === languages.name &&
                    <Languages
                    {...state.languages}/>}
                </View>
            ))}
        </View>
    );
}
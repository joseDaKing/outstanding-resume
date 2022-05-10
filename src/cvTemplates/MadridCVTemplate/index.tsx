import { RootState } from "state";

import { 
    Document,
    Page,
    View
}
from "@react-pdf/renderer";

import { 
    Header, 
    ContactInformation,
    ProfessionalExperience,
    SortableSections
}
from "./sections";



const MadridCVTemplate: React.FC<RootState> = state => {

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

                <View>
                    {state.sections.items.map(section => (
                        <SortableSections
                        section={section}
                        state={state}/>
                    ))}
                </View>
            </Page>
        </Document>
    );
}

export const madrid = {
    template: MadridCVTemplate,
    img: "https://s3.resume.io/uploads/local_template_image/image/456/persistent-resource/madrid-cv-mallar.jpg",
    name: "madrid"
}
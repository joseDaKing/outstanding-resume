import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { setSectionNameReducer } from "../../utilities";

const initialContactDetails = {
    sectionName: "Kontaktuppgifter",
    fields: {
        jobTitle: "",
        firstName: "",
        lastName: "",
        email: "",
        mobilenumber: "",
        country: "",
        city: "",
        address: "",
        zipCode: "",
        driverLicense: "",
        nationality: "",
        birthDate: "",
        birthPlace: "",
    }
};

export const contactDetails = {
    initialState: initialContactDetails,
    slice: createSlice({
        name: "contact-details",
        initialState: initialContactDetails,
        reducers: {
            ...setSectionNameReducer,
            change(state, { payload: fields }: PayloadAction<Partial<typeof initialContactDetails["fields"]>>) {
    
                state.fields = {
                    ...state.fields,
                    ...fields
                }
            }
        }
    })
}
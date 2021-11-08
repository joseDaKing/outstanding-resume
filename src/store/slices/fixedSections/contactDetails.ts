import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SliceGroup } from "../../../types";

import { setSectionNameReducer } from "../../../utilities";

const initialState = {
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

const slice = createSlice({
    name: "contact-details",
    initialState,
    reducers: {
        ...setSectionNameReducer,
        change(state, { payload: fields }: PayloadAction<Partial<typeof initialState["fields"]>>) {

            state.fields = {
                ...state.fields,
                ...fields
            }
        }
    }
})

export const contactDetails: SliceGroup<typeof initialState, typeof slice> = {
    initialState,
    slice,
}
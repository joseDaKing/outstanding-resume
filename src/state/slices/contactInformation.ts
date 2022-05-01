import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { setSectionTitle } from "state/helpers";



const initialContactInformation = {
    sectionTitle: "Contact information",
    jobTitle: "",
    firstName: "",
    lastName: "",
    email: "",
    mobileNumber: "",
    country: "",
    city: "",
    address: "",
    zipCode: "",
    driverLicense: "",
    nationality: "",
    birthPlace: "",
    birthDate: ""
}

export const contactInformation = createSlice({
    name: "contactInformation",
    initialState: initialContactInformation,
    reducers: {
        setSectionTitle: setSectionTitle(),
        setJobTitle: (state, { payload }: PayloadAction<string>) => {

            state.jobTitle = payload;
        },
        setFirstName: (state, { payload }: PayloadAction<string>) => {

            state.firstName = payload;
        },
        setLastName: (state, { payload }: PayloadAction<string>) => {

            state.lastName = payload;
        },
        setEmail: (state, { payload }: PayloadAction<string>) => {

            state.email = payload;
        },
        setMobileNumber: (state, { payload }: PayloadAction<string>) => {

            state.mobileNumber = payload;
        },
        setCountry: (state, { payload }: PayloadAction<string>) => {

            state.country = payload;
        },
        setCity: (state, { payload }: PayloadAction<string>) => {

            state.city = payload;
        },
        setAddress: (state, { payload }: PayloadAction<string>) => {

            state.address = payload;
        },
        setZipCode: (state, { payload }: PayloadAction<string>) => {

            state.zipCode = payload;
        },
        setDriverLicense: (state, { payload }: PayloadAction<string>) => {

            state.driverLicense = payload;
        },
        setNationality: (state, { payload }: PayloadAction<string>) => {

            state.nationality = payload;
        },
        setBirthPlace: (state, { payload }: PayloadAction<string>) => {

            state.birthPlace = payload;
        },
        setBirthDate: (state, { payload }: PayloadAction<string>) => {

            state.birthDate = payload;
        },
    }
});
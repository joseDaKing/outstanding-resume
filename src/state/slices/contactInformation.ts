import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { setSectionTitle } from "state/helpers";



const initialContactInformation = {
    sectionTitle: "Contact information",
    imageUrl: "",
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
        setJobTitle: (state, { payload: jobTitle }: PayloadAction<string>) => {

            state.jobTitle = jobTitle;
        },
        setFirstName: (state, { payload: firstName }: PayloadAction<string>) => {

            state.firstName = firstName;
        },
        setLastName: (state, { payload: lastName }: PayloadAction<string>) => {

            state.lastName = lastName;
        },
        setEmail: (state, { payload: email }: PayloadAction<string>) => {

            state.email = email;
        },
        setMobileNumber: (state, { payload: mobileNumber }: PayloadAction<string>) => {

            state.mobileNumber = mobileNumber;
        },
        setCountry: (state, { payload: country }: PayloadAction<string>) => {

            state.country = country;
        },
        setCity: (state, { payload: city }: PayloadAction<string>) => {

            state.city = city;
        },
        setAddress: (state, { payload: address }: PayloadAction<string>) => {

            state.address = address;
        },
        setZipCode: (state, { payload: zipCode }: PayloadAction<string>) => {

            state.zipCode = zipCode;
        },
        setDriverLicense: (state, { payload: driverLicense }: PayloadAction<string>) => {

            state.driverLicense = driverLicense;
        },
        setNationality: (state, { payload: nationality }: PayloadAction<string>) => {

            state.nationality = nationality;
        },
        setBirthPlace: (state, { payload: birthPlace }: PayloadAction<string>) => {

            state.birthPlace = birthPlace;
        },
        setBirthDate: (state, { payload: birthDate }: PayloadAction<string>) => {

            state.birthDate = birthDate;
        },
        setImageUrl: (state, { payload: imageUrl }: PayloadAction<string>) => {

            state.imageUrl = imageUrl;
        }
    }
});
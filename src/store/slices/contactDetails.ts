import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const initialContactDetails = {
    sectionName: "Kontaktuppgifter",
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
};

export const contactDetails = createSlice({
    name: "contact-details",
    initialState: initialContactDetails,
    reducers: {
        change(state, { payload: contactDetails }: PayloadAction<Partial<typeof initialContactDetails>>) {

            for (const key in contactDetails) {

                const contactDetailsKey = key as keyof typeof contactDetails;

                state[contactDetailsKey] = contactDetails[contactDetailsKey] as any;
            }
        }
    }
});
import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import {
    workExperience,
    contactInformation,
    professionalExperience,
    education,
    links,
    skills,
    sections,
    languages,
    interships,
    courses,
    references,
    hobbies,
    extraAcivities
}
from "./slices";



export const store = configureStore({
    reducer: {
        contactInformation: contactInformation.reducer,
        professionalExperience: professionalExperience.reducer,
        workExperience: workExperience.reducer,
        education: education.reducer,
        links: links.reducer,
        skills: skills.reducer,
        sections: sections.reducer,
        languages: languages.reducer,
        interships: interships.reducer,
        courses: courses.reducer,
        references: references.reducer,
        hobbies: hobbies.reducer,
        extraActivities: extraAcivities.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
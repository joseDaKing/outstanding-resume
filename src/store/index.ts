import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import {
    contactDetails,
    education,
    link,
    professionalExperience,
    workExperience,
    sectionOrder,
    skill,
    course,
    internship,
    reference,
    extraActivity,
    hobbies,
    language
}
from "./slices";

export const store = configureStore({
    reducer: {
        [contactDetails.name]: contactDetails.reducer,
        [education.name]: education.reducer,
        [link.name]: link.reducer,
        [professionalExperience.name]: professionalExperience.reducer,
        [workExperience.name]: workExperience.reducer,
        [sectionOrder.name]: sectionOrder.reducer,
        [skill.name]: skill.reducer,
        [course.name]: course.reducer,
        [internship.name]: internship.reducer,
        [reference.name]: reference.reducer,
        [extraActivity.name]: extraActivity.reducer,
        [hobbies.name]: hobbies.reducer,
        [language.name]: language.reducer
    }
});

export * as slices from "./slices";

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
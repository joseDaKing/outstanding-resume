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
        contactDetails: contactDetails.reducer,
        education: education.reducer,
        link: link.reducer,
        professionalExperience: professionalExperience.reducer,
        workExperience: workExperience.reducer,
        sectionOrder: sectionOrder.reducer,
        skill: skill.reducer,
        course: course.reducer,
        internship: internship.reducer,
        reference: reference.reducer,
        extraActivity: extraActivity.reducer,
        hobbies: hobbies.reducer,
        language: language.reducer
    }
});

export * from "./slices";

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
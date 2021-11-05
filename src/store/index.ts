import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { contactDetails } from "./slices/contactDetails";

import { education } from "./slices/education";

import { link } from "./slices/link";

import { professionalExperience } from "./slices/professionalExperience";

import { workExperience } from "./slices/workExperience";

import { sectionOrder } from "./slices/sectionOrder";

import { skill } from "./slices/skill";

import { course } from "./slices/course";

import { internship } from "./slices/internship";

import { reference } from "./slices/reference";

import { extraActivity } from "./slices/extraActivity";

import { hobbies } from "./slices/hobbies";

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
    }
});

export * from "./slices";

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
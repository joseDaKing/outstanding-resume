import React, { useContext } from "react";

import { Get, PascalCase, Simplify } from "type-fest";

import ReactPDF from "@react-pdf/renderer";

import { contactDetails } from "../../../store/slices/fixedSections/contactDetails";

import { OrderableSliceGroupNames, orderableSliceGroups } from "../../../store/slices/orderableSections";

import { RootState } from "../../../store";

type Style = Exclude<ReactPDF.ViewProps["style"], undefined>;

export type StyleProp = {
    style?: Style;
}

export type OrderableProps = {
    sections?: Array<OrderableSliceGroupNames>;
    containerStyle?: Style;
    sectionStyle?: Style | ((index: number) => Style);
}

type LayoutProps = {
    Header: React.FC<StyleProp>;
    ContactDetails: React.FC<StyleProp>;
    ProfessionalExperience: React.FC<StyleProp>;
    Orderable: React.FC<OrderableProps>;
}

type HeaderProps = { 
    firstName: string;
    lastName: string;
    jobTitle: string;
}

type ContactDetailsProps = Simplify<
    Pick<(typeof contactDetails.initialState), "sectionName">
    & Omit<(typeof contactDetails.initialState.fields), keyof HeaderProps>
>;

type DescriptionProps = {
    sectionName: string;
    description: string;
}

export type ItemsProps<T> = {
    style?: Style;
    children: (item: T) => JSX.Element;
}

type ItemsContainerProps<T> = {
    sectionName: string;
    Items: React.FC<ItemsProps<T>>;
}

export type ResumeTemplateProps = Simplify<{
    state: RootState;
    Layout: React.FC<LayoutProps>
    Header: React.FC<HeaderProps>;
    ContactDetails: React.FC<ContactDetailsProps>;
    Description: React.FC<DescriptionProps>;
    WorkExperience: React.FC<ItemsContainerProps<typeof orderableSliceGroups["work-experience"]["initialItem"]>>;
    Education: React.FC<ItemsContainerProps<typeof orderableSliceGroups["education"]["initialItem"]>>;
    Link: React.FC<ItemsContainerProps<typeof orderableSliceGroups["link"]["initialItem"]>>;
    Skill: React.FC<ItemsContainerProps<typeof orderableSliceGroups["skill"]["initialItem"]>>;
    Course: React.FC<ItemsContainerProps<typeof orderableSliceGroups["course"]["initialItem"]>>;
    Language: React.FC<ItemsContainerProps<typeof orderableSliceGroups["language"]["initialItem"]>>;
    Reference: React.FC<ItemsContainerProps<typeof orderableSliceGroups["reference"]["initialItem"]>>;
}>;

export type ItemsSliceGroupNames = Exclude<OrderableSliceGroupNames, "hobbies">;

export type ItemsComponents = {
    [K in ItemsSliceGroupNames]: Get<ResumeTemplateProps, PascalCase<K>>;
}

type ResumeTemplateContextType = null | (ItemsComponents & { state: RootState; } & Pick<
    ResumeTemplateProps, 
    "Header" 
    | "Description"
    | "ContactDetails"
>);

export const ResumeTemplateContext = React.createContext<ResumeTemplateContextType>(null);

export const useResumeTemplateContext = () => {

    const resumeProps = useContext(ResumeTemplateContext);

    if (!resumeProps) {

        throw new Error("Must be wrapped in ResumeTemplateContext.Provider");
    }

    return resumeProps;
}
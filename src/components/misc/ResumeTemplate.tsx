import React, { useCallback } from "react";

import { Simplify } from "type-fest";

import ReactPDF, { Document, Page, View } from "@react-pdf/renderer";

import { contactDetails } from "../../store/slices/fixedSections/contactDetails";

import { OrderableSliceGroupNames, orderableSliceGroups } from "../../store/slices/orderableSections";

import { RootState } from "../../store";

import { isObjectValid, withId } from "../../utilities";

import { IID } from "../../types";



type Style = Exclude<ReactPDF.ViewProps["style"], undefined>;

type StyleProp = {
    style?: Style;
}

type OrderableProps = {
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

type ContactDetailsProps = Simplify<
    Pick<(typeof contactDetails.initialState), "sectionName">
    & (typeof contactDetails.initialState.fields)
>;

type DescriptionProps = {
    sectionName: string;
    description: string;
}

type ItemsProps<T> = {
    style?: Style;
    children: (item: T) => JSX.Element;
}

type ItemsContainerProps<T> = {
    sectionName: string;
    Items: React.FC<ItemsProps<T>>;
}



type SkillItem = typeof orderableSliceGroups["skill"]["initialItem"] & IID;

type WorkExperienceItem = typeof orderableSliceGroups["work-experience"]["initialItem"] & IID;

type EducationItem = typeof orderableSliceGroups["education"]["initialItem"] & IID;

type LinkItem = typeof orderableSliceGroups["link"]["initialItem"] & IID;

type CourseItem = typeof orderableSliceGroups["course"]["initialItem"] & IID;

type ReferenceItem = typeof orderableSliceGroups["reference"]["initialItem"] & IID;

export interface IResumeTemplateProps {
    state: RootState;
    Layout: React.FC<LayoutProps>;
    Header: React.FC<ContactDetailsProps>;
    ContactDetails: React.FC<ContactDetailsProps>;
    Description: React.FC<DescriptionProps>;
    WorkExperience: React.FC<ItemsContainerProps<WorkExperienceItem>>;
    Education: React.FC<ItemsContainerProps<EducationItem>>;
    Link: React.FC<ItemsContainerProps<LinkItem>>;
    Skill: React.FC<ItemsContainerProps<SkillItem>>;
    Course: React.FC<ItemsContainerProps<CourseItem>>;
    Reference: React.FC<ItemsContainerProps<ReferenceItem>>;
    style?: Style;
}

export const ResumeTemplate: React.FC<IResumeTemplateProps> = ({ 
    state,
    Layout,
    Header,
    ContactDetails,
    Description,
    WorkExperience,
    Education,
    Link,
    Skill,
    Course,
    Reference,
    style
}) => {

    const { "contact-details": contactDetails } = state;

    const contactDetailsDependency = JSON.stringify(contactDetails);

    const contactDetailsProps = {
        sectionName: contactDetails.sectionName,
        ...contactDetails.fields,
    };

    const ContactDetailsWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        return (
            <View style={style}>
                <ContactDetails {...contactDetailsProps}/>
            </View>
        );
    /* eslint-disable */
    }, [contactDetailsDependency]);
    /* eslint-enable */

    const HeaderWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        return (
            <View style={style}>
                <Header {...contactDetailsProps}/>
            </View>
        );
    /* eslint-disable */
    }, [contactDetailsDependency]);
    /* eslint-enable */
    


    const { "professional-experience": professionalExperience  } = state;

    const professionalExperienceDependency = JSON.stringify(professionalExperience);

    const ProfessionalExperienceWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        return (
            <View style={style}>
                <Description {...professionalExperience}/>
            </View>
        );
    /* eslint-disable */
    }, [professionalExperienceDependency]); 
    /* eslint-enable */
    


    const { hobbies } = state;

    const hobbiesDependency = JSON.stringify(hobbies);

    const HobbiesWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        return (
            <View style={style}>
                <Description {...hobbies}/>
            </View>
        );
    /* eslint-disable */
    }, [hobbiesDependency]); 
    /* eslint-enable */
    


    const { "work-experience": workExperience } = state;

    const workExperienceDependency = JSON.stringify(workExperience);

    const WorkExperienceWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        const { sectionName } = workExperience;

        const items = withId(workExperience.items);

        return (
            <View style={style}>
                <WorkExperience
                sectionName={sectionName}
                Items={({ style, children }) => (
                    <View style={style}>
                        {items.map(children)}
                    </View>
                )}/>
            </View>
        );
    /* eslint-disable */
    }, [workExperienceDependency]);
    /* eslint-enable */
    


    const { "extra-activity": extraActivity } = state;

    const extraActivityDependency = JSON.stringify(extraActivity);

    const ExtraActivityWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        const { sectionName } = extraActivity;

        const items = withId(extraActivity.items);

        return (
            <View style={style}>
                <WorkExperience
                sectionName={sectionName}
                Items={({ style, children }) => (
                    <View style={style}>
                        {items.map(children)}
                    </View>
                )}/>
            </View>
        );
    /* eslint-disable */
    }, [extraActivityDependency]);
    /* eslint-enable */
    



    const { internship } = state;

    const internshipDependency = JSON.stringify(internship);

    const InternshipWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        const { sectionName } = internship;

        const items = withId(internship.items);

        return (           
            <View style={style}>
                <WorkExperience
                sectionName={sectionName}
                Items={({ style, children }) => (
                    <View style={style}>
                        {items.map(children)}
                    </View>
                )}/>
            </View>
        );
    /* eslint-disable */
    }, [internshipDependency]);
    /* eslint-enable */
    


    const { education } = state;

    const educationDependency = JSON.stringify(education);

    const EducationWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        const { sectionName } = education;

        const items = withId(education.items);

        return (
            <View style={style}>
                <Education
                sectionName={sectionName}
                Items={({ style, children }) => (
                    <View style={style}>
                        {items.map(children)}
                    </View>
                )}/>
            </View>
        );
    /* eslint-disable */
    }, [educationDependency]);
    /* eslint-enable */
    


    const { link } = state;

    const linkDependency = JSON.stringify(link);

    const LinkWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        const { sectionName } = link;

        const items = withId(link.items);

        return (
            <View style={style}>
                <Link
                sectionName={sectionName}
                Items={({ style, children }) => (
                    <View style={style}>
                        {items.map(children)}
                    </View>
                )}/>
            </View>
        );
    /* eslint-disable */
    }, [linkDependency]);
    /* eslint-enable */
    


    const { skill } = state;

    const skillDependency = JSON.stringify(skill);

    const SkillWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        const { sectionName } = skill;

        const items = withId(skill.items);

        return (
            <View style={style}>
                <Skill
                sectionName={sectionName}
                Items={({ style, children }) => ( 
                    <View style={style}>
                        {items.map(children)}
                    </View>
                )}/>
            </View>
        );
    /* eslint-disable */
    }, [skillDependency]);
    /* eslint-enable */
    


    const { language } = state;

    const languageDependency = JSON.stringify(language);

    const LanguageWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        const { sectionName } = language;

        const items = withId(language.items);

        return (
            <View style={style}>
                <Skill
                sectionName={sectionName}
                Items={({ style, children }) => ( 
                    <View style={style}>
                        {items.map(children)}
                    </View>
                )}/>
            </View>
        );
    /* eslint-disable */
    }, [languageDependency]);
    /* eslint-enable */
    


    const { course } = state;

    const courseDependency = JSON.stringify(course);

    const CourseWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        const { sectionName } = course;

        const items = withId(course.items);

        return (
            <View style={style}>
                <Course
                sectionName={sectionName}
                Items={({ style, children }) => ( 
                    <View style={style}>
                        {items.map(children)}
                    </View>
                )}/>
            </View>
        );
    /* eslint-disable */
    }, [courseDependency]);
    /* eslint-enable */
    


    const { reference } = state;

    const referenceDependency = JSON.stringify(reference);

    const ReferenceWrapper = useCallback<React.FC<StyleProp>>(({ style }) => {

        const { sectionName } = reference;

        const items = withId(reference.items);

        return (
            <View style={style}>
                <Reference
                sectionName={sectionName}
                Items={({ style, children }) => ( 
                    <View style={style}>
                        {items.map(children)}
                    </View>
                )}/>
            </View>
        );
    /* eslint-disable */
    }, [referenceDependency]);
    /* eslint-enable */
    


    const { "section-order": sectionOrder } = state;

    const sectionOrderDependency = JSON.stringify(sectionOrder);

    type OrderableMaping = {
        [K in OrderableSliceGroupNames]: React.FC<StyleProp>;
    }

    const orderalbeMaping: OrderableMaping = {
        hobbies: HobbiesWrapper,
        "work-experience": WorkExperienceWrapper, 
        education: EducationWrapper, 
        link: LinkWrapper, 
        skill: SkillWrapper, 
        course: CourseWrapper, 
        reference: ReferenceWrapper, 
        "extra-activity": ExtraActivityWrapper,
        internship: InternshipWrapper,
        language: LanguageWrapper
    }

    const OrderableWrapper = useCallback<React.FC<OrderableProps>>(({ sections = sectionOrder.items, containerStyle, sectionStyle }) => {

        const filteredSectionOrder = sectionOrder.items.filter(sectionName => sections.includes(sectionName));

        return (
            <View style={containerStyle}>
                {filteredSectionOrder.map((sectionName, index) => {

                    const OrderableSection = orderalbeMaping[sectionName];

                    if (typeof sectionStyle === "function") {

                        sectionStyle = sectionStyle(index);
                    }

                    return  (
                        <OrderableSection 
                        key={sectionName}
                        style={sectionStyle}/>
                    );
                })}
            </View>
        );
    /* eslint-disable */
    }, [sectionOrderDependency]);
    /* eslint-enable */
    
    return (
        <Document>
            <Page 
            style={style}
            size="A4">
                <Layout
                Header={HeaderWrapper}
                Orderable={OrderableWrapper}
                ContactDetails={ContactDetailsWrapper}
                ProfessionalExperience={ProfessionalExperienceWrapper}/>
            </Page>
        </Document>  
    );
}
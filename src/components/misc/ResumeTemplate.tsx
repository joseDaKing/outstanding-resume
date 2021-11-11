import React from "react";

import { Get, PascalCase, Simplify } from "type-fest";

import ReactPDF, { Document, Page, View } from "@react-pdf/renderer";

import { contactDetails } from "../../store/slices/fixedSections/contactDetails";

import { OrderableSliceGroupNames, orderableSliceGroups } from "../../store/slices/orderableSections";

import { useAppSelector } from "../../store";

import { withId } from "../../utilities";



type Style = Exclude<ReactPDF.ViewProps["style"], undefined>;

type StyleProp = {
    style?: Style;
}

type OrderableProps = {
    sections?: Array<OrderableSliceGroupNames>;
    containerStyle?: Style;
    sectionStyle?: Style;
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

type ItemsProps<T> = {
    style?: Style;
    children: (item: T) => JSX.Element;
}

type ItemsContainerProps<T> = {
    sectionName: string;
    Items: React.FC<ItemsProps<T>>;
}

type ResumeTemplateProps = Simplify<{
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

type ItemsComponents = {
    [K in ItemsSliceGroupNames]: React.FC<ItemsProps<(typeof orderableSliceGroups)[K]["initialItem"]>>
}

const itemsComponents: ItemsComponents = {
    "work-experience": createItems("work-experience"),
    internship: createItems("internship"),
    "extra-activity": createItems("extra-activity"),
    education: createItems("education"),
    link: createItems("link"),
    skill: createItems("skill"),
    course: createItems("course"),
    language: createItems("language"),
    reference: createItems("reference"),
}

export const ResumeTemplate: React.FC<ResumeTemplateProps> = ({
    Layout,
    Header,
    ContactDetails,
    Description,
    ...ItemComponents
}) => {
    
    const HeaderWrapper: React.FC<StyleProp> = ({ style }) => {

        const headerProps = useAppSelector(store => {

            const { 
                fields: {
                    firstName, 
                    lastName,
                    jobTitle
                } 
            } = store["contact-details"];

            return {
                firstName,
                lastName,
                jobTitle
            }
        });

        return (
            <View style={style}>
                <Header {...headerProps}/>
            </View>
        );
    }

    const ContactDetailsWrapper: React.FC<StyleProp> = ({ style }) => {

        const contactDetailsProps = useAppSelector(store => {
            const {
                sectionName,
                fields: {
                    firstName,
                    lastName,
                    jobTitle,
                    ...rest
                }
            } = store["contact-details"];

            return {
                ...rest,
                sectionName
            }
        });

        return (
            <View style={style}>
                <ContactDetails {...contactDetailsProps}/>
            </View>
        );
    }

    const ProfessionalExperienceWrapper: React.FC<StyleProp> = ({ style }) => {

        const professionalExperienceProps = useAppSelector(store => store["professional-experience"]);

        return (
            <View style={style}>
                <Description {...professionalExperienceProps}/>
            </View>
        );
    }

    const HobbiesWrapper: React.FC<StyleProp> = ({ style }) => {

        const hobbiesWrapper = useAppSelector(store => store["hobbies"]);

        return (
            <View style={style}>
                <Description {...hobbiesWrapper}/>
            </View>
        );
    }

    type ItemsContainerComponents = {
        [K in ItemsSliceGroupNames]: Get<typeof ItemComponents, PascalCase<K>>;
    }

    const itemsContainerComponents: ItemsContainerComponents = {
        "work-experience": ItemComponents.WorkExperience,
        internship: ItemComponents.WorkExperience,
        "extra-activity": ItemComponents.WorkExperience,
        education: ItemComponents.Education,
        link: ItemComponents.Link,
        skill: ItemComponents.Skill,
        course: ItemComponents.Course,
        language: ItemComponents.Language,
        reference: ItemComponents.Reference
    }

    function createItemsContainer<T extends ItemsSliceGroupNames>(type: T): React.FC {

        return () => {

            const sectionName = useAppSelector(store => {
            
                const { sectionName } = store[type];
    
                return sectionName
            });
    
            const Items = itemsComponents[type];
    
            const Component = itemsContainerComponents[type] as any;
    
            return (
                <Component 
                Items={Items}
                sectionName={sectionName}/>
            );
        }
    }

    type ItemsContainerWrapperComponents = {
        [K in ItemsSliceGroupNames]: React.FC;
    }

    const itemsContainerWrapperComponents: ItemsContainerWrapperComponents = {
        "work-experience": createItemsContainer("work-experience"),
        internship: createItemsContainer("internship"),
        "extra-activity": createItemsContainer("extra-activity"),
        education: createItemsContainer("education"),
        link: createItemsContainer("link"),
        skill: createItemsContainer("skill"),
        course: createItemsContainer("course"),
        language: createItemsContainer("language"),
        reference: createItemsContainer("reference")
    };

    const Orderable: React.FC<OrderableProps> = ({ sections, sectionStyle, containerStyle }) => {

        const sectionOrder = useAppSelector(store => store["section-order"].items);

        if (!sections) {

            sections = sectionOrder;
        }

        const sectionsToRender = sections.filter(section => sectionOrder.includes(section));

        return (
            <>
                {sectionsToRender.length &&
                <View style={containerStyle}>
                    {sectionsToRender.map(section => {

                        if (section === "hobbies") {

                            return <HobbiesWrapper/>;
                        }

                        const ItemsContainerWrapper = itemsContainerWrapperComponents[section];

                        return <ItemsContainerWrapper/>
                    })}
                </View>}
            </>
        );
    }

    return (
        <Document>
            <Page>
                <Layout
                Header={HeaderWrapper}
                ContactDetails={ContactDetailsWrapper}
                ProfessionalExperience={ProfessionalExperienceWrapper}
                Orderable={Orderable}/>
            </Page>
        </Document>
    );
}

type ItemsSliceGroupNames = Exclude<OrderableSliceGroupNames, "hobbies">;

type InitialItem<T extends ItemsSliceGroupNames> = (typeof orderableSliceGroups)[T]["initialItem"];

function createItems<T extends ItemsSliceGroupNames>(type: T): React.FC<ItemsProps<InitialItem<T>>> {

    return ({ style, children }) => {

        const items = useAppSelector(store => {
            
            const { items } = store[type];

            return withId(items as any);
        });

        return (
            <View 
            style={style}>
                {items.map(item => (
                    <>
                        {children(item as any)}
                    </>
                ))}
            </View>
        );
    }
}
import React from "react";

import { OrderableProps, StyleProp, useResumeTemplateContext} from "./shared";

import { View } from "@react-pdf/renderer";

import { Sections } from "./Sections";

import { HobbiesWrapper } from "./HobbiesWrapper";

import { OrderableSliceGroupNames } from "../../../store/slices/orderableSections";

type OrderableSectionProps = StyleProp & {
    index: number;
    sectionName: OrderableSliceGroupNames;
}

const OrderableSection: React.FC<OrderableSectionProps> = ({ sectionName, index, style }) => {

    if (sectionName === "hobbies") {

        return (
            <View style={style}>
                <HobbiesWrapper/>
            </View>
        );
    }

    const Section = Sections[sectionName];

    return (
        <View style={style}>
            <Section/>
        </View>
    );
}

export const Orderable: React.FC<OrderableProps> = ({ sections, sectionStyle, containerStyle }) => {

    const { state } = useResumeTemplateContext();

    const sectionOrder = state["section-order"].items;

    if (!sections) {

        sections = sectionOrder;
    }

    const sectionNamesToRender = sections.filter(sectionName => sectionOrder.includes(sectionName));

    return (
        <>
            {sectionNamesToRender.length &&
            <View style={containerStyle}>
                {sectionNamesToRender.map((sectionName, index) => {

                    if (typeof sectionStyle === "function") {

                        sectionStyle = sectionStyle(index);
                    }

                    return (
                        <OrderableSection
                        index={index}
                        style={sectionStyle}
                        sectionName={sectionName}/>
                    );
                })}
            </View>}
        </>
    );
}
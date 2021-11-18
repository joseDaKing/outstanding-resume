import React from "react";

import { IResumeTemplateProps } from "../../../components/misc";

import { SectionTitle, Link as LinkComponent } from "../components";

export const Link: IResumeTemplateProps["Link"] = ({ 
    sectionName, 
    Items 
}) => {
    return (
        <>
            <SectionTitle
            gutter="sm">
                {sectionName}
            </SectionTitle>

            <Items>
                {({ id, url, label }) => (
                    <LinkComponent
                    key={id}
                    url={url}>
                        {label}
                    </LinkComponent>
                )}
            </Items>
        </>
    );
}
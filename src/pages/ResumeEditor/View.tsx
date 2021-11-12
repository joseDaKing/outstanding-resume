import React from "react";

import { useDebouncedValue } from "rooks";

import { useAppSelector } from "../../store";

import { PDFView } from "../../components/misc";

import { WienResumeTemplate } from "../../resumeTemplates";

export const View: React.FC = () => {

    const store = useAppSelector(store => store); 

    const [ debouncedStore ] = useDebouncedValue(store, 750);

    const debouncedStoreWithDefault = debouncedStore || store;

    return (
        <PDFView
        change={[JSON.stringify(debouncedStoreWithDefault)]}
        document={<WienResumeTemplate {...store}/>}/>
    );
}
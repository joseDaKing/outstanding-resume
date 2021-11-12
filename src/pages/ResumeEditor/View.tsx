import React from "react";

import { useAppSelector } from "../../store";

import { PDFView } from "../../components/misc";

import { WienResumeTemplate } from "../../resumeTemplates";

import { useDebouncedValue } from "rooks";

export const View: React.FC = () => {

    const initialStore = useAppSelector(store => store); 

    const [debouncedStore] = useDebouncedValue(initialStore, 750);

    const store = debouncedStore ?? initialStore

    return (
        <PDFView
        changes={[JSON.stringify(store)]}
        document={<WienResumeTemplate {...store}/>}/>
    );
}
import React, { useMemo } from "react";

import { useDebouncedValue } from "rooks";

import { PDFView } from "../../components/misc";

import { Berlin } from "../../resumes";

import { useAppSelector } from "../../store";

export const View: React.FC = () => {

    const store = useAppSelector(store => store);

    const [debouncedStore] = useDebouncedValue(store, 1000, {
        initializeWithNull: false
    });

    const template = useMemo(() => {
        return <Berlin {...(debouncedStore as any)}/>
    }, [JSON.stringify(debouncedStore)]);

    return (
        <PDFView
        document={template}/>
    );
}
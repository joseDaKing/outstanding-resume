import { pdf, } from "@react-pdf/renderer";

import React, { useEffect, useMemo, useState } from "react";

import { RootState } from "state";

import { courses, education, extraActivities, interships, links, references, skills, workExperience } from "state/slices";

import { useDebounce } from "use-debounce";



export function usePDFLink(state: RootState, Document: React.FC<RootState>) {

    const [ debouncedState ] = useDebounce(state, 600, {
        equalityFn: (previous, next) => JSON.stringify(previous) === JSON.stringify(next)
    });

    const cleanedState = cleanState(debouncedState);

    const dependency = JSON.stringify(cleanedState);

    /* eslint-disable */
    const urlPromise = useMemo(async () => {

        const doc = pdf(<Document {...cleanedState}/>);

        const blob = await doc.toBlob();

        const url = URL.createObjectURL(blob);

        return url;
    }, [ 
        JSON.stringify(cleanedState),
        Document 
    ]);
    /* eslint-enable */

    const [ url, setUrl ] = useState<string|null>(null);

    /* eslint-disable */
    useEffect(() => {

        (async () => setUrl(await urlPromise))()

    }, [
        dependency,
        debouncedState
    ]);
    /* eslint-enable */

    return url;
}

function cleanState(state: RootState): RootState {

    const newState: RootState = JSON.parse(JSON.stringify(state));

    newState.workExperience.items = state.workExperience.items.filter(({ jobTitle }) => !!jobTitle);

    if (newState.workExperience.items.length === 0) {

        newState.sections.items = newState.sections.items.filter(section => section !== workExperience.name);
    }
    
    newState.education.items = state.education.items.filter(({ exam }) => !!exam)

    if (newState.education.items.length === 0) {

        newState.sections.items = newState.sections.items.filter(section => section !== education.name);
    }

    newState.links.items = state.links.items.filter(({ label, url }) => !!url && !!label);

    if (newState.links.items.length === 0) {

        newState.sections.items = newState.sections.items.filter(section => section !== links.name);
    }

    newState.skills.items = state.skills.items.filter(({ name }) => !!name);

    if (newState.skills.items.length === 0) {

        newState.skills.isHidingLevel = false;

        newState.sections.items = newState.sections.items.filter(section => section !== skills.name);
    }

    newState.extraActivities.items = state.extraActivities.items.filter(({ jobTitle }) => !!jobTitle);

    if (newState.extraActivities.items.length === 0) {

        newState.sections.items = newState.sections.items.filter(section => section !== extraActivities.name);
    }

    newState.references.items = state.references.items.filter(({ nameOfTheReferenced }) => !!nameOfTheReferenced);

    if (newState.references.items.length === 0) {

        newState.references.isHidingReferences = false;

        newState.sections.items = newState.sections.items.filter(section => section !== references.name);
    }

    newState.courses.items = state.courses.items.filter(({ name }) => !!name);

    if (newState.courses.items.length === 0) {

        newState.sections.items = newState.sections.items.filter(section => section !== courses.name);
    }

    newState.interships.items = state.extraActivities.items.filter(({ jobTitle }) => !!jobTitle);

    if (newState.interships.items.length === 0) {

        newState.sections.items = newState.sections.items.filter(section => section !== interships.name);
    }

    return newState;
}
import { pdf, } from "@react-pdf/renderer";

import React, { useEffect, useMemo, useState } from "react";

import { RootState } from "state";

import { useDebounce } from "use-debounce";



export function usePDFLink(state: RootState, Document: React.FC<RootState>) {

    const [ debouncedState ] = useDebounce(state, 600, {
        equalityFn: (previous, next) => JSON.stringify(previous) === JSON.stringify(next)
    });  

    /* eslint-disable */
    const urlPromise = useMemo(async () => {

        const doc = pdf(<Document {...debouncedState}/>);

        const blob = await doc.toBlob();

        const url = URL.createObjectURL(blob);

        return url;
    }, [ 
        JSON.stringify(debouncedState), 
        Document 
    ]);
    /* eslint-enable */

    const [ url, setUrl ] = useState<string|null>(null);

    /* eslint-disable */
    useEffect(() => {

        (async () => setUrl(await urlPromise))()

    }, [debouncedState]);
    /* eslint-enable */

    return url;
}
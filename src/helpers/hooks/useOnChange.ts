import { useEffect, useRef } from "react";



type OnChangeCB = () => (void | (() => void));

export function useOnChange(cb: OnChangeCB, dependencies: any[]) {

    const isMountedRef = useRef(false);

    /* eslint-disable */
    useEffect(() => {

        if (isMountedRef.current) {

            const unmountCB = cb();

            if (unmountCB) {

                return unmountCB;
            }
        }

        isMountedRef.current = true;
    }, dependencies);
    /* eslint-enable */
}
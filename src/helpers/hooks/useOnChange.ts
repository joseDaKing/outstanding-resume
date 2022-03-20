import { useEffect, useRef } from "react";



type OnChangeCB = () => (void | (() => void));

export function useOnChange(cb: OnChangeCB, dependencies: string[]) {

    const isMountedRef = useRef(false);

    useEffect(() => {

        if (isMountedRef.current) {

            const unmountCB = cb();

            if (unmountCB) {

                return unmountCB;
            }
        }

        isMountedRef.current = true;
    }, dependencies);
}
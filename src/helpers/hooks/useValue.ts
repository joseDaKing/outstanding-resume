import { useState } from "react";

import { useOnChange } from "./useOnChange";



export type UseValueConfig<T> = {
    initialValue: T;
    value?: T;
    defaultValue?: T;
    onValueChange?: (value: T) => void;
}

export type UseValueSetStateAction<T> = (value: T) => T;

export type UseValueSetState<T> = (value: T | UseValueSetStateAction<T>) => void;

export type UseValueState<T> = [ T, UseValueSetState<T> ];

export function useValue<T>({ 
    initialValue,
    defaultValue,
    value,
    onValueChange = () => {} 
}: UseValueConfig<T>): UseValueState<T> {

    const [internalState, setInternalState] = useState(value ?? defaultValue ?? initialValue);

    useOnChange(() => {

        if (value) {

            setInternalState(value);
        }
    }, [
        JSON.stringify(value)
    ]);

    useOnChange(() => {
        
        if (!value && onValueChange) {

            onValueChange(internalState);
        }
    }, [
        JSON.stringify(internalState)
    ]);

    return [
        internalState,
        (state) => {

            if (value) {

                if (typeof state === "function") {

                    onValueChange((state as UseValueSetStateAction<T>)(value))
                }
                else {

                    onValueChange(value);
                }
            }
            else {

                if (typeof state === "function") {

                    setInternalState(prevState => (state as UseValueSetStateAction<T>)(prevState))
                }
                else {

                    setInternalState(state);
                }
            }
        }
    ];
}
import React from "react";

export interface IPaginatorListeners {
    onNext: () => void;
    onPrev: () => void;
}

interface IPaginatorProps extends IPaginatorListeners {
    numberOfPages: number;
    currentPageNumber: number;
}

export const Paginator: React.FC<IPaginatorProps> = ({ 
    onNext, 
    onPrev, 
    numberOfPages, 
    currentPageNumber
}) => {

    return (
        <>
        </>
    );
}
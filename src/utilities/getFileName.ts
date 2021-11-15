import { RootState } from "../store";

export const getFileName = (store: RootState) => {

    const { firstName, lastName } = store["contact-details"].fields;

    let fileName = "resume";

    if (firstName && lastName) {

        fileName = `${firstName}_${lastName}`;
    }
    else if (firstName) {

        fileName = `${firstName}`;
    }
    else if (lastName) {

        fileName = `${lastName}`;
    }

    return fileName;
}
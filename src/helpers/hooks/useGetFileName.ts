import { useAppSelector } from "state";



export const useGetFileName = () => {

    let firstName = useAppSelector(state => state.contactInformation.firstName);

    firstName = firstName.toLowerCase();

    let lastName = useAppSelector(state => state.contactInformation.lastName);

    lastName = lastName.toLowerCase();

    let downloadName = "cv";

    if (firstName && lastName) {

        downloadName = `${firstName}_${lastName}_cv`;
    }
    else if (firstName) {
        
        downloadName = `${firstName}_cv`;
    }
    else if (lastName) {

        downloadName = `${lastName}_cv`;
    }

    return downloadName;
}
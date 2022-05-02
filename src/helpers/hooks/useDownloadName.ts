import { useAppSelector } from "state";



export const useDownloadName = () => {

    let firstName = useAppSelector(state => state.contactInformation.firstName);

    firstName = firstName.toLowerCase();

    let lastName = useAppSelector(state => state.contactInformation.lastName);

    lastName = lastName.toLowerCase();

    let downloadName = "resume";

    if (firstName && lastName) {

        downloadName = `${firstName}_${lastName}_${downloadName}`;
    }
    else if (firstName) {
        
        downloadName = `${firstName}_${downloadName}`;
    }
    else if (lastName) {

        downloadName = `${lastName}_${downloadName}`;
    }

    return downloadName;
}
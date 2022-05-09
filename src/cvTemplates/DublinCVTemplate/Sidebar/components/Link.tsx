import { Link } from "@react-pdf/renderer";

import { montserratFont } from "assets/pdfFonts";



type LinkProps = {
    url: string;
}

const MyLink: React.FC<LinkProps> = props => {

    return (
        <Link
        src={props.url}
        style={{
            fontSize: "10pt",
            color: "white",
            fontFamily: montserratFont
        }}>
            {props.children}
        </Link>
    );
}

export {
    MyLink as Link
}
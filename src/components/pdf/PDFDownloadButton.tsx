import { IconProps } from "types";

import { Button, ButtonProps } from "../form";

import { useRef } from "react";

import { DownloadIcon } from "@radix-ui/react-icons";

import { RootState } from "state";

import { usePDFLink } from "helpers";



type PDFDownloadButtonProps = Omit<ButtonProps, keyof IconProps> & {
    downloadName: string;
    Document: React.FC<RootState>;
    state: RootState;
};

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = props => {

    const {
        downloadName,
        Document: PDFDocument,
        state,
        ...htmlProps
    } = props;

    const url = usePDFLink(props.state, props.Document);

    const ref = useRef<HTMLAnchorElement|null>(null);

    const onClickHandler = async () => {

        if (!ref.current) return;

        ref.current.click();
    }

    return (
        <Button
        {...htmlProps}
        onClick={onClickHandler}
        EndIcon={DownloadIcon}>
            {props.children || "Ladda ner (pdf)"}

            {url &&
            <a
            href={url}
            download={downloadName}
            ref={ref}
            style={{
                display: "none"
            }}>
                {props.children || "Ladda ner (pdf)"}
            </a>}
        </Button>
    );
}
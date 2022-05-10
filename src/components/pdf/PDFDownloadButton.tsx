import { IconProps } from "types";

import { Button, ButtonProps } from "../form";

import { useRef } from "react";

import { DownloadIcon } from "@radix-ui/react-icons";



type PDFDownloadButtonProps = Omit<ButtonProps, keyof IconProps> & {
    downloadName: string;
    src: string;
};

export const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = props => {

    const { downloadName, src, ...htmlProps } = props;

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
            {props.children || "Download (PDF)"}

            {src &&
            <a
            href={src}
            download={downloadName}
            ref={ref}
            style={{
                display: "none"
            }}>
                {props.children || "Download (PDF)"}
            </a>}
        </Button>
    );
}
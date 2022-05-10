import { Box } from "components/layout";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";

import { useAppSelector } from "state";

import { useDispatch } from "react-redux";

import { resume } from "state/slices";



type PDFTemplatePreviewProps = {
    src: string;
    name: string;
}

export const PDFTemplatePreview: React.FC<PDFTemplatePreviewProps> = props => {

    const dispatch = useDispatch();

    const active = useAppSelector(store => store.resume.name);

    const isActive = active === props.name;

    return (
        <Box
        css={{
            width: "$40"
        }}>
            <AspectRatio
            ratio={1 / Math.SQRT2}>
                <Box
                onClick={() => {
                    dispatch(resume.actions.setResumeTemplate(props.name as any))
                }}
                css={{
                    cursor: "pointer",
                    size: "100%",
                    borderRadius: "$sm",
                    overflow: "hidden",
                    outlineStyle: "solid",
                    outlineWidth: "$4",
                    outlineColor: isActive ? "$primary9" : "$neutral7"
                }}>
                    <img
                    alt="resume template"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center"
                    }}
                    src={props.src}/>
                </Box>
            </AspectRatio>
        </Box>
    );
}
import { Stack, Box } from "components/layout";

import { Button } from "components/form";

import {
    Pencil1Icon, 
    TrashIcon,
    AvatarIcon, 
    UploadIcon
}
from "@radix-ui/react-icons";

import { useValue, UseValueProps } from "helpers";

import { stitches } from "stitches";

import { useRef } from "react";



const ImageUploadInput = stitches.styled("input", {
    height: 0,
    width: 0,
    inset: 0,
    margin: 0,
    padding: 0,
    appearance: "none",
    cursor: "pointer",
    overflow: "hidden",
    position: "absolute"
});

type ImageUploadState = string;

type ImageUploadProps = UseValueProps<ImageUploadState>

const acceptableFiles = [
    "jpg",
    "jpeg",
    "png"
]
.map(extension => `image/${extension}`)
.join(",")

console.log(acceptableFiles);

export const ImageUpload: React.FC<ImageUploadProps> = props => {

    const [ image, setImage ] = useValue({
        initialValue: "",
        value: props.value,
        defaultValue: props.defaultValue,
        onValueChange: props.onValueChange
    });

    const hasUploaded = !!image;

    const imageUploadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {

        if (!event.currentTarget.files || event.currentTarget.files.length === 0) {

            return;
        }

        const blob = event.currentTarget.files[0];

        const src = URL.createObjectURL(blob);

        setImage(src);
    } 

    const inputRef = useRef<HTMLInputElement|null>(null);

    return (
        <Stack
        onClick={() => { 
            
            if (hasUploaded || !inputRef.current) {

                return;
            }

            inputRef.current.click();
        }}
        alignMain="start"
        css={{
            gap: "$2",
            cursor: "pointer",
            position: "relative",
            padding: "$3",
            borderWidth: "$2",
            borderColor: "$primary8",
            borderStyle: "dashed",
            borderRadius: "$sm",
            transition: "$200",
            transitionProperty: "color",
            hover: {
                borderColor: "$primary10",
                backgroundColor: "$primary2"
            },
            focusWithin: {
                borderColor: "$primary10",
                backgroundColor: "$primary2"
            }
        }}>

            <ImageUploadInput
            accept={acceptableFiles}
            type="file"
            ref={inputRef}
            key={image}
            onChange={imageUploadHandler}/>

            {!hasUploaded &&
            <>
                <Stack
                css={{
                    size: "$16",
                    borderRadius: "$sm",
                    backgroundColor: "$primary5",
                    "svg": {
                        color: "$primary10",
                        margin: "auto",
                        size: "75%"
                    }
                }}>
                    <AvatarIcon/>
                </Stack>

                <Button
                tabIndex={-1}
                css={{
                    focus: {
                        outline: "none !important"
                    },
                    hover: {
                        backgroundColor: "transparent !important"
                    }
                }}
                onMouseEnter={e => e.preventDefault()}
                size="sm"
                variant="text"
                StartIcon={UploadIcon}>
                    Upload
                </Button>
            </>}

            {hasUploaded &&
            <>
                <Box
                css={{
                    size: "$16",
                    borderRadius: "$sm",
                    overflow: "hidden"
                }}>

                    <Box
                    as="img"
                    alt="Portrait image"
                    src={image}
                    css={{
                        display: "block",
                        size: "$full",
                        objectFit: "cover",
                        objectPosition: "center"
                    }}/>
                </Box>

                <Stack
                orientation="vertical"
                alignCross="start"
                css={{
                    gap: "$2",
                }}>
                    <Button
                    onClick={() => {

                        if (!inputRef.current) {
                            
                            return;
                        }

                        inputRef.current.click()
                    }}
                    css={{
                        position: "relative"
                    }}
                    StartIcon={Pencil1Icon}
                    size="sm"
                    variant="text">
                        Edit
                    </Button>
                    
                    <Button
                    onClick={() => setImage("")}
                    StartIcon={TrashIcon}
                    color="danger"
                    size="sm"
                    variant="text">
                        Remove
                    </Button>
                </Stack>
            </>}
        </Stack>
    );
}
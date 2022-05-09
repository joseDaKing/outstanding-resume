import { RootState } from "state";

import { 
    View,
    Image
}
from "@react-pdf/renderer";

import { 
    Title,
    SubTitle
}
from "./components";



export const Header: React.FC<RootState["contactInformation"]> = state => {

    return (
        <>
            {(
                !!state.firstName
                || !!state.lastName
                || !!state.jobTitle
            ) &&
            <View
            break={false}>
                <View
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}>
                    {!!state.imageUrl &&
                    <>
                        <View
                        style={{
                            width: "54pt",
                            height: "54pt",
                            overflow: "hidden",
                            borderRadius: "100%",
                        }}>
                            <Image
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                objectPosition: "center"
                            }}
                            src={state.imageUrl}/>
                        </View>

                        <View
                        style={{
                            marginTop: "16"
                        }}/>
                    </>}
                    
                    {!!state.firstName &&
                    <Title>
                        {state.firstName}
                    </Title>}

                    {!!state.lastName &&
                    <Title>
                        {state.lastName}
                    </Title>}

                    {(
                        !!state.firstName
                        || !!state.lastName
                        || !!state.jobTitle
                    ) &&
                    <>
                        <View
                        style={{
                            marginTop: "16"
                        }}/>
                        
                        <View
                        style={{
                            width: "16pt",
                            height: "2pt",
                            opacity: 0.35,
                            backgroundColor: "white"
                        }}/>

                        <View
                        style={{
                            marginTop: "16"
                        }}/>
                    </>}

                    {!!state.jobTitle &&
                    <SubTitle>
                        {state.jobTitle.toUpperCase()}    
                    </SubTitle>}
                </View>
            </View>}
        </>
    );
}
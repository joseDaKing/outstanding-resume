import { RootState } from "state";

import { View } from "@react-pdf/renderer";

import { SectionTitle, Title, Text } from "../components";



export const ContactInformation: React.FC<RootState["contactInformation"]> = state => {

    return (
        <>
            {(
                !!state.driverLicense
                || !!state.nationality
                || !!state.birthDate
                || !!state.birthPlace
            ) &&
            <View
            wrap={false}
            style={{
                paddingVertical: "17pt",
            }}>
                {!!state.sectionTitle &&
                <SectionTitle>
                    {state.sectionTitle}
                </SectionTitle>}

                {(
                    !!state.driverLicense
                    || !!state.nationality
                ) &&
                <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                }}>
                    {!!state.driverLicense &&
                    <View
                    style={{
                        width: "50%"
                    }}>
                        <Title>
                            Driving license
                        </Title>

                        <Text>
                            {state.driverLicense}
                        </Text>
                    </View>}

                    {!!state.nationality &&
                    <View
                    style={{
                        width: "50%"
                    }}>
                        <Title>
                            Nationality
                        </Title>

                        <Text>
                            {state.nationality}
                        </Text>
                    </View>}
                </View>}
                
                <View
                style={{
                    marginBottom: "16pt"
                }}/>

                {(
                    !!state.birthDate
                    || !!state.birthPlace
                ) &&
                <View
                style={{
                    width: "50%"
                }}>
                    <Title>
                        {`${!!state.birthDate ? "Birthdate" : ""} ${state.birthDate && state.birthPlace ? "/" : ""} ${!!state.birthPlace ? "Birthplace" : ""}`}
                    </Title>

                    {!!state.birthDate &&
                    <>
                        <View
                        style={{
                            marginBottom: "2pt"
                        }}/>
                        
                        <Text>
                            {state.birthDate}
                        </Text>
                    </>}

                    {!!state.birthPlace &&
                    <>
                        <View
                        style={{
                            marginBottom: "2pt"
                        }}/>
                        
                        <Text>
                            {state.birthPlace}
                        </Text>
                    </>}
                </View>}
            </View>}
        </>
    );
}
import { RootState } from "state";

import { View } from "@react-pdf/renderer";

import { Link, SectionTitle } from "../components";



export const Links: React.FC<RootState["links"]> = ({ items, sectionTitle }) => {

    const filteredItems = items.filter(({ url }) => !!url);

    return (
        <>
            {filteredItems.length !== 0 &&
            <View
            wrap={false}
            style={{
                paddingVertical: "17pt",
            }}>
                
                {!!sectionTitle &&
                <SectionTitle>
                    {sectionTitle}
                </SectionTitle>}
                
                <View
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    flexWrap: "wrap",
                    marginTop: "-12pt"
                }}>
                    {filteredItems.map(item => (
                        <View
                        key={item.id}
                        style={{
                            paddingTop: "12pt",
                            paddingRight: "12pt"
                        }}>
                            <Link
                            url={item.url}>
                                {item.label}
                            </Link>
                        </View>
                    ))}
                </View>
            </View>}
        </>
    );
}

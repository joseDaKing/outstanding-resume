import { RootState } from "state";

import { View } from "@react-pdf/renderer";

import { 
    Link,
    SectionTitle
}
from "./components";



export const Links: React.FC<RootState["links"]> = state => {

    const space = (
        <View
        style={{
            marginTop: "2pt"
        }}/>
    );

    const [ firstItem, ...restItems ] = state.items;

    const renderItem = (item: typeof firstItem) => (
        <>
            {space}
            <Link
            key={item.id}
            url={item.url}>
                {item.label}
            </Link>
        </>
    )

    return (
        <>
            {state.items.length !== 0 &&
            <View>
                <View
                wrap={false}>
                    <View
                    style={{
                        marginTop: "22pt"
                    }}/>

                    <SectionTitle>
                        {state.sectionTitle}
                    </SectionTitle>

                    {firstItem && renderItem(firstItem)}
                </View>

                {restItems.map(renderItem).map(item => (
                    <View
                    wrap={false}>
                        {item}
                    </View>
                ))}
            </View>}
        </>
    );
}
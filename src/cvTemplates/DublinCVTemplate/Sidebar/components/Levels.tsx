import { View } from "@react-pdf/renderer";

import { Level } from "./Level";

import { SectionTitle } from "./SectionTitle";



type LevelsProps = {
    sectionTitle: string;
    maxLevel: number;
    hideLevel?: boolean;
    items: Array<{
        id: string;
        name: string;
        level: number;
    }>
}

export const Levels: React.FC<LevelsProps> = props => {

    const [ firstItem, ...restItems ] = props.items;

    const renderItem = (item: typeof firstItem) => {

        return (
            <Level
            key={item.id}
            label={item.name}
            maxLevel={props.maxLevel}
            level={item.level}
            hideLevel={props.hideLevel}/>
        );
    }

    return (
        <>
            <View
            wrap={false}>
                <View
                style={{
                    marginTop: "22pt"
                }}/>

                <SectionTitle>
                    {props.sectionTitle}
                </SectionTitle>

                {firstItem && renderItem(firstItem)}
            </View>

            {restItems.map(item => (
                <View
                key={item.id}>
                    {renderItem(item)}
                </View>
            ))}
        </>
    );
}
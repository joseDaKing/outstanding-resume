import { View } from "@react-pdf/renderer";

import { gorupArrayInto, ListItemType } from "helpers";

import { SectionTitle } from "./SectionTitle";

import { LevelItem } from "./LevelItem";



type LevelSectionsProps<T> = {
    sectionTitle: string;
    hideLevel?: boolean;
    maxLevel: number;
    filterItems: (item: T) => boolean;
    itemToLevel: (item: T) => {
        level: number;
        name: string;
    };
    items: T[];
}

export function LevelSections<T extends ListItemType>(props: LevelSectionsProps<T>) {
    
    const {
        hideLevel,
        sectionTitle,
        maxLevel,
        itemToLevel,
        filterItems,
        items
    } = props;

    const filteredItems = items.filter(filterItems);

    return (
        <>
            {filteredItems.length !== 0 &&
            <View
            style={{
                paddingVertical: "17pt",
            }}>
                {!!sectionTitle &&
                <SectionTitle>
                    {sectionTitle}
                </SectionTitle>}

                <View>
                    {gorupArrayInto(filteredItems, 2).map(group => (
                        <View
                        key={group.map(({ id }) => id).join("-")}
                        style={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "row",
                            margin: "8pt",
                            flexWrap: "nowrap",
                            justifyContent: "flex-start"
                        }}>
                            {group.map((item, index, array) => {

                                const { level, name } = itemToLevel(item);

                                const hasNextElement = !!array[index+1];

                                console.log(hasNextElement);

                                return (
                                    <View
                                    style={{
                                        width: "50%"
                                    }}>
                                        <View
                                        key={item.id}
                                        style={{
                                            width: "80%"
                                        }}>
                                            <LevelItem
                                            hideLevel={hideLevel}
                                            level={level}
                                            maxLevel={maxLevel}>
                                                {name}
                                            </LevelItem>
                                        </View>
                                        {hasNextElement &&
                                        <View
                                        style={{
                                            width: "40%"
                                        }}/>}
                                    </View>
                                );
                            })}
                        </View>
                    ))}
                </View>
            </View>}
        </>
    );
}
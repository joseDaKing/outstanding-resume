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
        hide?: boolean;
        level: number;
        name: string;
    };
    items: T[];
}

const Row: React.FC = props => {

    return (
        <View
        style={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            margin: "8pt",
            flexWrap: "nowrap",
            justifyContent: "flex-start"
        }}>
            {props.children}      
        </View>
    );
}

type ColProps = {
    hasNextElement: boolean;
}

const Col: React.FC<ColProps> = props => {

    return (
        <View
        style={{
            width: "50%"
        }}>
            <View
            style={{
                width: "80%"
            }}>
                {props.children}
            </View>
            
            {props.hasNextElement &&
            <View
            style={{
                width: "40%"
            }}/>}
        </View>
    );
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

    const groupedItems = gorupArrayInto(filteredItems, 2);

    const [firstItem, ...restItems] = groupedItems;

    const itemRenderer = (item: T, index: number, array: T[]) => {

        const { level, name, hide } = itemToLevel(item);

        const hasNextElement = !!array[index+1];

        let hideItem = false;

        if (hideLevel) {

            hideItem = true
        }
        else {

            hideItem = !!hide;
        }

        return (
            <Col
            key={item.id}
            hasNextElement={hasNextElement}>
                <LevelItem
                hideLevel={hideItem}
                level={level}
                maxLevel={maxLevel}>
                    {name}
                </LevelItem>
            </Col>
        );
    };

    const colRenderer = (group: T[]) => (
        <Row key={group.map(({ id }) => id).join("-")}>
            {group.map(itemRenderer)}
        </Row>
    )

    return (
        <>
            {filteredItems.length !== 0 &&
            <View
            style={{
                paddingVertical: "17pt",
            }}>
                {!!sectionTitle &&
                <View
                wrap={false}>
                    <SectionTitle>
                        {sectionTitle}
                    </SectionTitle>

                    {colRenderer(firstItem)}
                </View>}

                <View>
                    {restItems.map(colRenderer)}
                </View>
            </View>}
        </>
    );
}
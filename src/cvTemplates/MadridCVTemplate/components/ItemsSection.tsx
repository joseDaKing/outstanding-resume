import { ListItemType } from "helpers";

import { 
    SectionTitle, 
    Item
} 
from ".";

import { View } from "@react-pdf/renderer";



type ItemsSectionProps<T> = {
    sectionTitle: string;
    items: T[];
    itemFilterer?: (item: T) => any
    itemRenderer: (item: T) => {
        title?: string;
        subTitle?: string;
        text?: string;
    }
}

export function ItemsSection<T extends ListItemType>({
    sectionTitle,
    items,
    itemRenderer: externalItemRenderer,
    itemFilterer = item => item
}: ItemsSectionProps<T>)  {

    const filteredItems = items.filter(itemFilterer);

    const firstItem = filteredItems[0];

    const restItems = filteredItems.slice(1);

    const itemRenderer = (item: T, index: number) => {

        const { title, subTitle, text } = externalItemRenderer(item)

        return (
            <Item
            key={item.id}
            index={index}
            title={title}
            subTitle={subTitle}>
                {text}
            </Item>
        );
    };

    return (
        <>
            {filteredItems.length !== 0 &&
            <View
            style={{
                paddingVertical: "17pt",
            }}>
                <View
                wrap={false}>
                    {!!sectionTitle &&
                    <SectionTitle>
                        {sectionTitle}
                    </SectionTitle>}

                    {!!firstItem && itemRenderer(firstItem, 0)}
                </View>

                {restItems.map((item, index) => (
                    <View
                    key={item.id}>
                        {itemRenderer(item, index + 1)}
                    </View>
                ))}
            </View>}
        </>
    );
}
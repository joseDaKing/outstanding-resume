import { View } from "@react-pdf/renderer";

import { ListItemType } from "helpers";

import { Item, ItemProps } from "./Item";

import { Title } from "./Title";



type ItemsProps = {
    sectionTitle: string;
    items: Array<ItemProps & ListItemType>;
}

export const Items: React.FC<ItemsProps> = props => {

    const [ firstItem, ...restItems ] = props.items;

    const itemRenderer = (item: typeof firstItem) => <Item {...item}/>

    return (
        <>
            {props.items.length !== 0 &&
            <>
                <View
                wrap={false}>

                    <Title>
                        {props.sectionTitle}
                    </Title>

                    {firstItem && itemRenderer(firstItem)}
                </View>

                {restItems.map(item => (
                    <View
                    key={item.id}>
                        
                        <View
                        style={{
                            marginTop: "12pt"
                        }}/>

                        <View>
                            {itemRenderer(item)}
                        </View>
                    </View>
                ))}
            </>}
        </>
    );
}
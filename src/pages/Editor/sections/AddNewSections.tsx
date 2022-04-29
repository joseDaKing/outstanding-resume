import { Stack } from "components/layout";

import { Button } from "components/form";

import { SubTitle } from "components/typography";

import {
    useAppDispatch,
    useAppSelector
} 
from "state";

import { 
    sections,
    languages,
    extraActivities,
    hobbies,
    references,
    courses,
    interships,
    Sections
}
from "state/slices";



export const AddNewSections: React.FC = () => {

    const gap = "$4";

    const dispatch = useAppDispatch();

    const sectionsItems = useAppSelector(store => store.sections.items);

    const createSectionDataGroup = (name: Sections, label: string) => ({
        [name]: {
            label,
            disabled: sectionsItems.includes(name),
            addSectionHandler: () => dispatch(sections.actions.addItem(name))
        }
    });

    const sectionData = {
        ...createSectionDataGroup(extraActivities.name, "Extra aktiviteter"),
        ...createSectionDataGroup(hobbies.name, "Hobbies"),
        ...createSectionDataGroup(references.name, "Referenser"),
        ...createSectionDataGroup(courses.name, "Kurser"),
        ...createSectionDataGroup(interships.name, "Praktikplats"),
        ...createSectionDataGroup(languages.name, "Språk"),
    }

    return (
        <>
            <SubTitle
            css={{
                marginBottom: "$8"
            }}>
                Lägg till avsnitt
            </SubTitle>

            <Stack
            css={{ gap }}
            fullX
            alignMain="start">
                {intoGroups(Object.values(sectionData)).map(group => (
                    <Stack
                    key={JSON.stringify(group)}
                    css={{ 
                        gap,
                        width: "$1__2"
                    }}
                    alignCross="start"
                    orientation="vertical">
                        {group.map(item => (
                            <Button
                            key={item.label}
                            onClick={item.addSectionHandler}
                            disabled={item.disabled}
                            align="start"
                            variant="text">
                                {item.label}
                            </Button>
                        ))}
                    </Stack>
                ))}
            </Stack>
        </>
    );
}

function intoGroups<T>(items: T[]): T[][] {

    const middle = Math.floor(items.length / 2);

    return [
        items.slice(0, middle),
        items.slice(middle, items.length)
    ];
}
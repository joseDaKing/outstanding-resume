import { List } from "components/layout";

import { 
    useAppDispatch,
    useAppSelector
}
from "state";

import { 
    sections, 
    workExperience,
    education,
    links,
    skills,
    languages,
    hobbies,
    extraActivities,
    references,
    interships,
    courses,
    Sections as SectionsType
}
from "state/slices";

import { ListItemType } from "helpers";

import { Education } from "./Education";

import { Links } from "./Links";

import { Skills } from "./Skills";

import { WorkExperience } from "./WorkExperience";

import { Hobbies } from "./Hobbies";

import { Languages } from "./Languages";

import { ExtraActivities } from "./ExtraActivites";

import { References } from "./References";

import { Courses } from "./Courses";

import { Interhships } from "./Interships";



export const SortableSections: React.FC = () => {

    const dispatch = useAppDispatch();

    const sectionItems = useAppSelector(store => store.sections.items.map(section => ({ id: section })));

    const onValueChangeHandler = (items: ListItemType[]) => {
                            
        const newSectionOrder = items.map(({ id }) => id);

        dispatch(sections.actions.changeItems(newSectionOrder as SectionsType[]));
    }

    return (
        <List
        space="$16"
        value={sectionItems}
        onValueChange={onValueChangeHandler}>
            {({ id }) => (
                <>
                    {id === workExperience.name &&
                    <WorkExperience/>}

                    {id === education.name &&
                    <Education/>}

                    {id === links.name &&
                    <Links/>}

                    {id === skills.name &&
                    <Skills/>}

                    {id === languages.name &&
                    <Languages/>}

                    {id === hobbies.name &&
                    <Hobbies/>}

                    {id === extraActivities.name &&
                    <ExtraActivities/>}

                    {id === references.name &&
                    <References/>}

                    {id === courses.name &&
                    <Courses/>}

                    {id === interships.name &&
                    <Interhships/>}
                </>
            )}
        </List>
    );
}
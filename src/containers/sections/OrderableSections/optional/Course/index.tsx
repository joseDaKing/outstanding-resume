import { initialCourse, course } from "../../../../../store";

import { createCRUDContainer } from "../../shared";

import { ListRenderer } from "./ListRenderer";

export const Course = createCRUDContainer({
    selector: state => state.course,
    actions: course.actions,
    ListRenderer: ListRenderer,
    initialSectionName: initialCourse.sectionName
});
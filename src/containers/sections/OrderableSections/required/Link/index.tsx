import { link, initialLink } from "../../../../../store";

import { ListRenderer } from "./ListRenderer";

import { createCRUDContainer } from "../../shared";

export const Link = createCRUDContainer({
    selector: state => state.link,
    actions: link.actions,
    ListRenderer: ListRenderer,
    initialSectionName: initialLink.sectionName,
    descriptionText: "Du kan lägga till länkar till webbplatser som du vill att personalchefer ska se! Du kanske vill lägga till en länk till din portfölj, LinkedIn-profil eller personliga hemsida."
});
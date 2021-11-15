import { skill } from "../../../../../store/slices/orderableSections/required/skill";

export const skillLabel = ({ name }: typeof skill["initialItem"]) => name || "(Ej specificerat)";
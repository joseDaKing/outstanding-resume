import { Section } from "./Section";

export type Items<K = any> = Section & {
    items: Record<string, K>;
};
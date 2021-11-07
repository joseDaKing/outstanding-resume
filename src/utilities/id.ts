import { useMemo } from "react";

import { v4 as uuid } from "uuid";

export const withId = <T extends object>(items: Record<string, T>) => Object.entries(items).map(([id, obj]) => ({ id, ...obj }));

export const useId = () => useMemo(() => uuid(), []);

import { useAppDispatch } from "../../../../store";

interface ICRUDActions {
    add: () => any;
    remove: (id: string) => any;
    reorder: (ids: [fromId: string, toId: string]) => any;
    setSectionName: (name: string) => any;
}

export const useCRUDListeners = (actions: ICRUDActions) => {

    const dispatch = useAppDispatch();

    const onAddHandler = () => {
        
        dispatch(actions.add());
    };

    const onRemoveHandler = (id: string) => {

        dispatch(actions.remove(id));
    };

    const onChangeHandler = (ids: [fromId: string, toId: string]) => {
    
        dispatch(actions.reorder(ids));
    };

    const onSectionNameChange = (sectionName: string) => {
        
        dispatch(actions.setSectionName(sectionName));
    };

    return {
        onAddHandler,
        onRemoveHandler,
        onChangeHandler,
        onSectionNameChange
    };
}
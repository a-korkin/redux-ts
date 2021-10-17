import { ActionType } from "../action-types";
import { Action, RepositoriesState } from "../actions";

const initialState: RepositoriesState = {
    loading: false,
    error: null,
    data: []
}

const reducer = (state: RepositoriesState = initialState, action: Action): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { ...state, loading: true };
        case ActionType.SEARCH_REPOSITORIES_SUCCESS: 
            return { ...state, loading: false, data: action.payload };
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { ...state, loading: false, error: action.payload, data: [] };
        default:
            return state;
    }
}

export default reducer;
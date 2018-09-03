import { CHANGE_LANGUAGE, SET_ICON_HOVER, UNSET_ICON_HOVER } from '../actions';

const initialState = {
    language: 'ENG'
}

function appReducer(state = initialState, action) {
    switch (action.type) {
        case CHANGE_LANGUAGE:
            return {
                ...state,
                language: action.language
            }
        case SET_ICON_HOVER:
            return {
                ...state,
                iconHover: action.icon
            }
        case UNSET_ICON_HOVER:
            return {
                ...state,
                iconHover: null
            }
        default:
            return state;
    }
}

export default appReducer;
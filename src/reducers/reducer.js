import { CHANGE_LANGUAGE } from '../actions';

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
        default:
            return state;
    }
}

export default appReducer;
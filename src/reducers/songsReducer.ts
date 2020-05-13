import { actionInterface } from '../actions/actions';

const initialState = {
    selectedAlbum: {},
    renderThis: false
}

export const songsReducer = (state = initialState, action: actionInterface) => {
    switch (action.type) {
        case "@@ALBUMS_SELECT":
            return {
                ...state,
                selectedAlbum: action.payload,
                renderThis: true
            }
        default:
            return state;
    }
}
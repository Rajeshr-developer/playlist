import { actionInterface } from '../actions/actions';

const initialState = {
    selectedAlbum: {},
    renderSongs: false
}

export const songsReducer = (state = initialState, action: actionInterface) => {
    switch (action.type) {
        case "@@ALBUMS_SELECT":
            return {
                ...state,
                selectedAlbum: action.payload,
                renderSongs: action.renderSongs
            }
        default:
            return state;
    }
}
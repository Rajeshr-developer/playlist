import { GetAlbumsList, actionInterface } from '../actions/actions';

const initialState = {
    apiLoaded: false,
    albumslist: []
}

const asyncAction = () => {
    return fetch('http://localhost:5000/Library');
}

export const asyncReducer = () => {
    return (dispatch: any) => {
        asyncAction()
            .then(_data => _data.json())
            .then((_val) => {
                dispatch(GetAlbumsList(_val))
            });
    }
}

const AlbumData: any = {};

const splitIntoAlbums = (_payload: any) => {
    _payload.map((album: any) => {
        if (AlbumData[album.album] == undefined) {
            AlbumData[album.album] = [];
        }
        AlbumData[album.album].push(album);
    })
}

export const rootReducer = (state = initialState, action: actionInterface) => {
    switch (action.type) {
        case "@@MUSIC_INIT":
            return {
                ...state,
                apiLoaded: true
            }
        case "@@OPTIONS_SELECT":
            return {
                ...state,
                jsonData: action.payload
            }
        case "@@ALBUMS_LIST":
            splitIntoAlbums(action.payload)
            return {
                ...state,
                albumslist: AlbumData
            }
        default:
            return state;
    }
}
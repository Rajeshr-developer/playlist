import { GetAlbumsList, SelectAlbum, actionInterface } from '../actions/actions';
import { GET_ALBUM, SEARCH_ALBUM, MUTATE_LIBRARY } from './queries';

const initialState = {
    apiLoaded: false,
    albumslist: [],
    libraryState: false
}

const asyncAction = (queryType?: String, value?: any) => {
    console.log('queryType = ', queryType);
    return fetch('http://localhost:4000/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: queryType,
        }),
    })
}

export const asyncReducer = (queryType?: String, type?: String) => {
    return (dispatch: any) => {
        asyncAction(queryType)
            .then(response => {
                return response.json()
            })
            .then(response => {
                console.log('response = ', response);
                if (type == "GET_ALBUM") {
                    dispatch(GetAlbumsList(response.data.getAlbums));
                } else {
                    dispatch(SelectAlbum(response.data.SongsDB, true));
                }
            })
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
        case "@@PLAYLIST_TOGGLE": {
            return {
                ...state,
                libraryState: action.payload
            }
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
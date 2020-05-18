import { Action } from 'redux';

interface Iselectalbum extends actionInterface {
    renderSongs: Boolean
}

export interface actionInterface extends Action {
    payload: any,
    renderSongs?: Boolean
}

export const GetAlbumsList = (_jsonData: JSON): actionInterface => {
    return {
        type: "@@ALBUMS_LIST",
        payload: _jsonData
    }
}

export const SelectAlbum = (_jsonData: JSON | null = null, render: Boolean = false): Iselectalbum => {
    return {
        type: "@@ALBUMS_SELECT",
        payload: _jsonData,
        renderSongs: render
    }
}

export const TogglePlaylistPopup = (_jsonData: Boolean): actionInterface => {
    return {
        type: "@@PLAYLIST_TOGGLE",
        payload: _jsonData
    }
}

export const CreatePlayList = (_jsonData: Boolean): actionInterface => {
    return {
        type: "@@PLAYLIST_CREATE",
        payload: _jsonData
    }
}
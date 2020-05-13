import { Action } from 'redux';

export interface actionInterface extends Action{
    payload:any;
}

export const GetAlbumsList = (_jsonData: JSON):actionInterface => {
    return {
        type: "@@ALBUMS_LIST",
        payload: _jsonData
    }
}

export const SelectAlbum = (_jsonData: JSON):actionInterface => {
    return {
        type: "@@ALBUMS_SELECT",
        payload: _jsonData
    }
}
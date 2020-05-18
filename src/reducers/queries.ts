export const GET_ALBUM = `query { 
    getAlbums {
        id,
        album,
        duration,
        title,
        artist
} } `

export const SEARCH_ALBUM = (searchvalue: String) => `query { 
    SongsDB(title:"${searchvalue}"){
        id,
        album,
        duration,
        title,
        artist
} } `

export const MUTATE_LIBRARY = `query { 
    getAlbums {
        id,
        album,
        duration,
        title,
        artist
} } `
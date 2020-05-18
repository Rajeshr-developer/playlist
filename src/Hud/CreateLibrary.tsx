import React from 'react';
import { Button } from '../components/button';
import { useDispatch } from 'react-redux'
import { TogglePlaylistPopup } from '../actions/actions';

export const CreateLibrary: React.FC = () => {
    const dispatch = useDispatch()
    return (
        <div style={{'position':'absolute','bottom':'15%'}}>
            <Button tname={'New Playlist'} onSelect={() => dispatch(TogglePlaylistPopup(true))}></Button>
        </div>
    )
}
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { TextField } from '../components/textfield';
import { asyncReducer } from '../reducers/rootReducer';
import { SEARCH_ALBUM } from '../reducers/queries';
import { SelectAlbum } from '../actions/actions'
import { connect } from 'react-redux';

const navigatorImg = require('../navigator.png');

const Navigator = styled.img`
    height:auto;
    width:4%;
    cursor: pointer;
    height: 61%;
    margin-left: 2%;
    transform: rotate(180deg);
    width: 5%;
    opacity: 0.5;
`

const SearchBox = styled.input`
    width:25%;
    left:19%;
    height:53%;
    border-radius:14px;
    position:absolute;
    font-size:1em;
    resize:none;
`

const UserProfile = styled.div`
    top:0;
    right:0%;
    display:flex;
    height:80%;
    align-items:center;
    justify-content:center;
    position:absolute;
`

const Userlogo = styled.img`
    width:10%
`

export const HeaderContents: React.FC = () => {

    const [Value, setState] = useState("");

    const usedispatch = useDispatch();

    const goBack = () => {
        setState('');
        usedispatch(SelectAlbum());
    }

    const store: any = useSelector(store => { console.log('store ==== ', store); return store });

    const onInputChange = (e: React.ChangeEvent<any>) => {
        setState(e.target.value);
        usedispatch(asyncReducer(SEARCH_ALBUM(e.target.value)));
    }

    return (
        <>
            {
                store.albumState.renderSongs && <Navigator style={{ 'opacity': '1', 'transform': 'rotate(180deg)' }} src={navigatorImg} onClick={goBack}/>
            }
            <SearchBox onChange={onInputChange} value={Value} />
            <UserProfile>
                <Userlogo src={require('../profile.png')} />
                <TextField style={{ 'marginLeft': '3%' }} fontSize={'1em'}>{'Priya Muneeshwar'}</TextField>
            </UserProfile>
        </>
    )
}
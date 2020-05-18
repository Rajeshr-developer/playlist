import styled from 'styled-components';
import React, { Component, Suspense, Dispatch } from 'react';
import { connect } from 'react-redux';
import { SelectAlbum } from '../actions/actions';

const AlbumImg = styled.img`
    height:20%;
    top: 10%;
    margin-left:9px;
    position:absolute;
`

const SongsContainer = styled.div`
    position: absolute;
    width: 64%;
    height: 100vh;
    left: 10%;
    left: 16%;
    top: 0%;
    background-image: linear-gradient(#434343, #000000);
`

const Container = styled.div`
    width: 100%;
    height: 53%;
    position: absolute;
    text-align: center;
    top: 47%
`

const AlbumSongs = styled.div`
    width: 100%;
    height: 53%;
    overflow:scroll;
    position: absolute;
    text-align: center;
    top: 47%
`

const AlbumName = styled.span`
    width:40%;
    text-align:left;
    color: #FFF;
    font-size:0.9em;
    font-family:Circular;
`

const SongData = styled.div`
    width:86%;
    height:13%;
    margin-left:7%;
    font-family:Circular;
    display:flex;
    align-items:center;
    border-top: 1px solid rgba(255,255,255, 0.1);
    border-bottom:1px solid rgba(255,255,255, 0.1);

    &:hover{
        background-color:rgb(128,128,128,0.2);
    }
`

const defaultImage = require('../music.png');

const mapStateToProps = (state: any) => {
    console.log('state = ', state);
    return {
        album: state.albumState.selectedAlbum,
        renderSongs: state.albumState.renderSongs
    }
}

interface SongsListProps {
    album: any | undefined;
    renderSongs: Boolean;
    dispatch: Dispatch<any>;
}

class SongsList extends Component<SongsListProps> {

    static defaultProps = {
        album: [],
        renderSongs: false
    }

    componentWillReceiveProps(preProps: any, nextState: any) {
        console.log(preProps, nextState);
    }

    shouldComponentUpdate(nextProps: any, nextState: any) {
        console.log(nextProps, nextState);
        return true;
    }

    render() {

        const { album, renderSongs } = this.props;

        console.log('album = ', album, ' renderSongs = ', renderSongs);

        return (

            !renderSongs ? null :
                <>
                    <SongsContainer>
                        <AlbumImg src={defaultImage}></AlbumImg>
                        <AlbumSongs>
                            {
                                album && album.map((value: any, indx: number) => {
                                    return (
                                        <SongData key={indx}>
                                            <AlbumName>{value.title}</AlbumName>
                                            <AlbumName style={{ 'marginLeft': '10px' }}>{value.artist}</AlbumName>
                                        </SongData>
                                    )
                                })
                            }
                        </AlbumSongs>
                    </SongsContainer>
                </>
        )
    }
}

export default connect(mapStateToProps)(SongsList)
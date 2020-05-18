import styled from 'styled-components';
import React, { Component, Suspense, Dispatch } from 'react';
import { connect } from 'react-redux';
import { Button } from '../components/button';
import { TogglePlaylistPopup, CreatePlayList } from '../actions/actions';
import { asyncReducer } from '../reducers/rootReducer';

const LibraryContainer = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    top: 0%;
    background: rgba(0,0,0,0.6);
    z-index:1;
    display:flex;
    align-items:center;
    justify-content:center;
`

const buttonStyle = {
    'bottom': '9%',
    'position': 'absolute',
    'background': '#4a9066',
    'borderRadius': '6px',
    'left': '46%',
    'width': '19%',
    'fontSize': '0.8em',
    'display': 'flex',
    'height': '8%',
    'alignItems': 'center',
    'justifyContent': 'center'
}

const LibraryBox = styled.div`
    position: absolute;
    width: 60%;
    height: 46%;
    background: #383434;
    border-radius:8px;
`

const ContentBox = styled.div`
    position: absolute;
    width: 90%;
    height: 76%;
`

const InputArea = styled.textarea<{ height?: any, top?: any }>`
    width: 57%;
    left: 47%;
    border-radius: 5px;
    position: absolute;
    font-size:1.2em;
    height:${props => props.height ?? '11%'};
    resize: none;
    top: ${props => props.top ?? '31%'};
`

const Name = styled.span`
    position: absolute;
    left:47%;
    top:47%;
    color:white;
`

const AlbumImg = styled.img`
    width: 34%;
    margin-top: 10%;
    margin-left: 5%
`

const mapStateToProps = (state: any) => {
    return {
        libraryState: state.rootState.libraryState
    }
}

interface Props {
    libraryState?: Boolean
    dispatch: any
}

class LibraryPanel extends Component<Props> {

    static defaultProps = {
        libraryState: false
    }

    componentWillReceiveProps(nextProps: any, nextContext: any) {
        console.log(nextProps, ' = ', nextContext);
    }

    closeLibrary = () => {
        this.props.dispatch(TogglePlaylistPopup(false))
    }

    createLibrary = () => {
        //CreatePlayList(false)
        //this.props.dispatch(asyncReducer());
    }

    render() {
        return (
            this.props.libraryState &&
            <>
                <LibraryContainer>
                    <LibraryBox>
                        <Name style={{ 'top': '3%', 'left': '47%' }}>{'Create Playlist'}</Name>
                        <Name style={{ 'left': '93%', 'top': '3%', 'fontSize': '2em' }} onClick={this.closeLibrary}>{'X'}</Name>
                        <ContentBox>
                            <AlbumImg src={require('../music.png')}></AlbumImg>
                            <Name style={{ 'top': '20%', 'left': '47%' }}>{'Name'}</Name>
                            <InputArea></InputArea>
                            <Name>{'Description'}</Name>
                            <InputArea height={'40%'} top={'57%'}></InputArea>
                        </ContentBox>
                        <Button style={buttonStyle} tname={'CREATE'} onSelect={this.createLibrary}></Button>
                    </LibraryBox>
                </LibraryContainer>
            </>
        )
    }
}

export default connect(mapStateToProps)(LibraryPanel)
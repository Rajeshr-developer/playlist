import styled from 'styled-components';
import React, { Component, Suspense, Dispatch } from 'react';
import { connect } from 'react-redux';
import { asyncReducer } from '../reducers/rootReducer';
import { SelectAlbum } from '../actions/actions';
import { TextField } from '../components/textfield';
import { GET_ALBUM } from '../reducers/queries';

const defaultImage = require('../music.png');

const Loading = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
`

const AlbumImg = styled.img`
    height:auto;
    max-width:100%;
    cursor: pointer;
`

const AlbumContainer = styled.div`
    position: absolute;
    width: 64%;
    height: 100vh;
    left: 10%;
    left: 16%;
    top: 0%;
    background-image: linear-gradient(#434343,#000000,#000000,#000000);
`

const AlbumLists = styled.ul`
    list-style-type:none;
    padding:0;
    margin:0;
    height: 100%;
    overflow:scroll;
    position:relative;
`

const Category = styled.div`
    height: 20%;
    display:flex;
    flex-direction:column;
    justify-content:flex-end;
    align-items:center;
`

const Container = styled.div`
    width:30.1%;
    float:left;
    padding:9px;
`

const textStyles = {
    'display': 'flex',
    'justify-content': 'flex-start',
    'width': '97%'
}

const mapStateToProps = (state: any) => {
    return {
        albumslist: state.rootState.albumslist
    }
}

interface AlbumProps {
    albumslist: any | undefined;
    dispatch: Dispatch<any>;
}

class AlbumsList extends Component<AlbumProps> {

    static defaultProps = {
        albumslist: {}
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        this.props.dispatch(asyncReducer(GET_ALBUM, 'GET_ALBUM'))
    }

    render() {

        console.log('albums render..!');

        const { albumslist, dispatch } = this.props;

        return (
            <>
                <AlbumContainer>
                    <Category>
                        <TextField style={textStyles} fontWeight={'bold'} fontSize={'2em'}>{'Made For You'}</TextField>
                        <TextField style={textStyles} fontWeight={'bold'} fontSize={'1em'}>{'Your Daily Mixes'}</TextField>
                    </Category>
                    <Suspense fallback={<Loading>{'Loading...!'}</Loading>}>
                        <AlbumLists>
                            {
                                Object.keys(albumslist).map((value, indx) => {
                                    return (
                                        <Container key={indx}>
                                            <AlbumImg src={defaultImage} onClick={() => dispatch(SelectAlbum(albumslist[value], true))}></AlbumImg>
                                            <TextField fontSize={'1em'}>{value}</TextField>
                                        </Container>
                                    )
                                })
                            }
                        </AlbumLists>
                    </Suspense>
                </AlbumContainer>
            </>
        )
    }
}

export default connect(mapStateToProps)(AlbumsList)
import styled from 'styled-components';
import React, { Component, Suspense, Dispatch } from 'react';
import { connect } from 'react-redux';
import { asyncReducer } from '../reducers/rootReducer';
import { SelectAlbum } from '../actions/actions';

const defaultImage = require('../music.png');

const Loading = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
`

const Albumname = styled.span`
    display:flex;
    align-items:center;
    justify-content:center;
    width: 150px;
    color: white;
    font-family:Circular;
    font-size: 0.7em;
    text-align:center;
`

const AlbumImg = styled.img`
    height:82%;
    margin-left: 9px;
    margin-top: 8px;
    cursor: pointer;
`

const AlbumContainer = styled.div`
    position: absolute;
    width: 64%;
    height: 100vh;
    left: 10%;
    left: 16%;
    top: 0%;
    background-image: linear-gradient(#434343, #000000);
`

const AlbumLists = styled.div`
    width:100%;
    height: 70%;
    overflow:scroll;
    position:absolute;
    display:grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap:10px;
    grid-auto-rows: 150px;
    grid-gap: 15px;
`

const Category = styled.div`
    height: 20%;
`

const Header = styled.div`
    height: 10%;
`

const Container = styled.div`
    float: right;
    width: 0px;
`

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

    // static getDerivedStateFromProps(nextProps: any, prevState: any) {

    // }

    static defaultProps = {
        albumslist: {}
    }

    shouldComponentUpdate() {
        return true;
    }

    componentDidMount() {
        this.props.dispatch(asyncReducer())
    }

    render() {

        console.log('albums render..!');

        const { albumslist, dispatch } = this.props;

        return (
            <>
                <AlbumContainer>
                    <Header />
                    <Category />
                    <Suspense fallback={<Loading>{'Loading...!'}</Loading>}>
                        <AlbumLists>
                            {
                                Object.keys(albumslist).map((value, indx) => {
                                    return (
                                        <Container key={indx}>
                                            <AlbumImg src={defaultImage} onClick={() => dispatch(SelectAlbum(albumslist[value]))}></AlbumImg>
                                            <Albumname>{value}</Albumname>
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
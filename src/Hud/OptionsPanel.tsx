import React, { Component } from 'react';
import { Button } from '../components/button';
import styled from 'styled-components';
import { CreateLibrary } from './CreateLibrary';
import { Playlist } from './PlayLists';

const titles = ["Made For You", " Recently Played", " Liked Songs ", " Albums", "Artists", "Podcasts"];

const LeftPanel = styled.div`
    width:16%;
    display:flex;
    height:100vh;
    flex-direction:column;
`

const Library = styled.div`
    position:absolute;
    top:25%;
    height:50%;
    display:flex;
    flex-direction:column;
`

export const OptionsPanel: React.SFC = (): JSX.Element => {

    return (
        <>
            <LeftPanel>
                <Library>
                    {
                        titles.map((optionNames, index) => {
                            return <Button style={{'height':'11%'}} key={index} tname={optionNames}></Button>
                        })
                    }
                </Library>
                <Playlist/>
                <CreateLibrary />
            </LeftPanel>
        </>
    )
}
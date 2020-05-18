import React, { Component } from 'react';
import styled from 'styled-components';

const LeftPanel = styled.div`
    position:absolute;
    top:55%;
    height:50%;
    display:flex;
    flex-direction:column;
`

export const Playlist: React.SFC = (): JSX.Element => {

    return (
        <>
            <LeftPanel/>
        </>
    )
}
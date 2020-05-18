import React, { Component } from 'react';
import styled from 'styled-components';

const LeftPanel = styled.div`
    height:100vh;
    width:20%;
    position: absolute;
    top: 0%;
    right: 0%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

const Name = styled.span`
    position: absolute;
    font-size:1.2em;
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    color:white;
`

export const RightHud:React.SFC = (): JSX.Element => {

    return (
        <>
            <LeftPanel>
                <Name>{'See what your friends are playing'}</Name>
            </LeftPanel>
        </>
    )
}
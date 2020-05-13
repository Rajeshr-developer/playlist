import React, { Component } from 'react';
import { TextField } from '../components/textfield';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

const titles = ["Favourite", "Recently Played", "Liked"];

const LeftPanel = styled.div`
    height:10vh;
    position:fixed;
    width:100%;
    display:flex;
`

export const ActivityPanel:React.SFC = (): JSX.Element => {

    const dispatch = useDispatch()

    return (
        <>
            
        </>
    )
}
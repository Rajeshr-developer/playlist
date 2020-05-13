import React, { Component } from 'react';
import { Button } from '../components/button';
import { useDispatch } from 'react-redux'
import styled from 'styled-components';

const titles = ["Favourite", "Recently Played", "Liked"];

const LeftPanel = styled.div`
    width:20%;
    display:flex;
    height:100vh;
    flex-direction:column;
`
//  onSelect={dispatch({ type: '@@OPTIONS_SELECT' })}

export const OptionsPanel:React.SFC = (): JSX.Element => {

    const dispatch = useDispatch()

    return (
        <>
            <LeftPanel>
                {
                    titles.map((optionNames, index)=>{
                        return <Button key={index} tname={optionNames}></Button>
                    })
                }
            </LeftPanel>
        </>
    )
}
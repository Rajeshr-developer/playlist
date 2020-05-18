import React, { Component } from 'react';
import styled from 'styled-components';
import { HeaderContents } from './HeaderContents';

const HeaderStyle = styled.div`
    left: 16%;
    width: 64%;
    height:6%;
    display:flex;
    align-items:center;
    position: absolute;
    z-index:1;
`

export const Header: React.SFC = (): JSX.Element => {

    return (
        <>
            <HeaderStyle>
                <HeaderContents />
            </HeaderStyle>
        </>
    )
}
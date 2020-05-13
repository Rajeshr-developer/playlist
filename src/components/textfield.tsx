import React from 'react';
import styled from 'styled-components';

interface Props {
    tname?: string;
    onSelect?: any;
}

const TitleBlock = styled.button`
    color:white;
    font-size:1em;
    justify-content:center;
    font-family:Circular;
    border:2px solid white;
    background-color:#000;
    display: flex;
    justify-content: flex-start;
`
const SpanElement = styled.h1`
    cursor:pointer;
    color:#FFFFFF;
`
export const TextField = (props: Props) => {
    return (
        <TitleBlock onClick={props.onSelect}>{props.tname}</TitleBlock>
    )
}
import React from 'react';
import styled from 'styled-components';

interface Props {
    tname?: string;
    onSelect?: any;
    style?: any
}

const CustomButton = styled.button`
    color:white;
    font-size:1em;
    justify-content:center;
    font-family:Circular;
    display: flex;
    border:none;
    background:none;
    justify-content: flex-start;
`

export const Button = (props: Props) => {
    return (
        <CustomButton style={props.style} onClick={props.onSelect}>{props.tname}</CustomButton>
    )
}
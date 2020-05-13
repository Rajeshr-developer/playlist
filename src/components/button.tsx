import React from 'react';
import styled from 'styled-components';

interface Props {
    tname?: string;
    onSelect?: any;
}

const CustomButton = styled.button`
    color:white;
    font-size:1em;
    justify-content:center;
    font-family:Circular;
    display: flex;
    justify-content: flex-start;
`

export const Button = (props: Props) => {
    return (
        <CustomButton onClick={props.onSelect}>{props.tname}</CustomButton>
    )
}
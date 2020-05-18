import React from 'react';
import styled from 'styled-components';

type textFieldProps = {
    fontSize: any,
    fontWeight?: any
}

export const TextField = styled.span<textFieldProps>`
    display:flex;
    align-items:center;
    justify-content:center;
    color: white;
    font-family:Circular;
    font-weight: ${props => props.fontWeight ? props.fontWeight  : "lighter"};
    font-size: ${props => (props.fontSize)};
    text-align:center;
`
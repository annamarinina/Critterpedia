import React from 'react';
import { useHistory } from 'react-router-dom';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

type ButtonProps = {
    label: string;
    path: string;
}

const buttonStyle = css`
    width: 120px;
    height: 50px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 25px;
    border: none;
    margin: 10px;
    outline: none;
    &:hover {
        background-color: lightyellow;
    }
    &:active {
        background-color: yellow;
    }
`

export const Button = (props: ButtonProps) => {
    const history = useHistory();
    return (
        <button css={buttonStyle} onClick={() => history.push(props.path)}>{props.label}</button>
    )
}
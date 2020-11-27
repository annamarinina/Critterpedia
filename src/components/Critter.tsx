import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';

interface Props {
    imgUri: string,
    label: String
}

const critterStyle = css`
    display: flex;
    background-color: white;
    max-width: 300px;
    border-radius: 20px;
    border: 5px solid lightgreen;
    margin: 5px;
`;

const imgStyle = css`
    height: 70px;
`;

const labelStyle = css`
    font-size: 20px;
    color: green;
    margin-right: 65px;
`;

export const Critter = ({imgUri, label}: Props) => {
    return (
        <div css={critterStyle}>
            <img css={imgStyle} src={imgUri} alt="img"></img>
            <p css={labelStyle}>{label}</p>
        </div>
    )
}
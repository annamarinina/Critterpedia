import React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from "react-router-dom";

const headerStyle = css`
    width: 100%;
    height: 100px;
    background-color: lightgreen;
`;

const headingStyle = css`
    margin: 0;
    line-height: 100px;
    display: inline;
`

const iconStyle = css`
    height: 50px;
`

export const Header = () => {
    return (
        <div css={headerStyle}>
            <Link to="/">
            <img css={iconStyle} src={'https://www.svgrepo.com/show/12225/leaf-butterfly.svg'} alt="butterfly" />
            </Link>
            <h1 css={headingStyle}>Critterpedia</h1>
        </div>
    )
}

import React from 'react';
import styled from 'styled-components';

export const SmallButton = ({ label, onClick, css }) => {
    return(
        <UIButton onClick={onClick} style = {css}>
            {label}       
        </UIButton>
    )
}

const UIButton = styled.button`
    height: 16px;
    width: 32px;
    font-size: 10px;
    font-weight: 500;
    text-align: left;
    color: #fbfbfb;
    border-radius: 2px;
    background-color: #17c671;
    border-style: none;
    position: absolute;
    margin-right: 24px;
    right: 0;
`;
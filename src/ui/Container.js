import React from 'react';
import styled from 'styled-components';

export const Container = ({ css, children }) => {
    return(
        <Box onClick={onClick} css={css}>
            {children}            
        </Box>
    )
}

const Box = styled.div`
    border-radius: 16px;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
    background-color: #ffffff;
    padding-left: 20px;
    padding-top: 17px;

    color: #3d5170;
    font-weight: 600;

    font-size: ${props=>props.theme.fontSizeP};
`;
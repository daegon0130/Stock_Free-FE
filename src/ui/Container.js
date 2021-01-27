import React from 'react';
import styled from 'styled-components';

export const Container = ({ label, onClick, css, children }) => {
    return(
        <Box onClick={onClick} css={css}>
            {label}
            {children}            
        </Box>
    )
}

const Box = styled.div`
    background-color: #fff;
    color: #3d5170;
    box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
    border-radius: 16px;
    margin-bottom: 25px;
    
    font-size: ${props=>props.theme.fontSizeP};
    color: #fff;
    background-color: ${props=>props.theme.primaryColor};
    

    ${props=>props.css};
`;
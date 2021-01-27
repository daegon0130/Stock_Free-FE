import React from 'react';
import styled from 'styled-components';

export const HeaderText = ({ fontSize = 'h1', css, children }) => {
    if(fontSize === 'h1') return <HeaderTextH1 css={css}>{children}</HeaderTextH1>
    if(fontSize === 'h2') return <HeaderTextH2 css={css}>{children}</HeaderTextH2>
    if(fontSize === 'h3') return <HeaderTextH3 css={css}>{children}</HeaderTextH3>
    if(fontSize === 'h4') return <HeaderTextH4 css={css}>{children}</HeaderTextH4>
    if(fontSize === 'h5') return <HeaderTextH5 css={css}>{children}</HeaderTextH5>
    return <HeaderTextH1 css={css}>{children}</HeaderTextH1>
}

export const Text = ({ isInfo = false, css, children}) => {
    return(
        <UIText isInfo={isInfo} css={css}>{children}</UIText>
    )
}

const HeaderTextH1 = styled.h1`
    font-size: ${props=>props.theme.fontSizeH1};
    font-weight: bold;
    color: ${props=>props.theme.textBoldColor};

    ${props=>props.css};
`;

const HeaderTextH2 = styled.h2`
    font-size: ${props=>props.theme.fontSizeH1};
    font-weight: bold;
    color: ${props=>props.theme.textBoldColor};

    ${props=>props.css};
`;

const HeaderTextH3 = styled.h3`
    font-size: ${props=>props.theme.fontSizeH1};
    font-weight: bold;
    color: ${props=>props.theme.textBoldColor};

    ${props=>props.css};
`;

const HeaderTextH4 = styled.h4`
    font-size: ${props=>props.theme.fontSizeH1};
    font-weight: bold;
    color: ${props=>props.theme.textBoldColor};

    ${props=>props.css};
`;

const HeaderTextH5 = styled.h5`
    font-size: ${props=>props.theme.fontSizeH1};
    font-weight: bold;
    color: ${props=>props.theme.textBoldColor};

    ${props=>props.css};
`;

const UIText = styled.p`
    font-size: ${props=>props.theme.fontSizeP};
    font-weight: bold;
    color: ${props=>props.theme.textColor};

    ${props=>props.css};
`;
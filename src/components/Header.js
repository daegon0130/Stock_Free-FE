import React from 'react';
import styled from 'styled-components';

export const Header = ({ startDate, lastDate }) => {
    return(
    <HeaderBar>
        {startDate}
        <Words>부터 &nbsp;</Words>
        {lastDate}
        <Words>까지 데이터로 분석합니다.</Words>
    </HeaderBar>
    );
}

const HeaderBar = styled.div`
    min-width: 825px;
    height: 60px;
    background-color: #fff;
    color: #818ea3;
    padding-left: 24px;
    font-weight: 600;
    font-size: 21px;
    line-height: 60px;
    vertical-align: middle;
`;

const Words = styled.span`
    margin-left: 5px;
    font-size: 17px;
    line-height: 60px;
    vertical-align: middle;
    display: inline-block;
`
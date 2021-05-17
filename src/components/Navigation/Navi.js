import React from "react";
import styled from 'styled-components';
import { NavLink } from "react-router-dom";
import { ReactComponent as Icon1 } from "../../images/saleshistory.svg";
import { ReactComponent as Icon2 } from "../../images/stockready.svg";
import { ReactComponent as Icon3 } from "../../images/dataupload.svg";

export const Navi =()=> {
    return (
      <Nav>
        <div className="header">수프 (Stock Free)</div>
        <div className="dashboard">
          <div className="title">dashboard</div>
          <div className="sales dash">
            <NavLinks
              exact={true}
              to={{ pathname: "/", state: { login: true } }}
              activeClassName = 'active'
              login={true}
            >
              <Icon1 />
              &nbsp;&nbsp;판매 추이
            </NavLinks>
          </div>
          <div className="stock dash">
            <NavLinks
              exact={true}
              to={{ pathname: "/stock", state: { login: true } }}
              activeClassName = 'active'
              login={true}
            >
              <Icon2 />

              &nbsp;&nbsp;재고 사전 준비
            </NavLinks>
          </div>
          <div className="data dash">
            <NavLinks
              exact={true}
              to={{ pathname: "/upload", state: { login: true } }}
              activeClassName = 'active'
              login={true}
            >
              <Icon3 />
              &nbsp;&nbsp;데이터 업로드
            </NavLinks>
          </div>
        </div>
      </Nav>
    );
}

const NavLinks = styled(NavLink)`
  &:hover {
    color: ${props=>props.theme.blue};
  }
  &:hover svg path{
    fill: ${props=>props.theme.blue};
  }
  &.active{
    color: ${props=>props.theme.blue};
  }
  &.active svg path{
    fill: ${props=>props.theme.blue};
    align-items: center;
  }
  color: inherit;
  text-decoration: none;
  display: flex;
  width: inherit;
`

const Nav = styled.nav`
  width: 16.5vw;
  min-width: 240px;
  height: 100vh;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  left: initial;
  top: initial;
  position: fixed;
  z-index: 20;

  & .header{
    font-size: 22px;
    font-weight: 600;
    padding: 24px;
    text-align: center;
    color: #007bff;
    border-bottom: solid 1px #e1e5eb;
  }

  & .title{
    font-size: 12px;
    font-weight: 600;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.25;
    letter-spacing: 2.4px;
    text-align: left;
    color: #aaacb1;
    text-transform: uppercase;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-left: 25px;
    border-bottom: solid 1px #e1e5eb;
  } 

  & .dash{
    font-size: 16.5px;
    font-weight: 500;
    color: #aaacb1;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 25px;
  }

`

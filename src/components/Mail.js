import React from "react";
import mailimg from "../images/메일.svg";
import { Container } from '../ui/Container';
import styled, {css} from 'styled-components';

export const Mail =()=> {
  return (
    <Page>
        <h1>데이터 업로드</h1>
        <Box>
          <h3>분석할 엑셀 파일을 아래의 항목에 맞춰서 하단의 메일로 보내주세요</h3>
          <p className="mail-list">
          <span>1. 회원 아이디</span>
          <span>2. 등록된 매장 이름</span>
          <span>3. 엑셀 파일</span>
          </p>
          <p className="mail-address"><img src={mailimg} alt="mail img" /> &nbsp;stockfree_helper@stockfree.io</p>
        </Box>
    </Page>
  );
}

const Page = styled.div`
  padding-left: 24px;
  margin: 0 auto;
  width: 80vw;

  & h1{
    font-weight: bold;
    color: #3d5170;
    font-size: 32px;
    margin-top: 14px;
    margin-bottom: 14px;
  }
`

const Box = styled.div`
  width: 644px;
  border-radius: 16px;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
  padding-left: 20px;
  padding-top: 17px;
  padding-bottom: 17px;

  & h3{
    margin-top: 0;
    margin-bottom: 16px;
    color: #3d5170;
    font-size: 18px;
    font-weight: 600;
  }
  & .mail-list {
    color: #3d5170;
    font-size: 18px;
    font-weight: 600;
  }
  
  & .mail-list span {
    display: block;
    margin-bottom: 0.5em;
  }
  
  & .mail-address {
    color: #3d5170;
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }
`
import React from "react";
import "./Mail.css";
import mailimg from "../images/메일.svg";

class Mail extends React.Component {
render(){
  return (
    <div className="upload">
        <h1>데이터 업로드</h1>
        <div className="mail">
          <h3>분석할 엑셀 파일을 아래의 항목에 맞춰서 하단의 메일로 보내주세요</h3>
          <p className="mail-list">
          <span>1. 회원 아이디</span>
          <span>2. 등록된 매장 이름</span>
          <span>3. 엑셀 파일</span>
          </p>
          <p className="mail-address"><img src={mailimg} alt="mail img" /> &nbsp;stockfree_helper@stockfree.io</p>
        </div>
    </div>
  );
}
}

export default Mail;
import React from "react";
import "./Mail.css";

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
          <p className="mail-address"><svg xmlns="http://www.w3.org/2000/svg" width="26.357" height="19.743" viewBox="0 0 26.357 20.743">
  <g id="그룹_139" data-name="그룹 139" transform="translate(-18.911 -167.5)">
    <path id="패스_32" data-name="패스 32" d="M5.218,6H22.961a2.224,2.224,0,0,1,2.218,2.218V21.525a2.224,2.224,0,0,1-2.218,2.218H5.218A2.224,2.224,0,0,1,3,21.525V8.218A2.224,2.224,0,0,1,5.218,6Z" transform="translate(18 163)" fill="none" stroke="#3d5170" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
    <path id="패스_33" data-name="패스 33" d="M25.179,9,14.089,16.763,3,9" transform="translate(18 163)" fill="none" stroke="#3d5170" stroke-linecap="round" stroke-linejoin="round" stroke-width="3"/>
  </g>
</svg>&nbsp;stockfree_helper@stockfree.io</p>
        </div>
    </div>
  );
}
}

export default Mail;
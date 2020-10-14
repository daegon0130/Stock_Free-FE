import React from 'react';
import "./Login.css"
import { Link } from "react-router-dom";

function Login(){
    return(
    <div className="log-container">
        <div className="header">
            수프 (Stock Free)
        </div>
        <div className="body">
        <form id ="form-login">
            <fieldset class="login-form">
            <div className="id-area">
                <label for="login-id">아이디</label>
            <input id="login-id" type="text" name="login-id" placeholder="아이디"/>
            </div>
            <div className="password-area">
            <label for="login-password">비밀번호</label>
            <input id="login-password" type="password" name="password" placeholder="비밀번호" />
            </div>
            <button id="bnt-submit" type="submit" onClick="location.href='./Home">로그인</button>
            </fieldset>
        </form>
        </div>
    </div>
    
    );
}

export default Login;
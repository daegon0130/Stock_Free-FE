import React from "react";
import { Link } from "react-router-dom";
import "./Navi.css";
import Login from "./Login";

function Navi() {
  return (
    <nav className="navigation">
        <div className="header">
            수프 (Stock Free)
        </div>
        <div className="dashboard">
            <div className="title">dashboard</div>
            <div className="sales dash">판매 추이</div>
            <div className="stock dash">재고 사전 준비</div>
            <div className="data dash">데이터 업로드</div>
        </div>
    </nav>
  );
}

export default Navi;
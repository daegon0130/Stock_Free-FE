import React from 'react';
import './Header.css';

function Header({ startDate, lastDate }){
    return(
    <div className="Header"><span className="Date">{startDate}</span><span className="other">부터 &nbsp;</span>
        <span className="Date">{lastDate}</span><span className="other">까지 데이터로 분석합니다.</span>
    </div>
    );
}

export default Header;
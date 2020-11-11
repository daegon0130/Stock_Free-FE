import React from "react";
import "./Navi.css";
import { NavLink } from 'react-router-dom';


function Navi() {
  const activeStyle = {
    color: '#007bff',
    fill: '#007bff',
  };
  return (
    <nav className="navigation">
        <div className="header">
            수프 (Stock Free)
        </div>
        <div className="dashboard">
            <div className="title">dashboard</div>
            <div className="sales dash"><NavLink exact to="/" activeStyle={activeStyle} activeClassName='isSales'><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17.53 17.53">
              <path className="logo" id="Icon_material-grapheq" data-name="Icon material-grapheq" d="M8.4,17.024h1.948V6.506H8.4Zm3.9,3.506h1.948V3H12.291ZM4.5,13.518H6.448V10.012H4.5Zm11.687,3.506h1.948V6.506H16.187Zm3.9-7.012v3.506H22.03V10.012Z" transform="translate(-4.5 -3)" fill="#aaacb1"/>
</svg>
&nbsp;&nbsp;판매 추이</NavLink></div>
            <div className="stock dash"><NavLink exact to="/stock" activeStyle={activeStyle} activeClassName='isStock'><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 22.101 22.102">
  <path id="Icon_awesome-directions" data-name="Icon awesome-directions" d="M21.7,10.072,12.03.405a1.385,1.385,0,0,0-1.958,0L.405,10.072a1.385,1.385,0,0,0,0,1.958L10.072,21.7a1.384,1.384,0,0,0,1.958,0L21.7,12.03a1.385,1.385,0,0,0,0-1.958Zm-4.359.542L13.7,13.969a.345.345,0,0,1-.58-.254V11.4H8.978v2.763a.345.345,0,0,1-.345.345H7.252a.345.345,0,0,1-.345-.345V10.705A1.381,1.381,0,0,1,8.288,9.324h4.835V7a.345.345,0,0,1,.58-.254l3.635,3.355A.346.346,0,0,1,17.337,10.614Z" fill="#aaacb1"/>
</svg>
&nbsp;&nbsp;재고 사전 준비</NavLink></div>
            <div className="data dash"><NavLink exact to="/upload" activeStyle={activeStyle} activeClassName='isData'><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17.588" viewBox="0 0 15.075 17.588">
  <path className='logo2' id="Icon_metro-file-excel" data-name="Icon metro-file-excel" d="M16.979,5.933a2.284,2.284,0,0,1,.471.746,2.265,2.265,0,0,1,.2.864V18.849a.938.938,0,0,1-.942.942H3.513a.938.938,0,0,1-.942-.942V3.146A.938.938,0,0,1,3.513,2.2h8.794a2.266,2.266,0,0,1,.864.2,2.284,2.284,0,0,1,.746.471ZM12.621,3.538v3.69h3.69a1.072,1.072,0,0,0-.216-.4L13.023,3.754a1.072,1.072,0,0,0-.4-.216Zm3.769,15V8.485H12.307a.938.938,0,0,1-.942-.942V3.46H3.827V18.535H16.39Zm-9.609-2.3v1.04H9.539v-1.04H8.8l1.011-1.58a1.407,1.407,0,0,0,.1-.162q.049-.093.074-.132t.034-.039h.02a.338.338,0,0,0,.049.1.549.549,0,0,0,.044.074q.025.034.059.079l.064.083,1.05,1.58H10.56v1.04h2.856v-1.04h-.667l-1.884-2.679,1.914-2.768h.658V9.741H10.7v1.05h.726l-1.011,1.561q-.039.069-.1.162t-.088.132l-.02.029h-.02a.338.338,0,0,0-.049-.1,1.171,1.171,0,0,0-.167-.226l-1.04-1.561h.746V9.741H6.83v1.05H7.5l1.855,2.67-1.9,2.778H6.781Z" transform="translate(-2.571 -2.204)" fill="#aaacb1"/>
</svg>
&nbsp;&nbsp;데이터 업로드</NavLink></div>
        </div>
    </nav>
  );
}

export default Navi;
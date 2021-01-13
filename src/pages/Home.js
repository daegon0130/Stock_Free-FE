import React from "react";
//import axios from "axios";
import "./Home.css";
import Navi from "../components/Navi";
import Header from "../components/Header";
import Chart from "../components/Chart";
import coreimg from "../images/핵심 제품.svg";

class Home extends React.Component {
  state = {
    isLoading: true,
    startDate: "",
    endDate: "",
    date: [], //total date range
    oriDate: [], //before parsing
    day: [], 
    week: [],
    month: [],

    //월별, 주별, 일별 판매량 데이터
    monthHistory: [],
    weekHistory: [],
    dayHistory: [],
    isShow: [0],
    showMenu: false,
    core: 0,
    time: 1, // 일별, 주별, 월별 중 사용자가 보는 그래프, 1은 일별 2는 주별 3은 월별

    // totalDate: {
    //   host: "stockfree1.ckta3csfmjh6.ap-northeast-2.rds.amazonaws.com",
    //   user: "sfadmin",
    //   password: "11dnjf11dlf",
    //   db: "userID",
    //   charset: "utf8",
    // },
    history: {
      // host: "stockfree1.ckta3csfmjh6.ap-northeast-2.rds.amazonaws.com",
      // user: "sfadmin",
      // password: "11dnjf11dlf",
      // db: "userID",
      // charset: "utf8",
      start: "2020-10-01",
      end: "2020-10-31",
    },
    login: false,
  };

  database = {
    totalDate: ["2020-08-01", "2020-10-31"],
    dayDate: ["08월 01일","08월 02일","08월 03일","08월 04일","08월 05일","08월 06일","08월 07일","08월 08일","08월 09일","08월 10일","08월 11일","08월 12일","08월 13일","08월 14일","08월 15일","08월 16일","08월 17일","08월 18일","08월 19일","08월 20일","08월 21일","08월 22일","08월 23일","08월 24일","08월 25일","08월 26일","08월 27일","08월 28일","08월 29일","08월 30일","08월 31일","09월 01일","09월 02일","09월 03일","09월 04일","09월 05일","09월 06일","09월 07일","09월 08일","09월 09일","09월 10일","09월 11일","09월 12일","09월 13일","09월 14일","09월 15일","09월 16일","09월 17일","09월 18일","09월 19일","09월 20일","09월 21일","09월 22일","09월 23일","09월 24일","09월 25일","09월 26일","09월 27일","09월 28일","09월 29일","09월 30일","10월 01일","10월 02일","10월 03일","10월 04일","10월 05일","10월 06일","10월 07일","10월 08일","10월 09일","10월 10일","10월 11일","10월 12일","10월 13일","10월 14일","10월 15일","10월 16일","10월 17일","10월 18일","10월 19일","10월 20일","10월 21일","10월 22일","10월 23일","10월 24일","10월 25일","10월 26일","10월 27일","10월 28일","10월 29일","10월 30일","10월 31일"]
    ,
    dayHistory: [{"id":0,"name":"반반족발(대)","value":[4,4,0,2,2,1,1,0,1,1,2,0,5,1,0,3,0,0,2,2,0,0,1,3,1,3,1,3,0,2,3,3,3,4,0,0,3,6,5,0,2,2,0,0,2,0,0,1,2,0,3,2,1,2,3,1,0,2,1,1,1,0,0,2,0,2,2,6,3,3,0,1,0,0,1,0,3,4,0,1,2,3,1,0,1,1,0,0,0,1,1,0]},{"id":1,"name":"반반족발(중)","value":[0,4,0,0,2,0,1,0,2,1,2,0,3,5,0,2,0,1,1,4,5,0,0,1,3,5,1,1,0,3,5,2,2,3,3,0,3,0,3,1,0,0,0,1,2,3,0,3,2,0,1,5,1,1,2,0,0,1,4,1,1,0,0,2,2,1,1,1,2,0,0,3,3,3,0,1,2,2,0,1,1,2,2,0,0,0,0,0,1,3,1,0]},{"id":2,"name":"튀지(대)","value":[0,1,0,1,0,0,0,0,0,1,0,0,0,2,0,1,0,0,0,0,0,0,0,0,0,1,0,2,0,2,0,0,0,1,2,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,1,1,1,0,0,0,1,1,0,0,0,0,0,0,2,1,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,2,0]},{"id":3,"name":"튀지(중)","value":[0,2,0,0,1,0,0,0,0,1,2,0,2,1,0,0,0,1,0,0,1,0,0,0,1,0,1,0,0,1,0,1,0,2,0,0,1,4,0,1,0,1,0,1,0,0,0,0,2,0,3,2,3,1,2,2,0,0,0,1,0,0,0,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,0,1,1,1,0,3,0,0,0,0,2,0,0,0]},{"id":4,"name":"혼자먹는족발","value":[3,3,0,0,0,0,0,0,1,1,2,2,0,3,0,1,0,2,2,2,2,0,0,0,2,0,1,2,0,2,2,2,3,1,0,0,1,1,2,0,3,1,0,2,4,2,6,1,1,0,1,1,2,3,1,1,0,1,0,2,0,0,0,1,0,2,1,2,5,0,0,0,0,3,1,1,1,2,0,0,1,0,0,0,0,1,0,2,0,2,1,0]},{"id":5,"name":"불튀족발(대)","value":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,0,0,0,0,1,0,1,0,0,1,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0]},{"id":6,"name":"불튀족발(중)","value":[0,1,0,2,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0]},{"id":7,"name":"막국수","value":[1,3,0,0,0,0,1,0,2,2,2,0,7,3,0,3,0,3,2,5,2,0,0,2,3,4,3,4,0,6,2,2,3,7,1,0,1,4,2,2,1,2,0,2,3,1,1,4,3,0,4,4,5,1,6,1,0,1,3,1,1,0,0,2,1,3,3,2,2,0,0,3,0,4,1,1,1,4,0,1,1,3,0,2,1,1,0,0,0,2,3,0]},{"id":8,"name":"등갈비튀김","value":[0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,1,0,0,0,1,2,0,0,0,1,2,1,1,0,0,0,0,0,2,0,1,1,0,0,0,1,0,0,0,0,0,1,1,0,1,1,0,0,0,1,0,0,0,1,0,1,1,1,2,0,0,0,0,0,0,1,0,2,0,0,1,0,1,0,0,0,0,0,1,0,1,0]},{"id":9,"name":"쫄면","value":[0,0,0,2,1,1,0,0,0,0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,1,2,1,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,1,0,0,0,2,1,1,0,0,0,0,0,0,0,0]},{"id":10,"name":"꼬막비빔밥","value":[0,0,0,0,0,0,0,0,0,1,0,0,1,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,0,1,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,0,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,2,0,0,0,0,1,0]},{"id":11,"name":"주먹밥","value":[5,10,0,4,2,1,0,0,2,0,2,0,5,1,0,3,0,0,1,2,3,0,0,0,3,3,1,1,0,4,0,5,1,0,3,0,3,4,0,0,0,1,0,1,3,0,1,3,1,0,0,4,1,2,2,2,0,1,0,3,1,0,0,1,2,2,3,2,1,0,0,1,1,0,0,1,4,0,0,1,2,3,1,1,0,0,0,0,0,3,3,0]},{"id":12,"name":"사천볶음밥","value":[0,0,0,1,0,0,0,0,1,0,0,0,0,1,0,1,0,0,0,0,1,0,0,1,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0]},{"id":13,"name":"떡볶이","value":[2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0,0,0,2,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,1,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":14,"name":"어묵탕","value":[0,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,2,0,2,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":15,"name":"계란찜","value":[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":16,"name":"콜라 1.25L","value":[0,3,0,0,0,0,0,0,1,1,2,0,2,2,0,0,0,0,0,1,2,0,0,1,1,3,1,2,0,2,1,5,1,6,1,0,4,2,1,0,0,1,0,1,1,1,0,4,1,0,1,2,1,0,1,1,0,1,0,0,1,0,0,2,0,0,2,2,0,0,0,1,1,1,1,0,2,2,0,1,3,2,0,1,1,0,0,0,0,2,1,0]},{"id":17,"name":"소주","value":[0,0,0,0,0,1,0,0,2,1,6,2,3,2,0,3,4,5,0,3,0,0,1,4,4,3,9,1,0,2,3,0,1,0,2,0,0,0,10,0,0,5,0,0,0,0,0,0,0,0,0,8,3,0,0,0,0,0,0,0,0,0,0,2,0,12,0,2,8,1,0,0,0,0,0,1,2,21,0,0,2,1,3,0,0,0,0,0,4,0,0,0]},{"id":18,"name":"참이슬후레쉬","value":[2,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,2,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,2,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":19,"name":"진로이즈백","value":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":20,"name":"처음처럼","value":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":21,"name":"소주행사","value":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0]},{"id":22,"name":"맥주","value":[0,0,0,0,0,1,0,0,0,0,0,0,6,1,0,5,0,1,2,0,2,0,1,2,0,0,0,0,0,0,0,0,1,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,6,1,3,0,0,0,0,0,0,0,0,0,0,0,0,5,0,2,0,0,0,0,0,0,0,3,4,2,0,0,0,0,0,0,0,0,0,0,8,0,0,0]},{"id":23,"name":"테라병","value":[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":24,"name":"테라생맥주1000cc","value":[0,1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,4,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0]},{"id":25,"name":"생맥주300cc","value":[0,0,0,0,0,2,0,0,14,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":26,"name":"생맥주500cc","value":[0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,5,0,0,0,0,0,3,0,0,0,0,0,0,5,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":27,"name":"생맥주1000cc","value":[2,0,0,0,0,0,0,2,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,4,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":28,"name":"생맥주2700cc","value":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":29,"name":"음료수","value":[0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,1,0,0,1,0,0,0,0,1,1,2,0,0,0,0,4,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,3,1,0,0,0,0,0,1,0,0,0,0,1,0,2,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,1,0,0,0]},{"id":30,"name":"콜라500ml","value":[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0]},{"id":31,"name":"칠성사이다125L","value":[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":32,"name":"환타파인애플355ml","value":[0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},{"id":33,"name":"배달횟수","value":[4,6,0,3,1,1,0,0,1,2,1,1,1,4,0,2,0,3,2,2,2,0,0,1,0,1,1,2,0,3,1,4,3,1,0,0,2,1,3,0,3,2,0,1,3,2,6,1,0,0,1,3,1,1,1,0,0,0,1,5,0,0,0,1,0,2,1,2,2,0,0,1,0,2,1,2,1,1,0,1,1,0,1,0,0,1,0,2,0,3,1,0]},{"id":34,"name":"공기밥","value":[0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0]}],

    weekDate:["08월 01일 ~ 08월 01일","08월 02일 ~ 08월 08일","08월 09일 ~ 08월 15일","08월 16일 ~ 08월 22일","08월 23일 ~ 08월 29일","08월 30일 ~ 09월 05일","09월 06일 ~ 09월 12일","09월 13일 ~ 09월 19일","09월 20일 ~ 09월 26일","09월 27일 ~ 10월 03일","10월 04일 ~ 10월 10일","10월 11일 ~ 10월 17일","10월 18일 ~ 10월 24일","10월 25일 ~ 10월 31일"],
    weekHistory:[{"id":0,"name":"반반족발(대)","value":[8,10,10,7,12,15,18,5,12,7,16,9,8,3]},{"id":1,"name":"반반족발(중)","value":[4,7,13,13,11,18,7,11,10,9,7,14,6,5]},{"id":2,"name":"튀지(대)","value":[1,2,3,1,3,5,3,3,4,2,4,0,2,2]},{"id":3,"name":"튀지(중)","value":[2,3,6,2,2,4,7,3,13,2,5,4,6,2]},{"id":4,"name":"혼자먹는족발","value":[6,3,9,9,5,10,8,16,9,4,10,8,1,6]},{"id":5,"name":"불튀족발(대)","value":[0,0,0,0,3,3,2,0,3,1,1,0,1,0]},{"id":6,"name":"불튀족발(중)","value":[1,4,0,2,0,0,3,2,1,0,2,1,2,0]},{"id":7,"name":"막국수","value":[4,4,16,15,16,21,12,14,21,8,11,14,8,6]},{"id":8,"name":"등갈비튀김","value":[1,2,0,3,3,5,4,1,4,2,5,3,2,2]},{"id":9,"name":"쫄면","value":[0,4,2,1,4,3,1,1,3,0,2,1,4,0]},{"id":10,"name":"꼬막비빔밥","value":[0,0,3,2,1,3,0,1,2,2,1,2,0,3]},{"id":11,"name":"주먹밥","value":[15,17,10,9,8,13,8,9,11,6,10,7,8,6]},{"id":12,"name":"사천볶음밥","value":[0,1,2,2,2,1,1,0,0,0,1,1,1,0]},{"id":13,"name":"떡볶이","value":[2,0,0,0,0,2,1,2,2,0,2,3,0,0]},{"id":14,"name":"어묵탕","value":[1,2,0,1,0,0,0,0,1,2,3,1,0,0]},{"id":15,"name":"계란찜","value":[0,1,0,1,2,0,2,0,1,0,1,1,0,0]},{"id":16,"name":"콜라 1.25L","value":[3,3,8,3,8,16,8,8,6,4,4,8,8,3]},{"id":17,"name":"소주","value":[0,1,16,15,22,8,15,0,11,2,23,24,6,4]},{"id":18,"name":"참이슬후레쉬","value":[3,1,0,0,0,2,2,1,2,1,2,2,0,0]},{"id":19,"name":"진로이즈백","value":[0,0,0,1,0,0,0,0,0,0,1,0,0,0]},{"id":20,"name":"처음처럼","value":[0,0,0,0,5,0,0,0,2,3,0,0,0,0]},{"id":21,"name":"소주행사","value":[0,0,0,0,0,0,0,0,0,0,0,0,0,2]},{"id":22,"name":"맥주","value":[0,1,7,10,3,1,4,0,10,0,7,9,0,8]},{"id":23,"name":"테라병","value":[1,1,0,1,0,0,0,0,0,0,0,0,0,0]},{"id":24,"name":"테라생맥주1000cc","value":[1,1,1,0,0,3,0,5,0,2,0,3,0,2]},{"id":25,"name":"생맥주300cc","value":[0,2,14,0,0,0,1,0,0,0,0,0,0,0]},{"id":26,"name":"생맥주500cc","value":[0,2,0,0,5,3,7,0,0,0,0,1,0,0]},{"id":27,"name":"생맥주1000cc","value":[2,2,1,0,2,0,6,0,1,0,0,1,0,0]},{"id":28,"name":"생맥주2700cc","value":[0,0,0,0,0,0,0,1,0,0,0,0,0,0]},{"id":29,"name":"음료수","value":[0,0,2,2,4,4,0,1,4,2,3,1,1,1]},{"id":30,"name":"콜라500ml","value":[0,0,1,0,0,0,0,0,0,0,0,0,1,0]},{"id":31,"name":"칠성사이다125L","value":[0,0,0,0,1,0,0,1,0,0,0,0,0,0]},{"id":32,"name":"환타파인애플355ml","value":[1,1,0,0,0,0,0,0,1,0,0,0,0,0]},{"id":33,"name":"배달횟수","value":[10,11,10,11,5,12,11,13,7,7,7,8,3,7]},{"id":34,"name":"공기밥","value":[0,0,1,1,0,3,0,0,0,0,0,0,2,0]}],

    monthDate: ["08월","09월","10월"],
    monthHistory:[{"id":0,"name":"반반족발(대)","value":[48,50,38]},{"id":1,"name":"반반족발(중)","value":[52,45,34]},{"id":2,"name":"튀지(대)","value":[11,15,8]},{"id":3,"name":"튀지(중)","value":[14,27,18]},{"id":4,"name":"혼자먹는족발","value":[33,42,26]},{"id":5,"name":"불튀족발(대)","value":[4,8,2]},{"id":6,"name":"불튀족발(중)","value":[6,6,5]},{"id":7,"name":"막국수","value":[60,66,41]},{"id":8,"name":"등갈비튀김","value":[11,12,13]},{"id":9,"name":"쫄면","value":[11,8,7]},{"id":10,"name":"꼬막비빔밥","value":[7,7,6]},{"id":11,"name":"주먹밥","value":[53,42,32]},{"id":12,"name":"사천볶음밥","value":[7,2,3]},{"id":13,"name":"떡볶이","value":[3,6,5]},{"id":14,"name":"어묵탕","value":[3,1,6]},{"id":15,"name":"계란찜","value":[4,3,2]},{"id":16,"name":"콜라 1.25L","value":[25,37,25]},{"id":17,"name":"소주","value":[59,29,59]},{"id":18,"name":"참이슬후레쉬","value":[3,8,4]},{"id":19,"name":"진로이즈백","value":[1,0,1]},{"id":20,"name":"처음처럼","value":[5,5,0]},{"id":21,"name":"소주행사","value":[0,0,2]},{"id":22,"name":"맥주","value":[21,15,24]},{"id":23,"name":"테라병","value":[2,0,0]},{"id":24,"name":"테라생맥주1000cc","value":[3,9,5]},{"id":25,"name":"생맥주300cc","value":[16,1,0]},{"id":26,"name":"생맥주500cc","value":[10,7,1]},{"id":27,"name":"생맥주1000cc","value":[7,7,1]},{"id":28,"name":"생맥주2700cc","value":[0,1,0]},{"id":29,"name":"음료수","value":[12,6,7]},{"id":30,"name":"콜라500ml","value":[1,0,1]},{"id":31,"name":"칠성사이다125L","value":[1,1,0]},{"id":32,"name":"환타파인애플355ml","value":[1,1,0]},{"id":33,"name":"배달횟수","value":[45,45,26]},{"id":34,"name":"공기밥","value":[2,3,2]}]

  };

  getTotalDate = async Data => {
    let result;
    // await axios({
    //   method: "post",
    //   url:
    //     "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/history",
    //   data: Data,
    // })
    //   .then(function(response) {
    //     result = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    result = this.database.totalDate;
    this.setState({
      date: [
        result[0].substring(2, 4) +
          "년 " +
          result[0].substring(5, 7) +
          "월 " +
          result[0].substring(8, 10) +
          "일",
        result[1].substring(2, 4) +
          "년 " +
          result[1].substring(5, 7) +
          "월 " +
          result[1].substring(8, 10) +
          "일",
      ],
      oriDate: [result[0], result[1]],
    });
  };

  getDayHistory = async Data => {
    function getIndex(month, day){
      let index = 0;
      let mInterval = month -8;
      if(mInterval===1){
        index += 31;
      }else if (mInterval ===2){
        index += 61;
      }
      let dInterval = day-1;
      index += dInterval;

      return index;
    }

    const _ = require("lodash")
    let dayData = _.cloneDeep(this.database.dayHistory);
    
    // await axios({
    //   method: "post",
    //   url:
    //     "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/day",
    //   data: Data,
    // })
    //   .then(function(response) {
    //     result = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    let start = Data.start;
    let end = Data.end;

    let startMonth = start.substring(5,7)*1;
    let startDay = start.substring(8, 10)*1;
    let endMonth = end.substring(5,7)*1;
    let endDay = end.substring(8, 10)*1;

    let startIndex = getIndex(startMonth, startDay);
    let endIndex = getIndex(endMonth, endDay);

    for (var product in dayData){
      dayData[product].value = dayData[product].value.slice(startIndex, endIndex+1);
    }
    
    let dayDate = _.cloneDeep(this.database.dayDate);
    dayDate = dayDate.slice(startIndex, endIndex+1);

    this.setState({ day: dayDate, dayHistory: dayData });
    //this.formatDay(result);
  };
  getWeekHistory = async Data => {
    // let result;
    // await axios({
    //   method: "post",
    //   url:
    //     "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/week",
    //   data: Data,
    // })
    //   .then(function(response) {
    //     result = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // this.formatWeek(result);

    const _ = require("lodash");

    let weekData = _.cloneDeep(this.database.weekHistory);

    let start = Data.start;
    let end = Data.end;

    let startMonth = start.substring(5,7)*1;
    let startDay = start.substring(8, 10)*1;
    let endMonth = end.substring(5,7)*1;
    let endDay = end.substring(8, 10)*1;

    
    let weekDate = _.cloneDeep(this.database.weekDate);

    let startWeekIndex, endWeekIndex;
    for (let date in weekDate){
      if (startMonth === weekDate[date].substring(0, 2)*1){
        if(startDay < weekDate[date].substring(4, 6)*1){
          startWeekIndex = date*1 -1;
          break;
        }
        if(date*1 === weekDate.length-1 || date*1 === 9 || date*1 === 5){
          startWeekIndex = date*1;
        }
      }
    }

    for (let date in weekDate){
      if (endMonth === weekDate[date].substring(10, 12)*1){
        if(endDay <= weekDate[date].substring(14, 16)*1){
          endWeekIndex = date*1;
          break;
        }
        if(endMonth+1 === weekDate[date*1+1].substring(10, 12)*1){
          endWeekIndex = date*1 +1;
          break;
        }
      }
    }

    weekDate = weekDate.slice(startWeekIndex, endWeekIndex+1);
    for (var product in weekData){
      weekData[product].value = weekData[product].value.slice(startWeekIndex, endWeekIndex+1);
    }

    this.setState({ week: weekDate, weekHistory: weekData });
    //this.formatWeek(result);
    //console.log(weekDate);
  };
  getMonthHistory = async Data => {
    // let result;
    // await axios({
    //   method: "post",
    //   url:
    //     "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/month",
    //   data: Data,
    // })
    //   .then(function(response) {
    //     result = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    // this.formatMonth(result);

    const _ = require("lodash");
    let monthData = _.cloneDeep(this.database.monthHistory);

    let start = Data.start;
    let end = Data.end;

    let startMonth = start.substring(5,7)*1;
    let endMonth = end.substring(5,7)*1;

    let startIndex = startMonth-8;
    let endIndex = endMonth-8;

    for (var product in monthData){
      monthData[product].value = monthData[product].value.slice(startIndex, endIndex+1);
    }
    
    let monthDate = _.cloneDeep(this.database.monthDate);

    monthDate = monthDate.slice(startIndex, endIndex+1);
    //console.log(monthData);

    this.setState({ month: monthDate, monthHistory: monthData });
    //this.formatMonth(result);
    //console.log(monthDate);
  };
  componentDidMount = async () => {
    if (this.props.location.state === undefined && this.state.login === false) {
      this.props.history.push("/login");
    } else {
      this.setState({ login: true });
    }
    await this.getDayHistory(this.state.history);
    await this.getWeekHistory(this.state.history);
    await this.getMonthHistory(this.state.history);
    await this.getTotalDate(this.state.totalDate);
    this.setState({ isLoading: false });
  };

  // api로 받은 데이터 파싱해서 처리 -> formatDay, formatWeek, formatMonth

  // formatDay = result => {
  //   var value = [];
  //   var values = [];
  //   var parseDay = [];
  //   var day = [];
  //   var i = 0;
  //   for (var key in result[0]) {
  //     if (i !== 0) {
  //       parseDay.push({ id: i - 1, name: key });
  //     }
  //     i = i + 1;
  //   }
  //   i = 0;
  //   for (var o in result) {
  //     for (key in result[o]) {
  //       if (i !== 0) {
  //         result[o][key] *= 1;
  //         value.push(result[o][key]);
  //       } else {
  //         day.push(result[o][key]);
  //       }
  //       i = i + 1;
  //     }
  //     i = 0;
  //     values.push(value);
  //     value = [];
  //   }
  //   for (i = 0; i < values[0].length; i = i + 1) {
  //     for (var j = 0; j < values.length; j = j + 1) {
  //       value.push(values[j][i]);
  //     }
  //     parseDay[i].value = value;
  //     value = [];
  //   }
  //   for (o in day) {
  //     day[o] = day[o].substring(5, 7) + "월 " + day[o].substring(8, 10) + "일";
  //   }
  //   this.setState({ day: day, dayHistory: parseDay });
  //   console.log(this.state.day);
  //   console.log(this.state.dayHistory);
  // };
  // formatWeek = result => {
  //   var value = [];
  //   var values = [];
  //   var parseWeek = [];
  //   var week = [];
  //   var i = 0;
  //   for (var key in result[0][0]) {
  //     if (i !== 0) {
  //       parseWeek.push({ id: i - 1, name: key });
  //     }
  //     i = i + 1;
  //   }

  //   i = 0;
  //   for (var o in result) {
  //     for (key in result[o][0]) {
  //       if (i !== 0) {
  //         result[o][0][key] *= 1;
  //         value.push(result[o][0][key]);
  //       } else {
  //         week.push(result[o][0][key]);
  //       }
  //       i = i + 1;
  //     }
  //     i = 0;
  //     values.push(value);
  //     value = [];
  //   }
  //   for (i = 0; i < values[0].length; i = i + 1) {
  //     for (var j = 0; j < values.length; j = j + 1) {
  //       value.push(values[j][i]);
  //     }
  //     parseWeek[i].value = value;
  //     value = [];
  //   }
  //   for (o in week) {
  //     week[o] =
  //       week[o].substring(5, 7) +
  //       "월 " +
  //       week[o].substring(8, 10) +
  //       "일 ~ " +
  //       week[o].substring(18, 20) +
  //       "월 " +
  //       week[o].substring(21, 23) +
  //       "일";
  //   }
  //   this.setState({ week: week, weekHistory: parseWeek });
  //   console.log(this.state.week);
  //   console.log(this.state.weekHistory);
  // };
  // formatMonth = result => {
  //   var value = [];
  //   var values = [];
  //   var parseMonth = [];
  //   var month = [];
  //   var i = 0;
  //   for (var key in result[0][0]) {
  //     if (i !== 0) {
  //       parseMonth.push({ id: i - 1, name: key });
  //     }
  //     i = i + 1;
  //   }

  //   i = 0;
  //   for (var o in result) {
  //     for (key in result[o][0]) {
  //       if (i !== 0) {
  //         result[o][0][key] *= 1;
  //         value.push(result[o][0][key]);
  //       } else {
  //         month.push(result[o][0][key]);
  //       }
  //       i = i + 1;
  //     }
  //     i = 0;
  //     values.push(value);
  //     value = [];
  //   }
  //   for (i = 0; i < values[0].length; i = i + 1) {
  //     for (var j = 0; j < values.length; j = j + 1) {
  //       value.push(values[j][i]);
  //     }
  //     parseMonth[i].value = value;
  //     value = [];
  //   }
  //   for (o in month) {
  //     month[o] = month[o] + "월";
  //   }
  //   this.setState({ month: month, monthHistory: parseMonth });
  //   console.log(this.state.month);
  //   console.log(this.state.monthHistory);
  // };

  showMenu = this.showMenu.bind(this);
  closeMenu = this.closeMenu.bind(this);
  colors = [
    "#7cb5ec",
    "#434348",
    "#90ed7d",
    "#f7a35c",
    "#8085e9",
    "#f15c80",
    "#e4d354",
    "#2b908f",
    "#f45b5b",
    "#91e8e1",
  ];
  information = [];
  notShow = [];
  smallOptions = {
    title: {
      text: "",
    },
    xAxis: {
      //categories: this.state.datePredict,
      labels: {
        //enabled: false,
      },
      minPadding: 0,
      min: 0.5,
      //endOnTick: false,
      maxPadding: 0,
      //type: "datetime",
    },
    yAxis: {
      title: {
        text: "",
      },
      labels: {
        enabled: false,
      },
    },
    chart: {
      type: "areaspline",
      width: 292,
      height: 84,
      margin: 0,
      animation: false,
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        data: [],
        marker: { radius: 0 },
        name: "",
        dashStyle: "shortdash",
        color: "",
      },
    ],
  };
  options = {
    title: {
      text: "",
    },
    xAxis: {
      //type: "datetime",
      labels: {
        //format: "{value:%b-%e}",
      },
      //pointInterval: 24 * 3600 * 1000,
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    chart: {
      type: "line",
      width: 780,
      height: 370,
      animation: false,
    },
    series: [
      {
        name: "",
        data: [],
        pointInterval: 24 * 3600 * 1000, // one day
      },
    ],
  };
  handleAddChange = data => {
    const show = this.state.isShow;
    this.setState({
      isShow: Array.from(new Set(show.concat(data))),
    });
  };
  handleRemoveChange = data => {
    const show = this.state.isShow;
    this.setState({
      isShow: show.filter(info => info !== data),
    });
  };
  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener("click", this.closeMenu);
    });
  }
  closeMenu() {
    this.setState({ showMenu: false }, () => {
      document.removeEventListener("click", this.closeMenu);
    });
  }
  setCore = id => {
    this.setState({ core: id });
  };
  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  average = arr => arr.reduce((p, c) => p + c, 0) / arr.length;
  changeTime = x => {
    this.setState({ time: x });
  };
  handleStartDate = async event => {
    await this.setState({
      history: {
        ...this.state.history,
        start: event.target.value,
      },
    });
    this.handleDate();
  };
  handleEndDate = async event => {
    await this.setState({
      history: {
        ...this.state.history,
        end: event.target.value,
      },
    });
    this.handleDate();
  };
  handleDate = () => {
    this.getDayHistory(this.state.history);
    this.getWeekHistory(this.state.history);
    this.getMonthHistory(this.state.history);
  };
  render() {
    const {
      isLoading,
      weekHistory,
      dayHistory,
      monthHistory,
      time,
    } = this.state;

    if (isLoading === false) {
      // 그래프 옵션값 바꾸기
      let p = [];
      if (time === 1) {
        p = JSON.parse(JSON.stringify(dayHistory));
        this.options.xAxis.categories = this.state.day;
      } else if (time === 2) {
        p = JSON.parse(JSON.stringify(weekHistory));
        this.options.xAxis.categories = this.state.week;
      } else {
        p = JSON.parse(JSON.stringify(monthHistory));
        this.options.xAxis.categories = this.state.month;
      }
      this.information = p.filter(
        product => this.state.isShow.indexOf(product.id) !== -1
      );
      this.notShow = p.filter(
        product => this.state.isShow.indexOf(product.id) === -1
      );
      this.options.series = this.information.map(({ value, name, id }) => ({
        name: name,
        data: value,
        color: this.colors[id % 10],
      }));
      // small week chart 옵션 바꾸기.
      const weekOptions = JSON.parse(JSON.stringify(this.smallOptions));
      const week = JSON.parse(JSON.stringify(weekHistory));
      const weekCoreSales = week.filter(
        product => this.state.core === product.id
      );
      weekOptions.series = weekCoreSales.map(({ value, name, id }) => ({
        name: name,
        data: value,
      }));
      weekOptions.series[0].color = "#ffb400";
      weekOptions.xAxis.categories = this.state.week;
      weekOptions.xAxis.max = this.state.week.length - 1.5;
      weekOptions.yAxis.max = null;
      if (this.state.week.length === 1) {
        weekOptions.series[0].data = [
          weekOptions.series[0].data[0],
          weekOptions.series[0].data[0],
        ];
        weekOptions.xAxis.categories = [this.state.week[0], this.state.week[0]];
        weekOptions.xAxis.max = this.state.week.length - 0.5;
      }
      if (this.state.week.length < 5) {
        if (Math.max.apply(null, weekCoreSales[0].value) < 3) {
          weekOptions.yAxis.max =
            Math.max.apply(null, weekCoreSales[0].value) + 1;
        } else {
          weekOptions.yAxis.max =
            Math.max.apply(null, weekCoreSales[0].value) + 5;
        }
      } else {
        if (Math.max.apply(null, weekCoreSales[0].value) === 0) {
          weekOptions.yAxis.max =
            Math.max.apply(null, weekCoreSales[0].value) + 1;
        }
      }
      const weekSum = this.average(weekOptions.series[0].data).toFixed(1);
      // small month chart 옵션 바꾸기.
      const monthOptions = JSON.parse(JSON.stringify(this.smallOptions));
      const month = JSON.parse(JSON.stringify(monthHistory));
      const monthCoreSales = month.filter(
        product => this.state.core === product.id
      );
      monthOptions.series = monthCoreSales.map(({ value, name, id }) => ({
        name: name,
        data: value,
      }));
      monthOptions.series[0].color = "#1adba2";
      monthOptions.xAxis.categories = this.state.month;
      monthOptions.xAxis.max = this.state.month.length - 1.5;
      monthOptions.yAxis.max = null;
      if (this.state.month.length === 1) {
        monthOptions.series[0].data = [
          monthOptions.series[0].data[0],
          monthOptions.series[0].data[0],
        ];
        monthOptions.xAxis.categories = [
          this.state.month[0],
          this.state.month[0],
        ];
        monthOptions.xAxis.max = this.state.month.length - 0.5;
      }
      if (this.state.month.length < 5) {
        if (Math.max.apply(null, monthCoreSales[0].value) < 3) {
          monthOptions.yAxis.max =
            Math.max.apply(null, monthCoreSales[0].value) + 1;
        } else {
          monthOptions.yAxis.max =
            Math.max.apply(null, monthCoreSales[0].value) + 5;
        }
      } else {
        if (Math.max.apply(null, monthCoreSales[0].value) === 0) {
          monthOptions.yAxis.max =
            Math.max.apply(null, monthCoreSales[0].value) + 1;
        }
      }
      const monthSum = this.average(monthOptions.series[0].data).toFixed(1);
      // small day chart 옵션 바꾸기.
      const dayOptions = JSON.parse(JSON.stringify(this.smallOptions));
      const day = JSON.parse(JSON.stringify(dayHistory));
      const dayCoreSales = day.filter(
        product => this.state.core === product.id
      );
      dayOptions.series = dayCoreSales.map(({ value, name, id }) => ({
        name: name,
        data: value,
      }));
      dayOptions.series[0].color = "#007bff";
      dayOptions.xAxis.categories = this.state.day;
      dayOptions.xAxis.max = this.state.day.length - 1.5;
      dayOptions.yAxis.max = null;
      if (this.state.day.length === 1) {
        dayOptions.series[0].data = [
          dayOptions.series[0].data[0],
          dayOptions.series[0].data[0],
        ];
        dayOptions.xAxis.categories = [this.state.day[0], this.state.day[0]];
        dayOptions.xAxis.max = this.state.day.length - 0.5;
      }
      if (this.state.day.length < 5) {
        if (Math.max.apply(null, dayCoreSales[0].value) < 3) {
          dayOptions.yAxis.max =
            Math.max.apply(null, dayCoreSales[0].value) + 1;
        } else {
          dayOptions.yAxis.max =
            Math.max.apply(null, dayCoreSales[0].value) + 5;
        }
      } else {
        if (Math.max.apply(null, dayCoreSales[0].value) === 0) {
          dayOptions.yAxis.max =
            Math.max.apply(null, dayCoreSales[0].value) + 1;
        }
      }
      const daySum = this.average(dayOptions.series[0].data).toFixed(1);
      // 핵심 제품.
      const coreProduct = p[this.state.core].name;
      /// 리스트 높이.
      let itemHeight = 365 - 29.6 * this.state.isShow.length;
      return (
        <section className="container">
          <nav className="navi">
            <Navi />
          </nav>
          <section className="contents">
            <div className="header">
              <Header
                startDate={this.state.date[0]}
                lastDate={this.state.date[1]}
              />
            </div>

            <div className="sales-history">
              <h1>판매 추이</h1>
              <div className="first-row">
                <div className="product-select">
                  <h5>핵심 제품</h5>
                  <div className="coreProduct">
                    {coreProduct}
                  </div>
                  <div className="product-menu">
                    <button className="menu" onClick={this.showMenu}>
                      Product &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|
                      &nbsp;&nbsp;&nbsp;<img src={coreimg} alt="logo" />
                    </button>
                    {this.state.showMenu
                      ? <div className="button-menu">
                          {p.map(v => {
                            return (
                              <button onClick={() => this.setCore(v.id)}>
                                {v.name}
                              </button>
                            );
                          })}
                        </div>
                      : null}
                  </div>
                </div>
                <div className="dayChart">
                  <h5>일별 판매량</h5>
                  <div className="chartSales">
                    {this.numberWithCommas(daySum)}
                  </div>
                  <div className="small-chart">
                    <Chart options={dayOptions} />
                  </div>
                </div>
                <div className="weekChart">
                  <h5>주별 판매량</h5>
                  <div className="chartSales">
                    {this.numberWithCommas(weekSum)}
                  </div>
                  <div className="small-chart">
                    <Chart options={weekOptions} />
                  </div>
                </div>
                <div className="monthChart">
                  <h5>월별 판매량</h5>
                  <div className="chartSales">
                    {this.numberWithCommas(monthSum)}
                  </div>
                  <div className="small-chart">
                    <Chart options={monthOptions} />
                  </div>
                </div>
              </div>
              <div className="second-row">
                <div className="sales-chart">
                  <div className="chart-name">판매량 추이</div>
                  <hr />
                  <div className="selectSpace">
                    <div className="selectTerm">
                      <button
                        style={
                          this.state.time === 1
                            ? {
                                backgroundColor: "#007bff",
                                color: "#fff",
                                borderRadius: "8px 0 0 8px",
                              }
                            : {
                                backgroundColor: "#fff",
                                borderRadius: "8px 0 0 8px",
                              }
                        }
                        onClick={() => this.changeTime(1)}
                      >
                        일별
                      </button>
                      <button
                        style={
                          this.state.time === 2
                            ? { backgroundColor: "#007bff", color: "#fff" }
                            : { backgroundColor: "#fff" }
                        }
                        onClick={() => this.changeTime(2)}
                      >
                        주별
                      </button>
                      <button
                        style={
                          this.state.time === 3
                            ? {
                                backgroundColor: "#007bff",
                                color: "#fff",
                                borderRadius: "0 8px 8px 0",
                              }
                            : {
                                backgroundColor: "#fff",
                                borderRadius: "0 8px 8px 0",
                              }
                        }
                        onClick={() => this.changeTime(3)}
                      >
                        월별
                      </button>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                      <input
                        type="date"
                        name="startDate"
                        value={this.state.history.start}
                        min={this.state.oriDate[0]}
                        max={this.state.history.end}
                        onChange={event => this.handleStartDate(event)}
                      />
                      <input
                        type="date"
                        name="endDate"
                        value={this.state.history.end}
                        min={this.state.history.start}
                        max={this.state.oriDate[1]}
                        onChange={event => this.handleEndDate(event)}
                      />
                    </form>
                  </div>
                  <hr />
                  <div className="real-chart">
                    <Chart options={this.options} />
                  </div>
                </div>
                <div className="salesList">
                  <div className="listName">판매 제품</div>
                  <hr />
                  <div className="productShowSpace">
                    {this.information.map(v => {
                      return (
                        <div key={v.id} className="productShow">
                          <div>
                            {v.name}
                          </div>
                          <button onClick={() => this.handleRemoveChange(v.id)}>
                            제거
                          </button>
                        </div>
                      );
                    })}
                  </div>
                  <hr />
                  <div
                    className="productNotShowSpace"
                    style={{ height: itemHeight }}
                  >
                    {this.notShow.map(product => {
                      return (
                        <div key={product.id} className="productNotShow">
                          <div>
                            {product.name}
                          </div>
                          <button
                            onClick={() => this.handleAddChange(product.id)}
                          >
                            추가
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      );
    } else {
      return (
        <section className="container">
          <nav className="navi">
            <Navi />
          </nav>
          <section className="contents">
            <div className="loader_text">Loading...</div>
          </section>
        </section>
      );
    }
  }
}

export default Home;

import React from "react";
//import axios from "axios";
import "./Login.css";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      password: "",
      error: "f",
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  }

  handleSumbit = async event => {
    event.preventDefault();
    //let result;
    const { history } = this.props;
    // await axios({
    //   method: "post",
    //   url:
    //     "https://ehhq6xajk3.execute-api.ap-northeast-2.amazonaws.com/dev/login ",
    //   data: {
    //     userid: this.state.id,
    //     userpass: this.state.password,
    //   },
    // })
    //   .then(function(response) {
    //     result = response.data;
    //   })
    //   .catch(function(error) {
    //     console.log(error);
    //   });
    if (this.state.id === "stockfree" && this.state.password === "1234") {
      history.push({
        pathname: "/",
        state: { login: true },
      });
    } else {
      this.setState({ error: true });
    }
  };
  render() {
    return (
      <div className="log-container">
        <div className="header">수프 (Stock Free)</div>
        <div className="body">
          <form id="form-login" onSubmit={this.handleSumbit}>
            <fieldset className="login-form">
              <div className="id-area">
                <label for="login-id">아이디</label>
                <input
                  id="login-id"
                  type="text"
                  name="id"
                  placeholder="아이디"
                  value={this.state.id}
                  onChange={event => this.handleInputChange(event)}
                />
              </div>
              <div className="password-area">
                <label for="login-password">비밀번호</label>
                <input
                  id="login-password"
                  type="password"
                  name="password"
                  placeholder="비밀번호"
                  value={this.state.password}
                  onChange={event => this.handleInputChange(event)}
                />
              </div>
              {this.state.error === true
                ? <div
                    style={{
                      fontSize: "12px",
                      color: "red",
                      marginBottom: "16px",
                    }}
                  >
                    아이디 또는 비밀번호가 잘못입력됐습니다.<br />다시 입력해주세요.
                  </div>
                : null}
              <button
                id="bnt-submit"
                type="submit"
                //onClick="location.href='./Home"
              >
                로그인
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;

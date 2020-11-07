import React from 'react';
import "./Upload.css"
import Navi from '../components/Navi'
import Header from '../components/Header'
import Mail from '../components/Mail'

class Upload extends React.Component {
    state = {
      isLoading: false,
      date : ['20년 04월 01일', '20년 08월 11일'],
    };
    render() {
      const { isLoading } = this.state;
    return(
        <section className="container">
        <nav className="navi">
          <Navi />
        </nav>
        <section className="contents">
          <div className="header">
            {isLoading ? (<div className="loader">
              <span className="loader_text">Loading...</span>
              </div>):(
              <Header startDate={this.state.date[0]} lastDate={this.state.date[1]} />
            )}          
          </div>
          <div>
              <Mail />
          </div>
        </section>
      </section>
    );
              }
}

export default Upload;
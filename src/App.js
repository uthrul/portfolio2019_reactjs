import React, { Component } from "react";
import "./App.css";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./components/main";
import { Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title="Saud Maruli S">
            <Navigation className="navigation">
              <Link to="/landingpage">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects">Example Projects</Link>
              <Link to="/contact">Contact</Link>
              <a
                href="https://codinghood.herokuapp.com/"
                rel="noonpener norefrrer"
                target="balnk"
              >
                MyBlog
              </a>
            </Navigation>
          </Header>
          <Drawer title="Saud Maruli S">
            <Navigation style={{ fontSize: "30px", fontFamily: "Rock Salt" }}>
              <Link to="/landingpage">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/projects"> Example Projects</Link>
              <Link to="/contact">Contact</Link>
              <a
                href="https://codinghood.herokuapp.com/"
                rel="noonpener norefrrer"
                target="balnk"
              >
                MyBlog
              </a>
            </Navigation>
          </Drawer>
          <Content>
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;

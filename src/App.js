import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div className="demo-big-content">
                <Layout>
                    <Header  className="header-color" title="Portfolio" scroll>
                        <Navigation >
                            <Link to="/landingpage">Home</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects">Example Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Header>
                    <Drawer title="Portfolio">
                        <Navigation style={{ fontSize: '30px', fontFamily: 'Anton', }}>
                            <Link to="/landingpage">Home</Link>
                            <Link to="/resume">Resume</Link>
                            <Link to="/projects"> Example Projects</Link>
                            <Link to="/contact">Contact</Link>
                        </Navigation>
                    </Drawer>
                    <Content>
                        <div className="page-content" />
                        <Main />
                    </Content>
                </Layout>
            </div>

        );
    }
}

export default App;

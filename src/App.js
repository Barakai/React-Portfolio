import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Footer from './components/Footer';
import Main from './components/Main';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header className="header-color" title={<Link style={{ textDecoration: 'none', color: 'white'}} to="/">MyPortfolio</Link>} scroll>
            <Navigation>
                <Link to="/About">About Me</Link>
                <Link to="/Portfolio">Projects</Link>
                <Link to="/Contact">Contact</Link>
                

            </Navigation>
        </Header>
        <Drawer className ="drawer" title={<Link style={{ textDecoration: 'none', color: 'black'}} to="/">MyPortfolio</Link>}>
            <Navigation>
              <Link to="/About">About Me</Link>
              <Link to="/Portfolio">Projects</Link>
              <Link to="/Contact">Contact</Link>
              <Link to="/Footer">Footer</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
        <Footer/>
    </Layout>
    
</div>

    );
  }
}

export default App;

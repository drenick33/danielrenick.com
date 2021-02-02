import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.less';
import Navbar from './components/layout/Navbar';
import Main from './components/pages/main/Main';
import Blog from './components/pages/blog/Blog';
import BlogBrowser from './components/pages/blog/BlogBrowser';
import Portfolio from './components/pages/portfolio/Portfolio';
import About from './components/pages/about/About';

import { Layout } from 'antd';
const { Header } = Layout;

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header>
          <Navbar />
        </Header>
        <Switch>
          <Route exact path='/' component={Main} />
          <Route exact path='/blog/' component={BlogBrowser} />
          <Route path='/blog/:postId' component={Blog} />
          <Route exact path='/portfolio' component={Portfolio} />
          <Route exact path='/About' component={About} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

// const mapDispatchToProps = (dispatch: any) => ({
//   loadUser: () => dispatch({ type: 'USER_LOADING' }),
// });

export default App;

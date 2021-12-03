import React from 'react';
import './App.css';
import StockAvarage from './pages/StockAvarage';
import StockProfit from './pages/StockProfit';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header';

function App() {
  return (
    <div>
      <Header />
      <div id="body">
        <Switch>
          <Redirect exact path="/" to="/stockavarage" />
          <Route path="/stockavarage" component={StockAvarage} />
          <Route path="/stockprofit" component={StockProfit} />
        </Switch>
      </div>
      <div id="footer">
        <span className="footer-made-name">Since 2021 developer : Jeong min Lee</span>
        <span className="footer-contact-us">Contact US : jmboc.0501@gmail.com</span>
      </div>
    </div>
  );
}

export default App;

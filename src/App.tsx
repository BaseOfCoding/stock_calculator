import React from 'react';
import logo from './logo.svg';
import './App.css';
import StockAvarage from './pages/StockAvarage';
import StockProfit from './pages/StockProfit';
import { Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <Switch>
      <Redirect exact path="/" to="/stockavarage" />
      <Route path="/stockavarage" component={StockAvarage} />
      <Route path="/stockprofit" component={StockProfit} />
    </Switch>
  );
}

export default App;

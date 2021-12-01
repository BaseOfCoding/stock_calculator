import React from 'react';
import './App.css';
import StockAvarage from './pages/StockAvarage';
import StockProfit from './pages/StockProfit';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './components/header/header';

function App() {
  return (
    <div id="header">
      <Header>
        <div id="body">
          <Switch>
            <Redirect exact path="/" to="/stockavarage" />
            <Route path="/stockavarage" component={StockAvarage} />
            <Route path="/stockprofit" component={StockProfit} />
          </Switch>
        </div>
      </Header>
    </div>
  );
}

export default App;

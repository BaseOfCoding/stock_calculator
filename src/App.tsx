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
      {/*div로 감싼 후, 먼저 Header 컴포넌트를 실행해서, 메뉴 헤더를 보이게 함. App.tsx에 많은 css가 보이면 가독성이 떨어지기에, Header는 Header로 따로 빼놓고 사용.*/}
      <div id="body">
        <Switch>
          <Redirect exact path="/" to="/stockavarage" />
          <Route exact path="/stockavarage" component={StockAvarage} />
          <Route exact path="/stockprofit" component={StockProfit} />
        </Switch>
        {/* body라는 id를 가진 div로 나누어, 주식 평단계산과, 주식 수익계산 뷰를 보여주게 하고, react-router-dom에서 제공하는 Switch를 이용해서, 각 메뉴를 누를 때마다 url을 다르게 해서, 평단 계산 또는 수익 계산 뷰를 보여주게 한다. */}
      </div>
      <div id="footer">
        <span className="footer-made-name">Since 2021 developer : Jeong min Lee</span>
        <span className="footer-contact-us">Contact US : jmboc.0501@gmail.com</span>
      </div>
      {/* footer쪽은, 언제 누가 만들었는 지와 개발자의 이메일을 작성 */}
    </div>
  );
}

export default App;

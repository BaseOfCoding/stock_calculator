import React from 'react';
import { Link } from 'react-router-dom';
import '../StockProfit/index.css';

const StockProfit = () => {
  return (
    <div>
      <div className="stock-profit-body">
        <div className="stock-profit-side" />
        <div className="stock-profit-center">
          <Title />
        </div>
        <div className="stock-profit-side" />
      </div>
    </div>
  );
};

const Title = () => {
  return (
    <div>
      <div className="stock-profit-title">
        <i className="fas fa-calculator"></i>
        <h2>주식(코인) 수익 계산</h2>
      </div>
      <div className="stock-profit-help">
        <span>
          현재 페이지는 주식(코인) 평단 계산 메뉴입니다.
          <br />
          <span>수익 계산 메뉴로 넘어가시려면</span>
          <Link to="/stockavarage">{' 평단 계산(여기)'}</Link>
          <span> 를 클릭해주세요.</span>
        </span>
      </div>
    </div>
  );
};

export default StockProfit;

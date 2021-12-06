import { Button, Input } from 'antd';
import '../StockAvarage/index.css';

const StockAvarage = () => {
  const current_stock_style = {
    background: 'orange',
  };

  const buy_stock_style = {
    background: 'green',
  };

  const result_stock_style = {
    background: 'skyblue',
  };

  return (
    <div>
      <div className="body">
        <div className="side" />
        <div className="center">
          <div className="title">
            <i className="fas fa-calculator"></i>
            <h2>주식(코인) 평단 계산</h2>
          </div>
          {/* current_stock ( 현재 평단가 그룹 ) */}
          <div style={current_stock_style} className="stock-box">
            <h3>현재 평단가</h3>
            <div className="stock-box-child">
              <div className="input-group">
                <input placeholder="현재 평단" type="text" />
                <div>원</div>
              </div>
              <div className="input-group">
                <input placeholder="보유 주식 수" type="text" />
                <div>원</div>
              </div>
            </div>
            <div className="input-group-allPrice">
              <input placeholder="현재 총 매입가" type="text" disabled />
              <div>원</div>
            </div>
          </div>
          {/* buy_stock ( 구매 평단가 그룹 ) */}
          <div style={buy_stock_style} className="stock-box">
            <h3>현재 평단가</h3>
            <div className="stock-box-child">
              <div className="input-group">
                <input placeholder="현재 평단" type="text" />
                <div>원</div>
              </div>
              <div className="input-group">
                <input placeholder="보유 주식 수" type="text" />
                <div>원</div>
              </div>
            </div>
            <div className="input-group-allPrice">
              <input placeholder="현재 총 매입가" type="text" disabled />
              <div>원</div>
            </div>
          </div>
          {/* result_stock ( 결과 평단가 그룹 ) */}
          <div style={result_stock_style} className="stock-box">
            <h3>현재 평단가</h3>
            <div className="stock-box-child">
              <div className="input-group">
                <input placeholder="현재 평단" type="text" />
                <div>원</div>
              </div>
              <div className="input-group">
                <input placeholder="보유 주식 수" type="text" />
                <div>원</div>
              </div>
            </div>
            <div className="input-group-allPrice">
              <input placeholder="현재 총 매입가" type="text" disabled />
              <div>원</div>
            </div>
          </div>
        </div>

        <div className="side" />
      </div>
    </div>
  );
};

export default StockAvarage;

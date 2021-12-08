import '../StockAvarage/index.css';
import { Link } from 'react-router-dom';
import Update from 'src/components/update/update';
import useInputComma from 'src/hooks/useInput';

// functions

/* 타이틀에 관련 된 html 태그를 가지고 있는 함수 */
const Title = () => {
  return (
    <div>
      <div className="title">
        <i className="fas fa-calculator"></i>
        <h2>주식(코인) 평단 계산</h2>
      </div>
      <div className="help">
        <span>
          현재 페이지는 주식(코인) 평단 계산 메뉴입니다.
          <br />
          <span>수익 계산 메뉴로 넘어가시려면</span>
          <Link to="/stockprofit">{' 수익 계산(여기)'}</Link>
          <span> 를 클릭해주세요.</span>
        </span>
      </div>
    </div>
  );
};

// variable

/* 각각 클래스로 주기는 그래서, style 변수를 만들어서 background-color를 다르게 주기 위한 객체 */
const current_stock_style = {
  background: 'orange',
};

const buy_stock_style = {
  background: 'green',
};

const result_stock_style = {
  background: 'skyblue',
};

const StockAvarage = () => {
  const [current_avg_price, setCurrentAvgPrice, current_avg_inputed] = useInputComma('');
  const [current_stock, setCurrentStock, current_stock_inputed] = useInputComma('');
  const [current_result_price, setCurrentResultPrice] = useInputComma('');
  const [buy_avg_price, setBuyAvgPrice, buy_avg_inputed] = useInputComma('');
  const [buy_stock, setBuyStock, buy_stock_inputed] = useInputComma('');
  const [buy_result_price, setResultPrice] = useInputComma('');

  return (
    <div>
      <div className="body">
        <div className="side" />
        <div className="center">
          <Title />

          {/* current_stock ( 현재 평단가 그룹 ) */}
          <div style={current_stock_style} className="stock-box">
            <h3>현재 평단가</h3>
            <div className="stock-box-child">
              <div className="input-group">
                <input
                  placeholder="현재 평단 "
                  type="text"
                  maxLength={17}
                  value={current_avg_price}
                  onChange={setCurrentAvgPrice}
                />
                <div>원</div>
              </div>
              <div className="input-group">
                <input
                  placeholder="보유 주식 수 "
                  type="text"
                  maxLength={10}
                  value={current_stock}
                  onChange={setCurrentStock}
                />
                <div>주</div>
              </div>
            </div>
            <div className="input-group-allPrice">
              <input placeholder="현재 총 매입가 " type="text" disabled />
              <div>원</div>
            </div>
          </div>

          {/* buy_stock ( 구매 평단가 그룹 ) */}
          <div style={buy_stock_style} className="stock-box">
            <h3>구매 평단가</h3>
            <div className="stock-box-child">
              <div className="input-group">
                <input
                  placeholder="구매 가격 "
                  type="text"
                  maxLength={17}
                  value={buy_avg_price}
                  onChange={setBuyAvgPrice}
                />
                <div>원</div>
              </div>
              <div className="input-group">
                <input
                  placeholder="구매 주식 수 "
                  type="text"
                  maxLength={10}
                  value={buy_stock}
                  onChange={setBuyStock}
                />
                <div>주</div>
              </div>
            </div>
            <div className="input-group-allPrice">
              <input placeholder="구매 총 매입가 " type="text" disabled />
              <div>원</div>
            </div>
          </div>

          {/* result_stock ( 최종 평단가 그룹 ) */}
          <div style={result_stock_style} className="stock-box">
            <h3>최종 평단가</h3>
            <div className="stock-box-child">
              <div className="input-group">
                <input placeholder="최종 평단 " type="text" disabled maxLength={17} />
                <div>원</div>
              </div>
              <div className="input-group">
                <input placeholder="최종 보유 주식 수 " type="text" disabled maxLength={10} />
                <div>주</div>
              </div>
            </div>
            <div className="input-group-allPrice">
              <input placeholder="구입시 총 매입가 " type="text" disabled />
              <div>원</div>
            </div>
          </div>
          <Update />
        </div>
        <div className="side" />
      </div>
    </div>
  );
};

export default StockAvarage;

import '../StockAvarage/index.css';
import { Link } from 'react-router-dom';
import useInputComma from 'src/hooks/useInputComma';
import { inputAutoComma } from 'src/utils/inputAutoComma';

type STOCK_STYLE = {
  background: string;
};

const StockAvarage = () => {
  let box_style: STOCK_STYLE;

  const [current_avg_price, setCurrentAvgPrice, current_avg_inputed] = useInputComma('');
  const [current_stock, setCurrentStock, current_stock_inputed] = useInputComma('');
  const [buy_avg_price, setBuyAvgPrice, buy_avg_inputed] = useInputComma('');
  const [buy_stock, setBuyStock, buy_stock_inputed] = useInputComma('');

  let current_result_price;
  let buy_result_price;
  let final_result_avg_price, final_result_stock, final_result_price;

  current_result_price =
    current_avg_inputed && current_stock_inputed ? EachAvgCalculateAndComma(current_avg_price, current_stock) : '';

  buy_result_price = buy_avg_inputed && buy_stock_inputed ? EachAvgCalculateAndComma(buy_avg_price, buy_stock) : '';

  if (current_avg_inputed && current_stock_inputed && buy_avg_inputed && buy_stock_inputed) {
    final_result_stock = ResultCalculateAndComma(current_stock, buy_stock);
    final_result_price = ResultCalculateAndComma(current_result_price, buy_result_price);
    final_result_avg_price = ResultAvgCalculateAndComma(final_result_stock, final_result_price);
  } else {
    final_result_avg_price = final_result_price = final_result_stock = '';
  }

  return (
    <div>
      <div className="stock-avg-body">
        <div className="stock-avg-side" />
        <div className="stock-avg-center">
          <Title />

          {/* current_avg_stock ( 현재 평단가 그룹 ) */}
          <div style={(box_style = { background: '#e3b448' })} className="stock-avg-stock-box">
            <h3>현재 평단가</h3>
            <div className="stock-avg-stock-box-child">
              <div className="stock-avg-input-group">
                <input
                  placeholder="현재 평단 "
                  type="text"
                  maxLength={17}
                  value={current_avg_price}
                  onChange={setCurrentAvgPrice}
                />
                <div>원</div>
              </div>
              <div className="stock-avg-input-group">
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
            <div className="stock-avg-input-group-allPrice">
              <input placeholder="현재 총 매입가 " type="text" value={current_result_price} disabled />
              <div>원</div>
            </div>
          </div>

          {/* buy_avg_stock ( 구매 평단가 그룹 ) */}
          <div style={(box_style = { background: '#cbd18f' })} className="stock-avg-stock-box">
            <h3>구매 평단가</h3>
            <div className="stock-avg-stock-box-child">
              <div className="stock-avg-input-group">
                <input
                  placeholder="구매 가격 "
                  type="text"
                  maxLength={17}
                  value={buy_avg_price}
                  onChange={setBuyAvgPrice}
                />
                <div>원</div>
              </div>
              <div className="stock-avg-input-group">
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
            <div className="stock-avg-input-group-allPrice">
              <input placeholder="구매 총 매입가 " type="text" value={buy_result_price} disabled />
              <div>원</div>
            </div>
          </div>

          {/* result_avg_stock ( 최종 평단가 그룹 ) */}
          <div style={(box_style = { background: '#3a6b35' })} className="stock-avg-stock-box">
            <h3>최종 평단가</h3>
            <div className="stock-avg-stock-box-child">
              <div className="stock-avg-input-group">
                <input placeholder="최종 평단 " type="text" value={final_result_avg_price} disabled maxLength={17} />
                <div>원</div>
              </div>
              <div className="stock-avg-input-group">
                <input
                  placeholder="최종 보유 주식 수 "
                  type="text"
                  value={final_result_stock}
                  disabled
                  maxLength={10}
                />
                <div>주</div>
              </div>
            </div>
            <div className="stock-avg-input-group-allPrice">
              <input placeholder="구입시 총 매입가 " type="text" value={final_result_price} disabled />
              <div>원</div>
            </div>
          </div>
        </div>
        <div className="stock-avg-side" />
      </div>
    </div>
  );
};

// functions

/* 타이틀에 관련 된 html 태그를 가지고 있는 함수 */
const Title = () => {
  return (
    <div>
      <div className="stock-avg-title">
        <i className="fas fa-calculator"></i>
        <h2>주식(코인) 평단 계산</h2>
      </div>
      <div className="stock-avg-help">
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

const EachAvgCalculateAndComma = (temp_avg_price: string, temp_stock: string): string => {
  var temp_current_result_price = Number(temp_avg_price.replace(/,/g, '')) * Number(temp_stock.replace(/,/g, ''));
  return inputAutoComma(temp_current_result_price.toString());
};

const ResultCalculateAndComma = (temp_avg_price: string, temp_stock: string): string => {
  var temp_result_price;

  temp_result_price = Number(temp_avg_price.replace(/,/g, '')) + Number(temp_stock.replace(/,/g, ''));
  return inputAutoComma(temp_result_price.toString());
};

const ResultAvgCalculateAndComma = (temp_result_stock: string, temp_result_price: string): string => {
  var temp_result_avg_price = Math.floor(
    Number(temp_result_price.replace(/,/g, '')) / Number(temp_result_stock.replace(/,/g, '')),
  );
  return inputAutoComma(temp_result_avg_price.toString());
};

export default StockAvarage;

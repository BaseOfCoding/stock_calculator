import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useInputComma from 'src/hooks/useInputComma';
import { inputAutoComma } from 'src/utils/inputAutoComma';
import '../StockProfit/index.css';

type BOX_STYLE = {
  background: string;
};

const StockProfit = () => {
  let box_style: BOX_STYLE;

  const [stock, setStock, stock_inputed] = useInputComma('');
  const [avg_price, setAvgPrice, avg_price_inputed] = useInputComma('');
  const [sellPrice, setSellPrice, sell_price_inputed] = useInputComma('');
  const [dollarData, setDollarData] = useState(0);
  const [errorData, setErrorData] = useState('');

  let domesticProfit;
  let overseasProfit;

  useEffect(() => {
    axios
      .get('https://api.manana.kr/exchange/rate.json')
      .then((res) => {
        setDollarData(res.data[1].rate);
        setErrorData(`현재 환율은 ${res.data[1].rate}$ 입니다.`);
      })
      .catch((err) => {
        console.error(err.response);
        setDollarData(1200);
        setErrorData('현재 환율 서버에 에러가 생겨, 환율 1200원으로 설정되었습니다.');
      });
  }, []);

  if (stock_inputed && avg_price_inputed && sell_price_inputed) {
    var temp_stock: number = Number(stock.replace(/,/g, ''));
    var temp_avg_price: number = Number(avg_price.replace(/,/g, ''));
    var temp_sell_price: number = Number(sellPrice.replace(/,/g, ''));
    var sign: string;

    sign = temp_avg_price > temp_sell_price ? '-' : '+';

    domesticProfit = getDomesticProfit(temp_stock, temp_sell_price, temp_avg_price, sign);
    overseasProfit = getOverseasProfit(temp_stock, temp_sell_price, temp_avg_price, sign, dollarData);
  } else {
    domesticProfit = overseasProfit = '';
  }

  return (
    <div>
      <div className="stock-profit-body">
        <div className="stock-profit-side" />
        <div className="stock-profit-center">
          <Title />
          <div style={(box_style = { background: '#ffcce7' })} className="stock-profit-box">
            <span>1. 주식 수를 입력해주세요.</span>
            <div className="stock-profit-input-group">
              <input
                placeholder="가지고 있는 주식 수를 입력하세요 "
                type="text"
                maxLength={10}
                value={stock}
                onChange={setStock}
              />
              <span>주</span>
            </div>
          </div>

          <div style={(box_style = { background: '#daf2dc' })} className="stock-profit-box">
            <span>2. 주식의 평단가를 입력해주세요.</span>
            <div className="stock-profit-input-group">
              <input
                placeholder="주식의 평단가를 입력해주세요. "
                type="text"
                maxLength={17}
                value={avg_price}
                onChange={setAvgPrice}
              />
              <span>원</span>
            </div>
          </div>

          <div style={(box_style = { background: '#81b7d2' })} className="stock-profit-box">
            <span>3. 매도하실 금액을 입력해주세요.</span>
            <div className="stock-profit-input-group">
              <input
                placeholder="주식 매도가를 입력해주세요. "
                type="text"
                maxLength={17}
                value={sellPrice}
                onChange={setSellPrice}
              />
              <span>원</span>
            </div>
          </div>

          <div style={(box_style = { background: '#4d5198' })} className="stock-profit-box">
            <span>4. 결과</span>
            <div className="stock-profit-contents">{'< 국내 주식 수익금 >'}</div>
            <div className="stock-profit-input-group">
              <input type="text" maxLength={17} value={domesticProfit} disabled />
              <span>원</span>
            </div>
            <div className="stock-profit-contents">{'< 해외 주식 수익금 >'}</div>
            <div className="stock-profit-input-group">
              <input type="text" value={overseasProfit} disabled />
              <span>원</span>
            </div>
            <div className="stock-profit-contents" style={{ color: '#ed3572', marginBottom: '10px' }}>
              수수료가 포함되어 있지 않기 때문에,
              <br />
              수익의 차이가 생길 수 있습니다.
            </div>
          </div>

          <div className="stock-profit-error">
            <span>{errorData}</span>
          </div>
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
          현재 페이지는 주식(코인) 수익 계산 메뉴입니다.
          <br />
          <span>평단 계산 메뉴로 넘어가시려면</span>
          <Link to="/stockavarage">{' 평단 계산(여기)'}</Link>
          <span> 를 클릭해주세요.</span>
        </span>
      </div>
    </div>
  );
};

const getDomesticProfit = (stock: number, sell_price: number, avg_price: number, sign: string): string => {
  return sign + inputAutoComma(Math.floor(stock * sell_price - stock * avg_price).toString());
};

const getOverseasProfit = (
  stock: number,
  sell_price: number,
  avg_price: number,
  sign: string,
  dollarData: number,
): string => {
  var temp_overseas, tex;
  var temp_sell_all_price: number, temp_avg_all_price: number, temp_calculate_all_price: number;

  temp_avg_all_price = stock * avg_price * dollarData;
  temp_sell_all_price = stock * sell_price * dollarData;
  temp_calculate_all_price = temp_sell_all_price - temp_avg_all_price;

  if (sign != '-' && temp_calculate_all_price > 2500000) {
    tex = '양도 소득세 포함 : ';
    let temp_tex_calc: number;
    temp_tex_calc = (temp_calculate_all_price - 2500000) * 0.22;
    temp_calculate_all_price -= temp_tex_calc;
  } else {
    tex = '';
  }

  temp_overseas = tex + sign + inputAutoComma(Math.floor(temp_calculate_all_price).toString());

  return temp_overseas;
};

export default StockProfit;

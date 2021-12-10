import '../Home/index.css';

const Home = () => {
  return (
    <div>
      <div className="home-body">
        <div className="home-side" />
        <div className="home-center">
          <div className="home-introduction">
            <span>
              안녕하세요. 주식을 좋아하는
              <br />
              개발자가 만든 주식 계산기입니다.
            </span>
            <span>
              <br />
              <br />
              <br />
              사용에 문제가 있으시다면, <br />
              jmboc.0501@gmail.com로 연락을 주시면 감사하겠습니다.
            </span>
          </div>
        </div>
        <div className="home-side" />
      </div>
    </div>
  );
};

export default Home;

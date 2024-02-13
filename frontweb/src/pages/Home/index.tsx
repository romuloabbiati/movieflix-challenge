import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Login from 'pages/Home/Login';
import { getTokenData } from 'util/requests';
import './styles.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>{getTokenData()?.user_name}</h1>
      <div className="home-card">
        <div className="home-content-image-container">
          <div className="content-container">
            <h1>Avalie Filmes</h1>
            <p>Diga o que você achou do seu filme favorito</p>
          </div>
          <div className="home-image">
            <MainImage />
          </div>
        </div>
        <div className="home-login-container base-card">
          <Login />
        </div>
      </div>
    </div>
  );
};

export default Home;

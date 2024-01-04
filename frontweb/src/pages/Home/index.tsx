import { ReactComponent as MainImage } from 'assets/images/main-image.svg';
import Navbar from "components/Navbar";
import Login from 'pages/Admin/Login';
import './styles.css';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="home-card">
          <div className="home-content-image-container">
            <h1>Avalie Filmes</h1>
            <p>Diga o que você achou do seu filme favorito</p>
            <MainImage />
          </div>
          <div className="home-login-container">
            <Login />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

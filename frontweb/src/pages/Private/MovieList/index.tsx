import { Link } from 'react-router-dom';

import './styles.css';

const MovieList = () => {
  return (
    <div className="movie-list-container">
      <h1>Tela listagem de filmes</h1>
      <div className="links-container">
        <div className="first-movie-link">
          <Link to="/movies/1">Acessar /movies/1</Link>
        </div>
        <div>
          <Link to="/movies/2">Acessar /movies/2</Link>
        </div>
      </div>
    </div>
  );
};

export default MovieList;

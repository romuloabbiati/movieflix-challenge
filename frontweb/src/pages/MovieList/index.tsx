import './styles.css';

const MovieList = () => {
  return (
    <div className="movie-list-container">
      <h1>Tela listagem de filmes</h1>
      <div className="links-container">
        <div className="first-movie-link">
          <a href="#">Acessar /movies/1</a>
        </div>
        <div>
          <a href="#">Acessar /movies/2</a>
        </div>
      </div>
    </div>
  );
};

export default MovieList;

import ButtonIcon from 'components/ButtonIcon';
import './styles.css';


// this code was done based on the lecture 08-08 section 2
const MovieDetails = () => {
  return (
    <div className="movie-details-container">
      <h1>Tela detalhes do filme id: 1</h1>
      <div className="movie-review-input-card base-card">
        {/* <div> */}
          <input 
            type="text" 
            name="review" 
            placeholder="Deixe sua avaliação aqui" 
          />
        {/* </div> */}
        <ButtonIcon text="Salvar avaliação" />
      </div>
      <div className="movie-reviews-card base-card">
        <h3>⭐️ Maria Silva</h3>
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>

        <h3>⭐️ Maria Silva</h3>
        <p>Gostei muito do filme. Foi muito bom mesmo. Pena que durou pouco.</p>
      </div>
    </div>
  );
};

export default MovieDetails;

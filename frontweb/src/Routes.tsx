import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import MovieDetails from 'pages/Private/MovieDetails';
import MovieList from 'pages/Private/MovieList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        {/* usar PrivateRoute para encapsular 
        MovieList e MovieDetails */}
        <Route path="/movies" exact>
          <MovieList />
        </Route>
        <Route path="/movies/:movies">
          <MovieDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

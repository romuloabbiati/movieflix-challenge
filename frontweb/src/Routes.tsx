import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import MovieDetails from 'pages/Private/MovieDetails';
import MovieList from 'pages/Private/MovieList';
import { Router, Route, Switch } from 'react-router-dom';
import history from 'util/history';

const Routes = () => {
  return (
    <Router history={history}>
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
    </Router>
  );
};

export default Routes;

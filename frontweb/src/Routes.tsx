import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import MovieDetails from 'pages/Private/MovieDetails';
import MovieList from 'pages/Private/MovieList';
import { Route, Router, Switch } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
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
        
        <PrivateRoute path='/movies'>
          <Route path="/movies" exact>
            <MovieList />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetails />
          </Route>
        </PrivateRoute>
      </Switch>
    </Router>
  );
};

export default Routes;

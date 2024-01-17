import Navbar from 'components/Navbar';
import Home from 'pages/Home';
import MovieList from 'pages/MovieList';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Routes = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/movies">
          <MovieList />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

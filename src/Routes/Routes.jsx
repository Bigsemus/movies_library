import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LogIn from '../pages/LogIn/LogIn';
import Registration from '../pages/Registration/Registration';
import EditMovie from '../pages/EditMovie/EditMovie';
import MainPage from '../pages/MainPage/MainPage';
import Actor from '../pages/Actor/Actor';
import Movie from '../pages/Movie/Movie';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LogIn} />
    <Route path="/register" component={Registration} />
    <Route path="/movies">
      {({ match }) => (
        <Switch>
          <Route path={`${match.path}/:movieID/edit`} component={EditMovie} />
          <Route path={`${match.path}/:movieID/actor`} component={Actor} />
          <Route path={`${match.path}/:movieID`} component={Movie} />
          <Route path={`${match.path}`} component={MainPage} />
        </Switch>
      )}
    </Route>
    <Route path="*" component={LogIn} />
  </Switch>
);

export default Routes;

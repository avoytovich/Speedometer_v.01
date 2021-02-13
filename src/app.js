import React, { useEffect, useReducer } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import LogRocket from 'logrocket';

import history from './helper/history';
import Context from './helper/context';
import generalReducer from './utils/generalReducer';
import { Home, Diagnostic, ChipTunning, DeleteFilter, Test } from './components';

LogRocket.init('6vridg/test');

const App = props => {

  const [store, dispatch] = useReducer(generalReducer, {});

  useEffect(() => {}, []);

  //console.log('store', store);
  return(
    <Context.Provider value={{dispatch, store}}>
      <Router history={history}>
        <Switch>
          <Route path="/speedometer" component={Home} />
          <Route path="/diagnostic" component={Diagnostic} />
          <Route path="/chip-tuning" component={ChipTunning} />
          <Route path="/delete-filter" component={DeleteFilter} />
          <Route path="/shutting-valve" component={Test} />
          <Route path="/delete-system" component={Test} />
          <Route path="/correction-speedometer" component={Test} />
          <Route path="/contact" component={Test} />
          <Redirect from="/" to="/speedometer" />
        </Switch>
      </Router>
    </Context.Provider>
  );
}

export default App;

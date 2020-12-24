import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './domain/Main';
import Completed from './domain/Completed/Completed';
import Admin from './domain/Admin/Admin';
import './assets/scss/style.scss';
import './assets/dist/tailwind.css';

function App() {
  return (
    <div className='App '>
      <Router>
        <Switch>
          <Route path='/' component={Main} exact />
          <Route path='/completed' component={Completed} exact />
          <Route path='/admin' component={Admin} exact />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

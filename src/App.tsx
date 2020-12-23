import React from 'react';

import './assets/scss/style.scss';
import './assets/dist/tailwind.css';
/* import Main from './domain/Main'; */
import Completed from './domain/Completed/Completed';

function App() {
  return (
    <div className='App '>
      <Completed />
    </div>
  );
}

export default App;

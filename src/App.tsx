import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';
import configureStore from '../src/store/configureStore';
import Home from 'pages/Home';

export interface ListItem {
  value: number;
}

const configuredStore = configureStore();

function App() {
  return (
    <Provider store={configuredStore}>
      <BrowserRouter>
        <div className='App'>
          <Route path='/' component={Home} />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

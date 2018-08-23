import 'babel-core/polyfill';
const fetch = require('isomorphic-fetch')
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import GameCommunity from './containers/GameCommunity';
import configureStore from './store/configureStore';

//const store = configureStore();
fetch('http://localhost:8080/v1/posts', {
            method: 'get',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
.then(res => res.json())
.then(data => {
  console.log(data);
  const store = configureStore({ posts: data });

  render(
    <Provider store={store}>
      <GameCommunity /> 
    </Provider>,
      document.getElementById('root')
  );
});

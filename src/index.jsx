import React, { Component } from 'react';
import ReactDom from 'react-dom';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import CategoryList from 'components/CategoryList';
import ProductList from 'components/ProductList';

import allReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import './assets/styles.scss';

const store = createStore(allReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && 
 window.__REDUX_DEVTOOLS_EXTENSION__());

class App extends Component {  
  render() {
    console.log(store.getState());
    return (
      <div>
        <CategoryList />
        <ProductList />
      </div>
    );
  }
}

ReactDom.render(
  <Provider store={store}>
    <App />    
  </Provider>
  ,
  document.getElementById('main'));
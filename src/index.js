import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import App from './app';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducer';
import './index.css'

const store = createStore(rootReducer);

ReactDOM.render(

    <Provider store={store}> <App /> </Provider> ,
    document.getElementById('app')
);
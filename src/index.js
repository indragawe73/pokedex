import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from "react-router";

import history from './history'; 
import App from './App';
import store from './store';

import * as serviceWorker from './serviceWorker';

const app = (
    <Provider store={store}>
        <Router history={history}>
        	<App />
        </Router>
    </Provider>
);

ReactDOM.render( app, document.getElementById('root'));
serviceWorker.register()

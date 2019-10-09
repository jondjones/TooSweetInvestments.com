import 'bootstrap/dist/css/bootstrap.min.css';
import Popper from 'popper.js';
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'easing';
import 'scrollreveal';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();

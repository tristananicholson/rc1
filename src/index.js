import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App title="React Person Manager"/>, document.getElementById('root'));
registerServiceWorker();

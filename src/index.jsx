require("./styles/scss/App.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

console.log(App)
ReactDOM.render(<App />, document.getElementById('react-root'));

registerServiceWorker();

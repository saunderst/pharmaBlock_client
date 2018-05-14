require("./styles/scss/App.scss");

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';

import Resource from './models/resource.js'

Resource('patients', '0xBb16559B164e4f0B872caAA640Dc1CCbf1f3E8b2').signContract('0xd49bDC6802Acc58931591749607ad08cb13F8e67')
.then(resp => console.log(resp));

// console.log(App)
// ReactDOM.render(<App />, document.getElementById('react-root'));

// registerServiceWorker();

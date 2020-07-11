import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import 'bootstrap/dist/css/bootstrap.min.css';

//console.log('Hello, world!');
ReactDOM.render(<App />, document.getElementById('root'));

//module.hot.accept();
if (module.hot) {
    module.hot.accept();
}
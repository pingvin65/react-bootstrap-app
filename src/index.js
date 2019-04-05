import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//import 'bootstrap/dist/css/bootstrap.min.css';

//console.log('Hello, world!');
ReactDOM.render(
//    <div>{title}</div>,
<App />,
    document.getElementById('app')
);

//module.hot.accept();
if (module.hot) {
    module.hot.accept();
}
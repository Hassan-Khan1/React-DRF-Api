import React from 'react';
import ReactDOM from 'react-dom';

// components
import App from './App';

// contexts
import { UserProvider } from './context/UserContext';

// styles
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
import './index.css';

// report vitals / others
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

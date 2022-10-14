import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'antd/dist/antd.variable.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import { Provider } from 'mobx-react'
import stores from '@/stores'
ConfigProvider.config({
  theme: {
    primaryColor: '#25b864',
  },
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider {...stores}>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </Provider>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

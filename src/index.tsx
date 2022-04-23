import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { App } from './App';
import './index.scss';
// import { AppClass } from './AppClass';

const container = document.getElementById('root') as HTMLElement;

const root = ReactDOMClient.createRoot(container);

root.render(
  <React.StrictMode>
    <App />
    {/* <AppClass autorValue={''} messageValue={''} /> */}
  </React.StrictMode>
);

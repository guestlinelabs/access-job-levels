import React from 'react'
import App from './App.tsx'
import { BrowserRouter } from "react-router-dom";
import { hydrate, render } from "react-dom";

import './index.css'

const App1 = () => <React.StrictMode>
  <BrowserRouter>
    <App />
  </BrowserRouter>
</React.StrictMode>;

const rootElement = document.getElementById("root");
if (rootElement && rootElement.hasChildNodes()) {
  hydrate(<App1 />, rootElement);
} else {
  render(<App1 />, rootElement);
}

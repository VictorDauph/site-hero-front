import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./style/CSS/style.css"
import { EmailContextProvider } from './contexts/EmailContext';


//BrowserRouter est le router spécifique à react qui gère le changement de page onepage
import {BrowserRouter} from "react-router-dom"; //BrowserRouter est l'élément qui permet de gérer le changement de pages dans React

ReactDOM.render(
  <EmailContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </EmailContextProvider>,
  document.getElementById('root')
);

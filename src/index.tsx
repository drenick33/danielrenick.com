import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import { ThemeSwitcherProvider } from 'react-css-theme-switcher';

const themes = {
  default: `${process.env.PUBLIC_URL}/breezePurple-theme.css`,
  dark: `${process.env.PUBLIC_URL}/dark-theme.css`,
  light: `${process.env.PUBLIC_URL}/light-theme.css`,
  dracula: `${process.env.PUBLIC_URL}/dracula-theme.css`,
  monokai: `${process.env.PUBLIC_URL}/monokai-theme.css`,
  nord: `${process.env.PUBLIC_URL}/nord-theme.css`,
  breeze: `${process.env.PUBLIC_URL}/breeze-theme.css`,
}; //themes

let curTheme = localStorage.getItem('curTheme') || ''; //Get last theme user had
if (curTheme === '') {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    //If user prefers dark mode
    curTheme = 'dracula';
  }
  curTheme = 'default';
  localStorage.setItem('curTheme', curTheme); //Sets default light theme
} //Set default theme

document.title = 'Daniel Renick';
ReactDOM.render(
  <React.StrictMode>
    <ThemeSwitcherProvider themeMap={themes} defaultTheme={curTheme}>
      <App />
    </ThemeSwitcherProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

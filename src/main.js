import './style.css';
import app from './app';

document.querySelector('#app').innerHTML = `
  <div class="app-bg__overlay"></div>
  <div class="app-width"></div>


`;

setupCounter(document.querySelector('#counter'));

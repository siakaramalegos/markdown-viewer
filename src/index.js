import "@babel/polyfill";
import './style.css';
import { initializeMarkdown } from './markdown';
import 'lazysizes';

document.getElementById('md-button').onclick = function(e) {
  e.target.className = 'hide'
  document.getElementById('markdown-container').className = 'show'
  initializeMarkdown()
}

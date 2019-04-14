import marked from 'marked';
import { timeNowPretty } from './time';
// import { isEmpty } from 'lodash';

export const initializeMarkdown = () => {
  const compiled = document.getElementById('compiled-markdown');
  const lastEdit = document.getElementById('last-edit')

  document.getElementById('editor').oninput = function (event) {
    compiled.innerHTML = marked(event.target.value, { sanitize: true });
    lastEdit.innerHTML = 'Last updated: ' + timeNowPretty()
  };
}

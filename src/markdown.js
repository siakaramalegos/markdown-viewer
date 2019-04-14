import marked from 'marked';
// import { isEmpty } from 'lodash';
// import moment from 'moment';
// import { addMinutes } from 'date-fns';

// console.log(isEmpty({}));

export const initializeMarkdown = () => {
  // Get the compiled markdown container
  const compiled = document.querySelector('#compiled-markdown');

  // Listen for changes to textarea
  document.getElementById('editor').oninput = function (event) {
    compiled.innerHTML = marked(event.target.value, { sanitize: true });
  };
}

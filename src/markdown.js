import { timeNowPretty } from './time';

async function loadMarkdownDeps() {
  // Dynamically import lodash/isEmpty and marked
  const { default: isEmpty } = await import('lodash/isEmpty' /* webpackChunkName: "lodash/isEmpty", webpackPrefetch: true */)
  const { default: marked } = await import('marked' /* webpackChunkName: "marked", webpackPrefetch: true */)

  return { isEmpty, marked }
}

export function initializeMarkdown() {
  loadMarkdownDeps()
    .then( ({isEmpty, marked}) => {
      const compiled = document.getElementById('compiled-markdown');
      const lastEdit = document.getElementById('last-edit');

      document.getElementById('editor').oninput = function (event) {
        const value = event.target.value;

        if (isEmpty(value)) {
          compiled.innerHTML = '<p>Begin writing markdown on the left to see it previewed here.</p>';
        } else {
          compiled.innerHTML = marked(event.target.value, { sanitize: true });
          lastEdit.innerHTML = 'Last updated: ' + timeNowPretty();
        }
      }
    })
    .catch(error => { console.error({error})} )
}

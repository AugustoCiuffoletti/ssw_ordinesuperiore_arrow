// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Funzioni arrow come parametri</h1>`;

function zero ( h ) {
  return h(0);
}
console.log( zero ( (x) => 4 * x + 3 ) );

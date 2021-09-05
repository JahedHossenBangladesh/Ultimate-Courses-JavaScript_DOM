import '../assets/css/style.css';


const app = document.getElementById('app');

// app.innerHTML = `
// <h1>Javascript DOM</h1>
// `
// app.innerText = 'some text here'

const h1 = document.createElement('h1')

h1.innerText = 'Javascript DOM'
h1.innerText += ' Ultimate JS'

app.append(h1);

console.log(app.innerHTML)
console.log(app.innerText)
console.log(app.textContent)

import '../assets/css/style.css';


const app = document.getElementById('app');

app.innerHTML = `
<h1>Javascript DOM</h1>
`
//inserting in DOM
const div = document.createElement('div');
const li = document.createElement('li');
const p = document.createElement('p');
const span = document.createElement('span');
const i = document.createElement('i');
const b = document.createElement('b');

div.append(span)
div.prepend(p)
span.after(i)
p.before(li)
console.log(div)












// // fragement
// const data = ['apple','banana','pineapple','more']

// const fragment = document.createDocumentFragment();
// data.forEach(name => {
//     const li = document.createElement('li');
//     li.innerText =name;
//     fragment.append(li)
// })

// app.append(fragment)
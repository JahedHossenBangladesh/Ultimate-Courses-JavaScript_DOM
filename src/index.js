import '../assets/css/style.css';

const app = document.getElementById('app');

app.innerHTML = `
<h1>JavaScript DOM</h1>
`;
// html
console.log(document.documentElement)
console.dir(document.documentElement)

//head
console.dir(document.head);
//body
console.dir(document.body)

//retrieve the constructor name
console.log(document.body.constructor.name)

//looking at the prototype changes 
console.log(document.body instanceof HTMLBodyElement)
console.log(document.body instanceof HTMLElement)
console.log(document.body instanceof Element)
console.log(document.body instanceof Node)
console.log(document.body instanceof EventTarget)

console.log(document.body.nodeType)
console.log(document.nodeType)
//nodeName for any Node types
console.log(document.nodeName)
// tagName for any Element types
console.log(document.body.tagName)

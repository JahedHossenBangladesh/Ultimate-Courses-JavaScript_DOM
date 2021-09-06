import '../assets/css/style.css';


const app = document.getElementById('app');

app.innerHTML = `
<h1>Javascript DOM</h1>


`
// createElement
function createInput({label,type='text'}){
    const labelEl= document.createElement('label');
    const inputEl = document.createElement('input');
    inputEl.type = type;
    labelEl.innerText = label;
    labelEl.append(inputEl)
    return labelEl;
}
const inputFromDom = createInput({label:"name"})

app.append(inputFromDom);
console.log(inputFromDom)
// string template 
function createInput2({label,type='text'}){
    return `
    <label>
    ${label}
    <input type="${type}" placeholder="${label}"/>
    </label>
    
    `
}
const inputFromDom2 = createInput2({
    label:'Email',
    type:'email'
})

app.innerHTML += inputFromDom2;
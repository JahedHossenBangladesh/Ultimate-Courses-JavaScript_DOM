import '../assets/css/style.css';


const app = document.getElementById('app');

app.innerHTML = `
<h1>Javascript DOM</h1>


`

const data = ['apple','banana','pineapple','more']

const fragment = document.createDocumentFragment();
data.forEach(name => {
    const li = document.createElement('li');
    li.innerText =name;
    fragment.append(li)
})

app.append(fragment)
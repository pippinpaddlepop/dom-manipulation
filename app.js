//selecting the container div
const container = document.querySelector('.container');
//creating a <p> elemnt 
const parared = document.createElement('p');
//adding text and color to the <p> elemnt
parared.textContent = "hey i am red";
parared.style.color = 'red';
//appending the <p> to the container div
container.appendChild(parared);

//creating an <h3>
const head3 = document.createElement('h3');
head3.textContent = 'hey i am blue';
head3.style.color = 'blue';

//appending to container div

container.appendChild(head3);


//creating a nested container div
const div2 = document.createElement('div');
div2.style.border = 'black';
div2.style.backgroundColor  = 'pink';

//appending to container

container.appendChild(div2);


//nesting an h1 in div 2

const headdiv = document.createElement('h1');
headdiv.textContent = "im in a div";

div2.appendChild(headdiv);

//nested p tag
const nestPara = document.createElement('p');
nestPara.textContent = "ME TOO!";

//appending to div2

div2.appendChild(nestPara);

// get hold of button

const button = document.querySelector('#clickMe');
button.addEventListener('click',() =>{
    alert('hello world');
})
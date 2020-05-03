const decrement=document.getElementById('decrease');
const increment=document.getElementById('increase');
const counter = document.getElementById('counter');


const addButtonListener=(button, listenerType, cb)=> {
  button.addEventListener(listenerType, e => cb(e));
}


const decreaseCount=(e)=> {
  console.log('Decreasing...');
  let count = Number(counter.textContent);
  count--;
  console.log(count);
  counter.className = 'red';
  counter.innerText = count;
}

const increaseCount=(e)=> {
  console.log('Increasing...');
  let count = Number(counter.textContent);
  count++;
  console.log(count);
  counter.className = 'green';
  counter.innerText = count;
}


addButtonListener(decrement, 'click', decreaseCount);
addButtonListener(increment, 'click', increaseCount);
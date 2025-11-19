let input = document.querySelector('.js-input-text');

let calculate = (number) => {
  input.value += number;
};

async function result() {
  try {
    input.value = eval(input.value);
    const res = await fetch('/api/joke');
    const data = await res.json();
    alert(data.joke);
  }catch (error) {
    alert('Invalid operation');
  }
}

function clr() {
  input.value = '';
}
       
function del() {
  // removes last number/operation
  input.value = input.value.slice(0, -1);
}

// keyboard functionality
document.addEventListener('keyup', (event) => {
  if (event.key === 'Enter') result();
  if (event.key === 'Escape') clr(); 
});


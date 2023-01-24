let addIBtn = document.getElementById('add-btn');
addIBtn.addEventListener('click', addIten)

document.addEventListener('keydown', komsomolochka)

function komsomolochka(data) {
  console.log(data)
  if (data.code == 'Enter') {
    addIten()
  }
}

function addIten(data) {
  let input = document.getElementById('shooter');
  let list = document.getElementById('todo-list');

  if (input.value !== '' && input.value !== null) {
    let newIten = document.createElement('li');
    newIten.innerText = input.value;
    list.appendChild(newIten);
  }
  input.value = '';
}
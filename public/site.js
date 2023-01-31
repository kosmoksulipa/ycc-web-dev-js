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
    newIten.classList.add('list-group-item')
    let newBlock =
      `<input class="form-check-input me-1" type="checkbox" value="">
       <label class="form-check-label">${input.value}First checkbox</label>`;

    newIten.innerHTML = newBlock;

    list.appendChild(newIten);
  }
  input.value = '';
}
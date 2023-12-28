const myButton = document.querySelector('.multybox__inputsection-myButton');
myButton.onclick = getValue;

function getValue() {
  const inputElement = document.querySelector('.multybox__inputsection-input');
  const inputValue = inputElement.value;

  const existingTable = document.querySelector('.multybox__table');
  if (existingTable) {
    existingTable.remove();
  }

  if (!isNaN(inputValue) && inputValue !== '' && Number(inputValue) > 0) {
    renderTable(parseInt(inputValue));
  } else {
    alert('Please enter valid number and Try again.');
  }
}

function renderTable(num) {
  const multybox = document.querySelector('.multybox');

  const table = document.createElement('table');
  table.classList.add('multybox__table');
  const tbody = document.createElement('tbody');
  table.appendChild(tbody);

  const headRow = document.createElement('tr');
  headRow.appendChild(document.createElement('th'));
  for (let i = 1; i <= num; i++) {
    const th = document.createElement('th');
    th.innerText = i;
    headRow.appendChild(th);
  }
  tbody.appendChild(headRow);

  for (let i = 1; i <= num; i++) {
    const row = document.createElement('tr');
    const th = document.createElement('th');
    th.innerText = i;
    row.appendChild(th);

    for (let j = 1; j <= num; j++) {
      const td = document.createElement('td');
      td.innerText = `${i * j}`;
      row.appendChild(td);
    }
    tbody.appendChild(row);
  }

  multybox.appendChild(table);
}



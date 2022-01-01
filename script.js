let employees = ['Prashant', 'Aaru', 'Mona'];

window.addEventListener('load', showEmployeeList);

function showEmployeeList() {
  const listContainer = document.querySelector('.list-container');
  const ul = document.createElement('ul');

  employees.forEach((emp) => {
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(emp));
    ul.appendChild(li);
  });

  listContainer.appendChild(ul);
}

function handleClearEmployee() {
  const ul = document.querySelector('ul');
  ul.remove();
}

function handleAddEmployee() {
  const empInput = document.querySelector('#employeename');
  if (!empInput.value) return;
  employees = [...employees, empInput.value];
  handleClearEmployee();
  showEmployeeList();
}

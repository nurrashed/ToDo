//2
const todoItems = document.getElementById("todo-items");
const todoForm = document.getElementById("todo-form");
const todoItem = document.getElementById("todo-list-item");
let li = "";

if (localStorage.todoItems != null)
  //10
  todoItems.innerHTML = localStorage.todoItems; //10

//3 4 5

todoForm.onsubmit = event => {
  event.preventDefault();
  //console.log('form submitted');
  let item = todoItem.value;
  //console.log(item);

  if (item !== "") {
    //li = `<li>${item}</li>`;
    //console.log(li);

    // todoItems.innerHTML += li;

    todoItems.innerHTML += `<li><input type='checkbox'><span>${item}</span><a class='remove'> X </a><hr></li>`;
    todoItem.value = "";
    //todoForm.reset();

    /*  const checkbox= document.createElement('input');
  checkbox.type='checkbox';
  const remove = document.createElement('a');
  remove.value='X';
  todoItems.appendChild(checkbox);
  todoItems.appendChild(remove); */

    localStorage.todoItems = todoItems.innerHTML;
  }
};
//8
todoItems.onchange = event => {
  if (event.target.type == "checkbox") {
    if (event.target.hasAttribute("checked"))
      event.target.removeAttribute("checked");
    else event.target.setAttribute("checked", "checked");
    event.target.nextElementSibling.classList.toggle("completed");
    //localStorage.todoItems=todoItems.innerHTML;  //10..which was not in 9
  }
  /* console.log('Checkbox Checked');
  console.log(event); */
  localStorage.todoItems = todoItems.innerHTML;
};

//9

todoItems.onclick = event => {
  const hasRemoveClass = event.target.classList.contains("remove");
  if (hasRemoveClass) {
    //console.log('TODO Removed', event);
    let li = event.target.parentElement;
    todoItems.removeChild(li);
    localStorage.todoItems = todoItems.innerHTML; //10..which was not in 9
  }
};

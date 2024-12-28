function addToDo() {
    todoList.innerHTML += '<li>' + todoField.value + '/li>';
    todoField.value = '';
}
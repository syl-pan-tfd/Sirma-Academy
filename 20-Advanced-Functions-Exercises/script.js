document.getElementById('add-button').addEventListener('click', function () {
    const input = document.getElementById('todo-input');
    const task = input.value.trim();

    if (task === '') return;
    const list = document.querySelector('#todo-list');

    let item = document.createElement('li');
    item.textContent = task;

    let removeButton = document.createElement('button');
    removeButton.className = "remove";
    removeButton.textContent = "Remove";

    item.appendChild(removeButton);

    list.appendChild(item);

    removeButton.addEventListener('click', function () {
        list.removeChild(item);
    });

    input.value = '';
});

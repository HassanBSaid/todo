function addTodo(){

    const inputElement = document.querySelector('input');
    const value = inputElement.value;

    if(value.length < 5 ){
        
        return; // Stop here.
    }
    

    const todoContainer = document.createElement('div');
    todoContainer.classList.add('flex','justify-between','items-center');
    const todoTitle = document.createElement('h4');
    todoTitle.textContent = value;
    const doneButton = document.createElement('button');
    doneButton.className = 'bg-green-500 p-2 rounded-lg';
    doneButton.textContent = 'Done';
    doneButton.onclick = markAsDone;
    todoContainer.appendChild(todoTitle);
    todoContainer.appendChild(doneButton);
    const allTodosContainer = document.querySelector('#todoscontainer');
    allTodosContainer.appendChild(todoContainer);
    inputElement.value = '';
}
function markAsDone(event){
    //console.log('this is done', event.target);
    const clickedButton = event.target;
   //  clickedButton.remove(); this remove whole so, not need
   clickedButton.classList.add('hidden');

   const todoItem = clickedButton.previousElementSibling;
   todoItem.classList.add('line-through');
    
}


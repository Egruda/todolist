import { addTodos } from './project';
import addIcon from './add.png';
import { deleteForm } from './addproject';
import { reset } from './dom';



export function addTodoForm(e) {
    let projectArraynumber = e.target.getAttribute('data-project');

    let rightbanner = document.querySelector('.right-banner');

    
    let divForm = document.createElement('div');
    divForm.classList.add('divProjectForm');
    divForm.classList.add('todo-form');

    let projectForm = document.createElement('form');
    
    let labelFormTitle = document.createElement('label');
    labelFormTitle.textContent = 'Todo:   '
    
    let inputFormTitle = document.createElement('input');
    inputFormTitle.classList.add('inputTodo');
    inputFormTitle.classList.add('todo-title');

    let labelFormDescription = document.createElement('label');
    labelFormDescription.textContent = 'Description:   '
    
    let inputFormDescription = document.createElement('input');
    inputFormDescription.classList.add('inputTodo')
    inputFormDescription.classList.add('todo-description');

    let labelFormDueDate = document.createElement('label');
    labelFormDueDate.textContent = 'Due date:   '
    
    let inputFormDueDate = document.createElement('input');
    inputFormDueDate.classList.add('inputTodo')
    inputFormDueDate.classList.add('todo-duedate');
    inputFormDueDate.setAttribute('type','date');

    let labelFormPriority = document.createElement('label');
    labelFormPriority.textContent = 'Priority:   '
    
    let priorityArray = ['High', 'Medium', 'Low'];

    let inputFormPriority = document.createElement('select');
    inputFormPriority.id = 'Priority';

    for (let i = 0; i < priorityArray.length; i++) {
        let option = document.createElement('option');
        option.value = priorityArray[i];
        option.text = priorityArray[i];
        inputFormPriority.appendChild(option);
    }


    let buttonCancel = document.createElement('button');
    buttonCancel.textContent = 'Cancel';
    buttonCancel.classList.add('cancel');
    buttonCancel.classList.add('button-form');

    let buttonSave = document.createElement('button');
    buttonSave.textContent = 'Save';
    buttonSave.classList.add('save');
    buttonSave.classList.add('button-form');

    let divFormButtonProject = document.createElement('div');
    divFormButtonProject.classList.add('button-project')

    divFormButtonProject.appendChild(buttonCancel);
    divFormButtonProject.appendChild(buttonSave);

    let addLogo = document.createElement('img');
    addLogo.src = addIcon;
    addLogo.classList.add('addFormIcon');

    projectForm.appendChild(labelFormTitle);
    projectForm.appendChild(inputFormTitle);
    projectForm.appendChild(labelFormDescription);
    projectForm.appendChild(inputFormDescription);
    projectForm.appendChild(labelFormDueDate);
    projectForm.appendChild(inputFormDueDate);
    projectForm.appendChild(labelFormPriority);
    projectForm.appendChild(inputFormPriority);

    divForm.appendChild(addLogo);
    divForm.appendChild(projectForm);
    divForm.appendChild(divFormButtonProject);

    rightbanner.appendChild(divForm);

    buttonCancel.addEventListener('click', deleteForm);

    buttonSave.addEventListener('click', () => {
        addTodos(projectArraynumber);
        reset();    
    })

}


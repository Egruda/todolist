import { editProject, editTodo } from "./index.js";
import { reset } from "./dom";
import { deleteForm } from "./addproject";
import { projectArray } from "./index.js";
import { deleteExpand } from "./expand";
import { updateTodo } from "./expand";


export function editProjectForm(e) {

    let projectArrayNumber = e.target.getAttribute('data-project');
    

    
    let rightbanner = document.querySelector('.right-banner');

    
    let divForm = document.createElement('div');
    divForm.classList.add('divProjectForm');

    let projectForm = document.createElement('form');
    
    let labelForm = document.createElement('label');
    labelForm.textContent = 'Project:   '
    
    let inputForm = document.createElement('input');
    inputForm.classList.add('inputProject');
    inputForm.setAttribute('value', projectArray[projectArrayNumber].name);

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

    let title = document.createElement('p');
    title.textContent = 'Edit Project Name';

    projectForm.appendChild(labelForm);
    projectForm.appendChild(inputForm);

    divForm.appendChild(title);
    divForm.appendChild(projectForm);
    divForm.appendChild(divFormButtonProject);

    rightbanner.appendChild(divForm);

    buttonCancel.addEventListener('click', deleteForm);

    buttonSave.addEventListener('click', () => {
        editProject(projectArrayNumber);
        reset();    
    })

}

export function editTodoForm(e) {
    let projectArrayNumber = e.target.getAttribute('data-project');
    let todoArrayNumber = e.target.getAttribute('data-todo');
    

    
    let rightbanner = document.querySelector('.right-banner');

    let divForm = document.createElement('div');
    divForm.classList.add('divProjectForm');
    divForm.classList.add('todo-form');
    
    let projectForm = document.createElement('form');

    let title = document.createElement('p');
    title.textContent = 'Edit Todo';
    
    let labelFormTitle = document.createElement('label');
    labelFormTitle.textContent = 'Todo:   '
    
    let inputFormTitle = document.createElement('input');
    inputFormTitle.classList.add('inputTodo');
    inputFormTitle.classList.add('todo-title');
    inputFormTitle.setAttribute('value', projectArray[projectArrayNumber].todoArray[todoArrayNumber].title);

    let labelFormDescription = document.createElement('label');
    labelFormDescription.textContent = 'Description:   '
    
    let inputFormDescription = document.createElement('input');
    inputFormDescription.classList.add('inputTodo')
    inputFormDescription.classList.add('todo-description');
    inputFormDescription.setAttribute('value', projectArray[projectArrayNumber].todoArray[todoArrayNumber].description);

    let labelFormDueDate = document.createElement('label');
    labelFormDueDate.textContent = 'Due date:   '
    
    let inputFormDueDate = document.createElement('input');
    inputFormDueDate.classList.add('inputTodo')
    inputFormDueDate.classList.add('todo-duedate');
    inputFormDueDate.setAttribute('value', projectArray[projectArrayNumber].todoArray[todoArrayNumber].dueDate);

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

    for (let j = 0; j < inputFormPriority.options.length; j++) {
        if (inputFormPriority.options[j].text == projectArray[projectArrayNumber].todoArray[todoArrayNumber].priority) {
            inputFormPriority.selectedIndex = j;
            break;
        }
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

    
    projectForm.appendChild(labelFormTitle);
    projectForm.appendChild(inputFormTitle);
    projectForm.appendChild(labelFormDescription);
    projectForm.appendChild(inputFormDescription);
    projectForm.appendChild(labelFormDueDate);
    projectForm.appendChild(inputFormDueDate);
    projectForm.appendChild(labelFormPriority);
    projectForm.appendChild(inputFormPriority);

    divForm.appendChild(title);
    divForm.appendChild(projectForm);
    divForm.appendChild(divFormButtonProject);

    rightbanner.appendChild(divForm);

    buttonCancel.addEventListener('click', deleteForm);

    buttonSave.addEventListener('click', () => {
        editTodo(projectArrayNumber, todoArrayNumber);
        reset();
        updateTodo(projectArrayNumber, todoArrayNumber);
        
    })

}


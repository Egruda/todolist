import { deleteProject } from "./project";
import { reset } from "./dom";
import { deleteForm } from "./addproject";
import { projectArray } from "./project";
import { deleteTodo } from "./project";


export function deleteProjectForm(e) {

    let projectArrayNumber = e.target.getAttribute('data-project');

    
    let rightbanner = document.querySelector('.right-banner');

    
    let divForm = document.createElement('div');
    divForm.classList.add('divProjectForm');

    let sentence = document.createElement('p');
    sentence.textContent = `Are you sure you want to delete ${projectArray[projectArrayNumber].name} project?`


    let buttonCancel = document.createElement('button');
    buttonCancel.textContent = 'Cancel';
    buttonCancel.classList.add('cancel');
    buttonCancel.classList.add('button-form');

    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Delete';
    buttonDelete.classList.add('delete');
    buttonDelete.classList.add('button-form');

    let divFormButtonProject = document.createElement('div');
    divFormButtonProject.classList.add('button-project')

    divFormButtonProject.appendChild(buttonCancel);
    divFormButtonProject.appendChild(buttonDelete);


    divForm.appendChild(sentence);
    divForm.appendChild(divFormButtonProject);

    rightbanner.appendChild(divForm);

    buttonCancel.addEventListener('click', deleteForm);

    buttonDelete.addEventListener('click', () => {
        deleteProject(projectArrayNumber);
        reset();    
    })

}

export function deleteTodoForm(e) {

    
    let projectArrayNumber = e.target.getAttribute('data-project');
    let todoArrayNumber = e.target.getAttribute('data-todo');
    
    let rightbanner = document.querySelector('.right-banner');

    
    let divForm = document.createElement('div');
    divForm.classList.add('divProjectForm');

    let sentence = document.createElement('p');
    sentence.textContent = `Are you sure you want to delete ${projectArray[projectArrayNumber].todoArray[todoArrayNumber].title}?`


    let buttonCancel = document.createElement('button');
    buttonCancel.textContent = 'Cancel';
    buttonCancel.classList.add('cancel');
    buttonCancel.classList.add('button-form');

    let buttonDelete = document.createElement('button');
    buttonDelete.textContent = 'Delete';
    buttonDelete.classList.add('delete');
    buttonDelete.classList.add('button-form');

    let divFormButtonProject = document.createElement('div');
    divFormButtonProject.classList.add('button-project')

    divFormButtonProject.appendChild(buttonCancel);
    divFormButtonProject.appendChild(buttonDelete);


    divForm.appendChild(sentence);
    divForm.appendChild(divFormButtonProject);

    rightbanner.appendChild(divForm);

    buttonCancel.addEventListener('click', deleteForm);

    buttonDelete.addEventListener('click', () => {
        deleteTodo(projectArrayNumber, todoArrayNumber);
        reset();    
    })

}
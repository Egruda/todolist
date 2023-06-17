import {projectArray} from "./project.js";
import {reset} from "./dom.js";
import addProject from "./addproject.js";
import delIcon from "./delete.png";
import editIcon from "./edit.png";
import { deleteProjectForm } from "./deleteprojectform.js";

export default function activateListener() {
    
    let checkboxes = document.querySelectorAll('.checkbox');
    checkboxes.forEach((checkbox) => checkbox.addEventListener('change', complete));
    
    let todos = document.querySelectorAll('.todoTitle');
    todos.forEach((todo) => {todo.addEventListener('click', (e) => {
    deleteExpand();
    expandTodo(e);
    })})

    let addProjectButton = document.querySelector('#add');
    addProjectButton.addEventListener('click', addProject);



    let deleteProjectButtons = document.querySelectorAll('.deleteProject');
    deleteProjectButtons.forEach((deleteProjectButton) => deleteProjectButton.addEventListener('click', deleteProjectForm));
}

function expandTodo(e) {
    let projectArrayNumber = parseInt(e.target.getAttribute('data-project'));
    let todoArrayNumber = parseInt(e.target.getAttribute('data-todo'));
    
    let parentSelector = document.querySelector(`.bottomcard[data-project='${projectArrayNumber}']`);
    let siblingSelector = document.querySelector(`.todoList[data-project='${projectArrayNumber}'][data-todo='${todoArrayNumber}']`);

    let todoExpandDiv = document.createElement('div');
    todoExpandDiv.classList.add('todoExpandDiv');

    let todoExpand = document.createElement('p');
    todoExpand.classList.add('todoExpand');
    todoExpand.textContent = projectArray[projectArrayNumber].todoArray[todoArrayNumber].description;
    
    let todoIconsDiv = document.createElement('div');
    
    let iconDelete = document.createElement('img');
    iconDelete.classList.add('icon');
    iconDelete.src = delIcon;
    let iconEdit = document.createElement('img');
    iconEdit.classList.add('icon');
    iconEdit.src = editIcon;

    todoIconsDiv.appendChild(iconDelete);
    todoIconsDiv.appendChild(iconEdit);

    todoExpandDiv.appendChild(todoExpand);

    todoExpandDiv.appendChild(todoIconsDiv);

    parentSelector.insertBefore(todoExpandDiv, siblingSelector.nextSibling);
}

function deleteExpand() {
    if(document.querySelector('.todoExpandDiv') !== null) {
        document.querySelector('.todoExpandDiv').remove();
}}

function complete(e) {
    let projectArrayNumber = parseInt(e.target.getAttribute('data-project'));
    let todoArrayNumber = parseInt(e.target.getAttribute('data-todo'));
    if(e.target.checked) {
        console.log('completed');
        projectArray[projectArrayNumber].todoArray[todoArrayNumber].checklist = 'Completed';
    } else {
        projectArray[projectArrayNumber].todoArray[todoArrayNumber].checklist = 'Not Completed';
        console.log('not completed');
    }
    reset()
    

}    


import { editProject } from "./project";
import { reset } from "./dom";
import { deleteForm } from "./addproject";
import { projectArray } from "./project";

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


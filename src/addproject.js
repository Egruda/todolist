
import addIcon from './add.png';
import { save } from './project';
import { reset } from './dom';



export default function addProject() {

    
    let rightbanner = document.querySelector('.right-banner');

    
    let divForm = document.createElement('div');
    divForm.classList.add('divProjectForm');

    let projectForm = document.createElement('form');
    
    let labelForm = document.createElement('label');
    labelForm.textContent = 'Project:   '
    
    let inputForm = document.createElement('input');
    inputForm.classList.add('inputProject')

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

    projectForm.appendChild(labelForm);
    projectForm.appendChild(inputForm);

    divForm.appendChild(addLogo);
    divForm.appendChild(projectForm);
    divForm.appendChild(divFormButtonProject);

    rightbanner.appendChild(divForm);

    buttonCancel.addEventListener('click', deleteForm);

    buttonSave.addEventListener('click', () => {
        save();
        reset();    
    })

}



function deleteForm() {
    let divProjectForm = document.querySelector('.divProjectForm')
    divProjectForm.remove();
}


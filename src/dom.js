import {projectArray} from "./project.js";
import addIcon from './add.png';
import delIcon from './delete.png';
import editIcon from './edit.png';
import importantIcon from './priority.png'
import activateListener, { deleteExpand } from "./expand.js";

export default function display() {
    let card = [];
    let topcard = [];
    let projectName = [];
    let divIcon =[];
    let bottomcard = [];
    
    let list =[];
    let title = [];
    let date = [];

    let checklist = [];

    for(let i =0; i < projectArray.length; i++) {
        card[i] = document.createElement('div');
        card[i].classList.add('card');
        card[i].setAttribute('data-project', i);
        topcard[i] = document.createElement('div');
        topcard[i].classList.add('topcard');
        topcard[i].setAttribute('data-project', i);
        bottomcard[i] = document.createElement('div');
        bottomcard[i].classList.add('bottomcard');
        bottomcard[i].setAttribute('data-project', i);

        projectName[i] = document.createElement('h2');
        projectName[i].classList.add('projectName');
        projectName[i].textContent = projectArray[i].name;
        
        topcard[i].appendChild(projectName[i]);
        
        divIcon[i] = document.createElement('div');
        divIcon[i].classList.add('divIcon');

        let iconAdd = document.createElement('img');
        iconAdd.classList.add('icon');
        iconAdd.classList.add('addTodo');
        iconAdd.setAttribute('data-project', i);
        iconAdd.src = addIcon;
        let iconDelete = document.createElement('img');
        iconDelete.classList.add('icon');
        iconDelete.classList.add('deleteProject');
        iconDelete.src = delIcon;
        iconDelete.setAttribute('data-project', i);
        let iconEdit = document.createElement('img');
        iconEdit.classList.add('icon');
        iconEdit.classList.add('editProject');
        iconEdit.src = editIcon;
        iconEdit.setAttribute('data-project', i);

        divIcon[i].appendChild(iconAdd);
        divIcon[i].appendChild(iconDelete);
        divIcon[i].appendChild(iconEdit);
        topcard[i].appendChild(divIcon[i]);

        card[i].appendChild(topcard[i]);

        if(projectArray[i].todoArray.length !== undefined) {

        for(let k = 0; k < projectArray[i].todoArray.length; k++) {
            let checklistTitle = [];
            
            list[k] = document.createElement('div');
            list[k].classList.add('todoList');
            list[k].setAttribute('data-project', i);
            list[k].setAttribute('data-todo', k);
            
            checklistTitle[k] = document.createElement('div');
            checklistTitle[k].classList.add('left-task');


            checklist[k] = document.createElement('input');
            checklist[k].setAttribute('type','checkbox');
            checklist[k].setAttribute('data-project', i);
            checklist[k].setAttribute('data-todo', k);
            checklist[k].classList.add('checkbox');
            
            title[k] = document.createElement('p');
            title[k].classList.add('todoTitle');
            title[k].setAttribute('data-project', i);
            title[k].setAttribute('data-todo', k);
            title[k].textContent = projectArray[i].todoArray[k].title;

            let completed = projectArray[i].todoArray[k].checklist;
            if(completed === 'Completed') {
                title[k].classList.add('completed');
                checklist[k].checked = true;
            }

            checklistTitle[k].appendChild(checklist[k]);
            checklistTitle[k].appendChild(title[k]);
            
            let priority = projectArray[i].todoArray[k].priority;

            if(priority === 'High') {
                let priorityIcon = document.createElement('img');
                priorityIcon.src = importantIcon;
                priorityIcon.classList.add('priority');
                priorityIcon.setAttribute('title', 'High Priority');

                let doublepriorityIcon = document.createElement('img');
                doublepriorityIcon.src = importantIcon;
                doublepriorityIcon.classList.add('priority');
                doublepriorityIcon.setAttribute('title', 'High Priority');


                checklistTitle[k].appendChild(priorityIcon);
                checklistTitle[k].appendChild(doublepriorityIcon);

            }
            else if(priority === 'Medium') {
                let priorityIcon = document.createElement('img');
                priorityIcon.src = importantIcon;
                priorityIcon.classList.add('priority');
                priorityIcon.setAttribute('title', 'Medium Priority');
                checklistTitle[k].appendChild(priorityIcon);
            }

            date[k] = document.createElement('p');
            date[k].classList.add('todoDate');
            date[k].textContent = projectArray[i].todoArray[k].dueDate;

            list[k].appendChild(checklistTitle[k]);
            
            list[k].appendChild(date[k]);
            bottomcard[i].appendChild(list[k]);
            
        }
        }
        
        card[i].appendChild(bottomcard[i]);
        
        let container = document.querySelector('.right-banner');
        container.appendChild(card[i]);
        
    }
};

export function reset() {
    let rightbanner = document.querySelector('.right-banner');
    
    rightbanner.replaceChildren();
    
    display();
    activateListener();
}
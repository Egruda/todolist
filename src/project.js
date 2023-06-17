// create to do factories

const todo = (title, description, dueDate, priority, checklist) => {

    return {title, description, dueDate, priority, checklist};
}

// create project factories

export const project = (name) => {
    
    const todoArray = [];

    const pushTodo = function(todo) {
        todoArray.push(todo);
    }

    return {name, todoArray, pushTodo};
}



// create todo objects

const addTodo = function(title, description, dueDate, priority, checklist) {
    let newTodo = todo(title, description, dueDate, priority, checklist);
    return newTodo;    
};


// create project objects

const addProject = function(name) {
    let newProject = project(name);
    return newProject;    
}

// push project to project Array

const pushProject = function(project) {
    projectArray.push(project);
}

// save new project

export function save() {
    let inputValue = document.querySelector('.inputProject').value;
    inputValue = addProject(inputValue);
    projectArray.push(inputValue);
}

// edit project

export function editProject(projectArrayNumber) {
    let newName = document.querySelector('.inputProject').value;
    projectArray[projectArrayNumber].name = newName;
}

// delete project

export function deleteProject(projectArrayNumber) {
    projectArray.splice(parseInt(projectArrayNumber), 1);
}

// addtodo function

export function addTodos(projectArrayNumber) {
    let title = document.querySelector('.todo-title').value;
    let description = document.querySelector('.todo-description').value;
    let duedate = document.querySelector('.todo-duedate').value;
    let priority = document.querySelector('select').value;
    

    title = addTodo(title, description, duedate, priority);
    projectArray[projectArrayNumber].todoArray.push(title);
}

// delete Todo
export function deleteTodo(projectArrayNumber, todoArrayNumber) {
    projectArray[projectArrayNumber].todoArray.splice(todoArrayNumber,1);
}



// project and todo samples for testing

const Run = todo('Run', 'Run in marathon', '8 Dec', 'High', 'Not completed');
const Swim = todo('Swimming', '10 laps', '10 Dec', 'Medium', 'Completed');
const Training = project('Training');
const Midterm = todo ('Midterm', 'Math Midterm', '10 Aug', 'Medium Priority', 'No Notes', 'Not completed');
const Studying = project('Studying');
Studying.todoArray[0] = Midterm;
Training.todoArray[0] = Run;
Training.todoArray[1] = Swim;
export const projectArray = [Training, Studying];


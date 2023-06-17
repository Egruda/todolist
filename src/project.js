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

// project and todo samples for testing

const run = todo('Run', 'Run in marathon', '8 Dec', 'High', 'Not completed');
const swim = todo('Swimming', '10 laps', '10 Dec', 'Medium', 'Completed');
const training = project('Training');
const midterm = todo ('Midterm', 'Math Midterm', '10 Aug', 'Medium Priority', 'No Notes', 'Not completed');
const studying = project('Studying');
studying.todoArray[0] = midterm;
training.todoArray[0] = run;
training.todoArray[1] = swim;
export const projectArray = [training, studying];


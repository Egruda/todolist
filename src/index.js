import  './style.css';
import activateListener from './expand.js';
import display from './dom.js';

import {format} from "date-fns";
import { storageAvailable } from "./storage"; 


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

export function saveIt() {
    let inputValue = document.querySelector('.inputProject').value;
    inputValue = addProject(inputValue);
    projectArray.push(inputValue);
    storeLocalStorage();
}

// edit project

export function editProject(projectArrayNumber) {
    let newName = document.querySelector('.inputProject').value;
    projectArray[projectArrayNumber].name = newName;
    storeLocalStorage();
}

// delete project

export function deleteProject(projectArrayNumber) {
    projectArray.splice(parseInt(projectArrayNumber), 1);
    storeLocalStorage();
}

// addtodo function

export function addTodos(projectArrayNumber) {
    let title = document.querySelector('.todo-title').value;
    let description = document.querySelector('.todo-description').value;
    let duedate = document.querySelector('.todo-duedate').value;

    duedate = new Date(duedate);
    duedate = format(duedate, "MMM dd, yy");    
  
    
    let priority = document.querySelector('select').value;
    


    title = addTodo(title, description, duedate, priority);
    projectArray[projectArrayNumber].todoArray.push(title);
    storeLocalStorage();
}

export function editTodo(projectArrayNumber, todoArrayNumber) {
    let title = document.querySelector('.todo-title').value;
    let description = document.querySelector('.todo-description').value;
    let duedate = document.querySelector('.todo-duedate').value;
    duedate = new Date(duedate);
    duedate = format(duedate, "MMM dd, yy");    
    let priority = document.querySelector('select').value;
    
    projectArray[projectArrayNumber].todoArray[todoArrayNumber].title = title;
    projectArray[projectArrayNumber].todoArray[todoArrayNumber].description = description;
    projectArray[projectArrayNumber].todoArray[todoArrayNumber].dueDate = duedate;
    projectArray[projectArrayNumber].todoArray[todoArrayNumber].priority = priority;
    storeLocalStorage();
}   


// delete Todo
export function deleteTodo(projectArrayNumber, todoArrayNumber) {
    projectArray[projectArrayNumber].todoArray.splice(todoArrayNumber,1);
    storeLocalStorage();
}



// project and todo samples for testing

let Run = todo('Run', 'Run in marathon', format(new Date("2023-12-10"), ("MMM dd, yy")), 'High', 'Not completed');
let Swim = todo('Swim', '10 laps', format(new Date("2023-12-08"), ("MMM dd, yy")), 'Medium', 'Completed');
let Training = project('Training');
const Midterm = todo ('Midterm', 'Math Midterm', format(new Date("2023-08-10"), ("MMM dd, yy")), 'Medium Priority', 'No Notes', 'Not completed');
const Studying = project('Studying');
Studying.todoArray[0] = Midterm;
Training.todoArray[0] = Run;
Training.todoArray[1] = Swim;
export let projectArray = [Training, Studying];


export function storeLocalStorage() {
    if (storageAvailable("localStorage")) {
        localStorage.setItem('projects', JSON.stringify(projectArray));
      }
}

if (storageAvailable("localStorage")) {
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    projectArray = storedProjects;
  } 

display(projectArray);
activateListener();






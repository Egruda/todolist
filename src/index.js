import './style.css';
import activateListener from './expand.js';
import display from './dom.js';
import { storageAvailable } from './storage';
import { projectArray } from './project';
import addIcon from './add.png';



if (storageAvailable("localStorage")) {
    const storedProjects = JSON.parse(localStorage.getItem('projects'));
    projectArray = storedProjects;
  } else {
    projectArray = [Training, Studying];
  }


display();
activateListener();






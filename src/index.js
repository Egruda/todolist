import  './style.css';
import activateListener from './expand.js';
import display from './dom.js';
import { storageAvailable } from './storage';
import { projectArray } from './project';

projectArray = [Training, Studying];

// console.log(projectArray);

// export function storeLocalStorage() {
//     if (storageAvailable("localStorage")) {
//         localStorage.setItem('projects', JSON.stringify(projectArray));
//       }
// }

// if (storageAvailable("localStorage")) {
//     const storedProjects = JSON.parse(localStorage.getItem('projects'));
//     projectArray = storedProjects;
//   } else {
//     projectArray = [Training, Studying];
//   }


display(projectArray);
activateListener();






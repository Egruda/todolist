(()=>{"use strict";var e={138:(e,t,d)=>{var n=d(138);!function(){let e=[],t=[],d=[],a=[],c=[],i=[],o=[],r=[];for(let s=0;s<n.m.length;s++){e[s]=document.createElement("div"),e[s].classList.add("card"),t[s]=document.createElement("div"),t[s].classList.add("topcard"),c[s]=document.createElement("div"),c[s].classList.add("bottomcard"),d[s]=document.createElement("h2"),d[s].classList.add("projectName"),d[s].textContent=projectarray[s],t[s].appendChild(d[s]),a[s]=document.createElement("div"),a[s].classList.add("divIcon"),iconDelete=document.createElement("img"),iconDelete.classList.add("icon"),iconDelete.src="./delete.png",iconEdit=document.createElement("img"),iconEdit.classList.add("icon"),iconEdit.src="./edit.png",a[s].appendChild(iconDelete),a[s].appendChild(iconEdit),t[s].appendChild(a),e[s].appendChild(t[s]);for(let e=0;l<n.m[s].todoArray.length;e++)i[e]=document.createElement("div"),i[e].classList.add("todoList"),o[e]=document.createElement("p"),o[e].classList.add("todoTitle"),o[e].textContent=n.m[s].todoArray[e].title,r[e]=document.createElement("p"),r[e].classList.add("todoDate"),r[e].textContent=n.m[s].todoArray[e].dueDate,i[e].appendChild(o[e]),i[e].appendChild(r[e]),c[s].appendChild(i[e]);e[s].appendChild(c[s]),document.querySelector("right-banner").appendChild(e[s])}}()}},t={};!function d(n){var a=t[n];if(void 0!==a)return a.exports;var c=t[n]={exports:{}};return e[n](c,c.exports,d),c.exports}(138)})();
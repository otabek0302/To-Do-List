let arr = [
     {
          id: Math.random(),
          isDone: false,
          task: "Buy Milk",
          time: new Date().getHours() + ":" + new Date().getMinutes()
     },
     {
          id: Math.random(),
          isDone: false,
          task: "End the project",
          time: new Date().getHours() + ":" + new Date().getMinutes()
     },
     {
          id: Math.random(),
          isDone: false,
          task: "Call mom",
          time: new Date().getHours() + ":" + new Date().getMinutes()
     },
     {
          id: Math.random(),
          isDone: false,
          task: "Sleep 10 hrs",
          time: new Date().getHours() + ":" + new Date().getMinutes()
     },

]
//Vars
let box = document.querySelector('.box');
let inp = document.querySelector('.text')

//Finction For creating Element
function reload (obj) {
     box.innerHTML = "";
     for (let item of obj) {
          let items = document.createElement('div'),
               title_time = document.createElement('div'),
               title = document.createElement('h3'),
               time = document.createElement('small'),
               close = document.createElement('span');

          items.classList.add('items');
          items.setAttribute('id', `${item.id}`);
          title_time.classList.add('title_time');
          title.classList.add('title');
          time.classList.add('time');
          close.classList.add('close');

          title.innerHTML = item.task;
          time.innerHTML = item.time;
          close.innerHTML = '&times;';


          title_time.append(title, time)
          items.append(title_time, close)
          box.append(items)

          items.onclick = () => {
               title.classList.toggle('checked')
               if (title.classList.contains('checked')) {
                    items.style = 'background: #b2b1b1;'
               } else {
                    items.style = 'background: #F0F0F0;'
               }
          }

          close.onclick = () => {
               var g = document.querySelector('.box');
               for (var i = 0, len = g.children.length; i < len; i++) {

                    (function (index) {
                         g.children[i].onclick = function () {
                              arr.splice(index, 1);
                              console.log(arr);
                              reload(arr)
                         }
                    })(i);

               }
          }

     }
     
}
reload(arr)

let form = document.forms.add

console.log(form);

form.onsubmit = (e) => {
     e.preventDefault()

     let obj = {
          id: Math.random(),
          isDone: false,
          time: new Date().getHours() + ":" + new Date().getMinutes()
     }

     let fm = new FormData(form) 
     fm.forEach((value, key) => {
          if (value.length > "") {
               obj[key] = value;
               arr.push(obj)
               reload(arr)
               inp.value = "";
          } else {
               alert(`Fill the blank don't sand empty blank`)
               return false; 
          }
     })
     
     
}


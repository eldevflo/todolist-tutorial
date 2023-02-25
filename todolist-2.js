
// function addTask(){
//     button.addEventListener('click',(event)=>{
//         //prevent default
//         event.preventDefault();
//         const task = input.value
//         if(!task)return
//         const tasksDivElement = document.querySelector('.tasks')
//         const taskElement = document.createElement('div')
//         taskElement.classList.add('task')
//         // template string
//         taskElement.innerHTML = `
//         <div class="content">
//             <input
//                 type="checkbox" class='checkbox'/>
//             <input
//                 type="text"
//                 class="text"
//                 value="${task}"
//                 readonly/>
//          </div>
//         <div class="actions">
//             <button class="edite" type="button"> Edite </button>
//             <button class="delete" type="button"> Delete </button>
//         </div>
//         `
//         tasksDivElement.appendChild(taskElement)
//         input.value = ''
//         deleteTask()
//         doneTask()
//     })

// }

// function deleteTask(){
// const taskElements = document.querySelectorAll('.task')
//     if(taskElements.length){
//         taskElements.forEach(taskElement => {
//             const deleteButtonElement= taskElement.querySelector('.delete')
//             deleteButtonElement.addEventListener('click', ()=>{
//                 taskElement.remove()
//             })
//         })
//     }
// }

// //arrow function =>
// const doneTask = ()=>{
// const taskElements = document.querySelectorAll('.task')
//     if(!taskElements.length)return
//     taskElements.forEach(taskElement => {
//         const checkbox = taskElement.querySelector('.checkbox')
//         checkbox.addEventListener('change', (event)=>{
//             console.log(event.target.checked , 'test');
//             const isChecked = event.target.checked
//             if(isChecked){
//                 taskElement.classList.add('is-done')
//                 return
//             }
//             taskElement.classList.remove('is-done')
//         })
//     })
// }

// addTask()


// reusability 

const todoList = []

const button =  document.getElementById('add-button')
const input = document.getElementById('add-input')

button.addEventListener('click', (event)=>{
    event.preventDefault()
    const value = input.value.trim()
    if(value !== ''){
        addTodo(value)
        input.value = ''
    }
});

function addTodo(value){
   const todo = {
    title: value,
    isDone: false,
    id: Date.now()
   } 
   todoList.push(todo)
   renderTodo(todo)
}

function renderTodo(todo){
    const tasksDivElement = document.querySelector('.tasks')
    const taskElement = document.createElement('div')
    taskElement.classList.add('task')
    // template string
    taskElement.innerHTML = `
    <div class="content">
        <input
            type="checkbox" class='checkbox'/>
        <input
            type="text"
            class="text"
            value="${todo.title}"
            readonly/>
        </div>
    <div class="actions">
        <button class="edite" type="button"> Edite </button>
        <button class="delete" type="button"> Delete </button>
    </div>
    `
    taskElement.setAttribute('data-key', todo.id)
    tasksDivElement.appendChild(taskElement)
}

const tasksElement = document.querySelector('.tasks')

tasksElement.addEventListener('click', (event) =>{
    console.log(event.target.classList);
    if(event.target.classList.contains('content')){
        const taskId = event.target.parentElement.dataset.key
        
        // doneTodo()
    }
})
const input = document.getElementById('add-input')
const button =  document.getElementById('add-button')
function addTask(){
    button.addEventListener('click',(event)=>{
        //prevent default
        event.preventDefault();
        const task = input.value
        if(!task)return
        const tasksDivElement = document.querySelector('.tasks')
        const taskElement = document.createElement('div')
        taskElement.classList.add('task')
        // template string
        taskElement.innerHTML = `
        <div class="content">
            <input
                type="text"
                class="text"
                value="${task}"
                readonly/>
         </div>
        <div class="actions">
            <button class="edite" type="button"> Edite </button>
            <button class="delete" type="button"> Delete </button>
        </div>
        `
        tasksDivElement.appendChild(taskElement)
        input.value = ''
        deleteTask()
    })

}

function deleteTask(){
    const taskElements = document.querySelectorAll('.task')
    if(taskElements.length){
        taskElements.forEach(taskElement => {
            const deleteButtonElement= taskElement.querySelector('.delete')
            deleteButtonElement.addEventListener('click', ()=>{
                taskElement.remove()
            })
        })
    }
}

addTask()

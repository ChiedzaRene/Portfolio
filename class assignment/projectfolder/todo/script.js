document.querySelector('#push').onclick = function () {
    const newTaskInput = document.querySelector('.newtask input');
    const taskName = newTaskInput.value;

    if (taskName.trim().length === 0) {
        alert("Please enter a task");
        return;
    }

    document.querySelector('#tasklist').innerHTML += `
    
    <div class="task">
        <span id="taskname" >
        ${document.querySelector('.newtask input').value}
        </span>
        <button class="delete">
                <i class="fa-solid fa-trash"></i>
            </button>
        
         
    `;

    var tasks = document.querySelector("#taskname");
    for (var i = 0; i < tasks.length; i++) {
        tasks[i].onclick = function () {
            this.classlist.toggle('completed')
        }
    }

    const deleteButtons = document.querySelectorAll('.delete');  // Corrected selector
            deleteButtons.forEach(button => {
                button.onclick = function () {
                    this.parentNode.remove();
                }
            });

            newTaskInput.value = "";
}
let todo = {
    tasksList: [],
    addTasks: (task) => {
        if (task === '') {
            alert('Please enter a task');
            return;
        }
        todo.tasksList.push({
            text: task,
            completed: false
        });
        todo.renderTasks();
    },
    toggleTask: (index) => {
        todo.tasksList[index].completed = !todo.tasksList[index].completed; // reverse the value of completed
        todo.renderTasks();
    },
    deleteTask:() => {
        todo.tasksList = todo.tasksList.filter( task => task.completed === true);
        todo.renderTasks();
    },
    renderTasks: () => {
        let renderList = document.getElementById('task-list');
        renderList.innerHTML = '';
        todo.tasksList.forEach((task, index) => {
            let li = document.createElement('li');
            li.textContent = task.text;
            li.onclick = () => todo.toggleTask(index);
            if(task.completed) 
                li.classList.add('completed');
            renderList.appendChild(li);
        });
    }
};

document.getElementById('add-task').onclick = () => {
    let task = document.getElementById('input').value;
    todo.addTasks(task);
    task.value = '';
};

todo.addTasks('Learn JavaScript');
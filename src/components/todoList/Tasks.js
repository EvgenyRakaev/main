import React from 'react';

const Tasks = (props) => {
    function editButtonClick(id) {
        if (!props.taskList.find(task => {
                if (task.id === id) return task.completed;
            }
        )) {
            const editedTask = props.taskList.find(task => task.id === id)
            props.setTaskEdit(editedTask);
        }
    }

    function deleteButtonClick(id) {
        const newTasks = props.taskList.filter(task => task.id !== id);
        props.setTaskList(newTasks);
    }

    function isChecked(id) {
        const newTasks = props.taskList.map(task => task.id === id ?
            {title: task.title, completed: !task.completed, id: task.id} :
            task
        );
        props.setTaskList(newTasks);
    }

    return (
        props.taskList.map(task => (
            <li key={task.id} className={task.completed.toString()}>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => isChecked(task.id)}
                />
                <span>{task.title}</span>
                <button onClick={() => editButtonClick(task.id)}>Edit</button>
                <button onClick={() => deleteButtonClick(task.id)}>Delete</button>
            </li>
        ))

    );
};

export default Tasks;
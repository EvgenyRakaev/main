import React, {useEffect} from 'react';

const Form = (props) => {
    function inputSubmit(event) {
        event.preventDefault();
        if (!props.taskEdit) {
            const newTasks = [...props.taskList,
                {
                    title: props.inputTask,
                    completed: false,
                    id: Math.random().toString(36).slice(2, 10)
                }
            ];
            props.setTaskList(newTasks);
        } else {
            const newTasks = props.taskList.map(
                task => (task.id === props.taskEdit.id) ?
                    {title: props.inputTask, completed: task.completed, id: task.id} :
                    task
            );
            props.setTaskList(newTasks);
        }
        props.setInputTask('');
        props.setTaskEdit('');
    }

    function inputChange(event) {
        event.preventDefault();
        props.setInputTask(event.target.value);
    }

    useEffect(() => {
        if (props.taskEdit) {
            props.setInputTask(props.taskEdit.title);
        } else {
            props.setInputTask('');
        }
    }, [props.taskEdit]);


    return (
        <form onSubmit={inputSubmit}>
            <input
                type="text"
                value={props.inputTask}
                onChange={inputChange}
            />
            <button>{!props.taskEdit ? 'Add task' : 'Confirm changes'}</button>
        </form>
    );
};

export default Form;
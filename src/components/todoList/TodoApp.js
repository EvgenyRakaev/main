import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";

const TodoApp = (props) => {

    const [taskEdit, setTaskEdit] = React.useState(false);
    const [inputTask, setInputTask] = React.useState('');

    function todoApp(event) {
        event.preventDefault();
        props.setProjects(false);
    }

    return (
        <div>
            <h1>Tasks list</h1>
            <h3>What needs to be done?</h3>
            <div>
                <button onClick={todoApp}>Close tasks</button>
            </div>
            <Form
                taskEdit={taskEdit}
                setTaskEdit={setTaskEdit}
                taskList={props.taskList}
                setTaskList={props.setTaskList}
                inputTask={inputTask}
                setInputTask={setInputTask}
            />
            <Tasks
                taskEdit={taskEdit}
                setTaskEdit={setTaskEdit}
                taskList={props.taskList}
                setTaskList={props.setTaskList}
                inputTask={inputTask}
                setInputTask={setInputTask}
            />
        </div>
    );
};

export default TodoApp;
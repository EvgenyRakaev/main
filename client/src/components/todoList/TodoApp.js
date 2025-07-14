import React from 'react';
import Form from "./Form";
import Tasks from "./Tasks";
import { NavLink } from "react-router";
import {Card, CardBody, CardHeader, CloseButton} from "reactstrap";

const TodoApp = (props) => {

    const [taskEdit, setTaskEdit] = React.useState(false);
    const [inputTask, setInputTask] = React.useState('');

    return (
        <Card
            className="my-2"
            style={{
                width: '60rem'
            }}
        >
            <NavLink to="/main/"><CloseButton style={{margin: "0 0 0 58rem"}}/></NavLink>
            <CardHeader>

                <h1>Tasks list</h1>
                <h3>What needs to be done?</h3>
            </CardHeader>
            <CardBody>
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
            </CardBody>

        </Card>
    );
};

export default TodoApp;
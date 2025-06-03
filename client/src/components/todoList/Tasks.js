import React from 'react';
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";

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
            <Row className="row-cols-lg-auto g-3 align-items-center" key={task.id}>
                <Col>
                    <FormGroup check>
                        <Input
                            id="exampleCheckbox"
                            name="checkbox"
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => isChecked(task.id)}
                        />
                        <Label
                            check
                            for="exampleCheckbox"
                            style={{minWidth: "20rem"}}
                        >
                            {task.title}
                        </Label>
                    </FormGroup>
                </Col>
                <Col>
                    <Button outline size="sm" style={{minWidth: "5rem"}} color="warning" onClick={() => editButtonClick(task.id)}>
                        Edit
                    </Button>
                    <Button outline size="sm" style={{minWidth: "5rem"}} color="danger" onClick={() => deleteButtonClick(task.id)}>
                        Delete
                    </Button>
                </Col>
            </Row>
        ))
    );
};

export default Tasks;
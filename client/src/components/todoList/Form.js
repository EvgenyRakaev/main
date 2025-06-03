import React, {useEffect} from 'react';
import {Button, Col, Input, Label, Row, Form as Form2} from "reactstrap";

const Form = (props) => {
    function inputSubmit(event) {
        event.preventDefault();
        if(props.inputTask){
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
    }

    function inputChange(event) {
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
        <Form2 onSubmit={inputSubmit}>
            <Row className="row-cols-lg-auto g-3 align-items-center">
                <Col>
                    <Label
                        className="visually-hidden"
                        for="exampleEmail"
                    >
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Enter your task here..."
                        type="text"
                        value={props.inputTask}
                        onChange={inputChange}
                    />
                </Col>
                <Col>
                    <Button color="primary" style={{minWidth: "10rem"}}>
                        {!props.taskEdit ? 'Add task' : 'Confirm changes'}
                    </Button>
                </Col>
            </Row>
        </Form2>
)
    ;
};

export default Form;
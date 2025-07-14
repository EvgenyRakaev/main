import React, {useEffect} from 'react';
import {Button, Col, FormGroup, Input, Label, Row} from "reactstrap";
import {useDispatch, useSelector} from "react-redux";
import {API_URL} from "../../redux-store/store";

const Tasks = (props) => {
    let todoList = useSelector((state) => state.todoList);
    const dispatch = useDispatch();

    function editTask(id) {
        if (!todoList.find(task => {
                if (task.id === id) return task.completed;
            }
        )) {
            const editedTask = todoList.find(task => task.id === id)
            props.setTaskEdit(editedTask);
        }
    }

    function deleteTask(id) {
        dispatch({type: "DELETE_TASK", payload: id});
    }

    function completed(id) {
        dispatch({type: "COMPLETE_TASK", payload: id});
    }

    async function getTasks() {
        const res = await fetch(`${API_URL}/api/task`, {method: 'GET'});

        const data = await res.json();

        if (res.ok) {
            console.log('✅ Tasks are loaded:', data);
            dispatch({type: 'GET_TASK_LIST', payload: data});
        } else {
            console.error('❌ Tasks are not loaded:', data.error);
        }
    }
    useEffect(() => {
        getTasks();
    }, [])

    return (
        todoList.map(task => (
            <Row className="row-cols-lg-auto g-3 align-items-center" key={task.id}>
                <Col>
                    <FormGroup check>
                        <Input
                            id="exampleCheckbox"
                            name="checkbox"
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => completed(task.id)}
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
                    <Button outline size="sm" style={{minWidth: "5rem"}} color="warning"
                            onClick={() => editTask(task.id)}>
                        Edit
                    </Button>
                    <Button outline size="sm" style={{minWidth: "5rem"}} color="danger"
                            onClick={() => deleteTask(task.id)}>
                        Delete
                    </Button>
                </Col>
            </Row>
        ))
    );
};

export default Tasks;
import React, {useEffect} from 'react';
import {Button, Col, Input, Label, Row, Form as Form2} from "reactstrap";
import {useDispatch} from "react-redux";
import {API_URL} from "../../redux-store/store";

const Form = (props) => {
    const dispatch = useDispatch();

    async function inputSubmit(event) {
        event.preventDefault();
        if(props.inputTask){
            if (!props.taskEdit) {
                const res = await fetch(`${API_URL}/api/task`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({title: props.inputTask})
                });

                const data = await res.json();

                if (res.ok) {
                    console.log('✅ Task added:', data);
                    dispatch({type: "ADD_TASK",
                        payload: data
                    });
                } else {
                    console.error('❌ Failed to add task:', data.error);
                }
            } else {
                dispatch({type: "EDIT_TASK",
                    payload: {...props.taskEdit, title: props.inputTask}});
            }
            props.setInputTask('');
            props.setTaskEdit(false);
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
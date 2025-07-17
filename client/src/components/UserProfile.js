import React, {useEffect, useState} from 'react';
import {Button, Form, FormGroup, FormText, Input, Label} from "reactstrap";
import {localStorageGet, localStorageSet} from "./handlers/localStorage";
import {API_URL} from "../redux-store/store";

const UserProfile = () => {
    const [userForm, setUserForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        role: 'user',
        login: '',
        password: '',
    })

    function userFormStateChange(event) {
        setUserForm({...userForm, [event.target.name]: event.target.value})
    }

    function formSubmit(event) {
        event.preventDefault();
        console.log("userFormStateChange", userForm)
    }

    async function getUserProfile() {
        const res = await fetch(`${API_URL}/api/user/${localStorageGet('user').id}`, {
            method: 'GET',
        });

        const data = await res.json();

        if (res.ok) {
            console.log('✅ Profile data loaded:', data);
            setUserForm({...userForm, ...data});
        } else {
            console.error('❌ Profile data not loaded:', data.error);
        }
    }

    useEffect(() => {
        getUserProfile();
    }, [])

    return (
        <div>
            <Form onSubmit={formSubmit}>
                <FormGroup>
                    <Label for="exampleEmail">
                        Email
                    </Label>
                    <Input
                        id="exampleEmail"
                        name="email"
                        placeholder="Your email..."
                        type="email"
                        value={userForm.email}
                        onChange={userFormStateChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="firstName">
                        First Name
                    </Label>
                    <Input
                        id="firstName"
                        name="firstName"
                        placeholder="Your First Name..."
                        type="text"
                        value={userForm.firstName}
                        onChange={userFormStateChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">
                        Last Name
                    </Label>
                    <Input
                        id="lastName"
                        name="lastName"
                        placeholder="Your First Name..."
                        type="text"
                        value={userForm.lastName}
                        onChange={userFormStateChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePassword">
                        Password
                    </Label>
                    <Input
                        id="examplePassword"
                        name="password"
                        placeholder="Your password to verify changes..."
                        type="password"
                        value={userForm.password}
                        onChange={userFormStateChange}
                        required
                    />
                </FormGroup>
                <Button disabled={!userForm.password} color="primary">
                    Submit
                </Button>

                {/*<FormGroup>*/}
                {/*    <Label for="exampleSelect">*/}
                {/*        Role*/}
                {/*    </Label>*/}
                {/*    <Input*/}
                {/*        id="exampleSelect"*/}
                {/*        name="select"*/}
                {/*        type="select"*/}
                {/*        onChange={userFormStateChange}*/}
                {/*    >*/}
                {/*        <option>*/}
                {/*            User*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            Admin*/}
                {/*        </option>*/}
                {/*    </Input>*/}
                {/*</FormGroup>*/}

                {/*todo Permissions -------------------------------------------*/}
                {/*<FormGroup>*/}
                {/*    <Label for="exampleSelectMulti">*/}
                {/*        Permissions*/}
                {/*    </Label>*/}
                {/*    <Input*/}
                {/*        id="exampleSelectMulti"*/}
                {/*        multiple*/}
                {/*        name="selectMulti"*/}
                {/*        type="select"*/}
                {/*    >*/}
                {/*        <option>*/}
                {/*            Read*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            Write*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            Edit*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            Delete*/}
                {/*        </option>*/}
                {/*        <option>*/}
                {/*            Update*/}
                {/*        </option>*/}
                {/*    </Input>*/}
                {/*</FormGroup>*/}
                {/*todo About the user and Photo selection ----------------------------------*/}
                {/*<FormGroup>*/}
                {/*    <Label for="exampleText">*/}
                {/*        About*/}
                {/*    </Label>*/}
                {/*    <Input*/}
                {/*        id="exampleText"*/}
                {/*        name="text"*/}
                {/*        type="textarea"*/}
                {/*    />*/}
                {/*</FormGroup>*/}
                {/*<FormGroup>*/}
                {/*    <Label for="exampleFile">*/}
                {/*        Profile photo*/}
                {/*    </Label>*/}
                {/*    <Input*/}
                {/*        id="exampleFile"*/}
                {/*        name="file"*/}
                {/*        type="file"*/}
                {/*    />*/}
                {/*    <FormText>*/}
                {/*        This is some placeholder block-level help text for the above input. It‘s a bit lighter and*/}
                {/*        easily wraps to a new line.*/}
                {/*    </FormText>*/}
                {/*</FormGroup>*/}
            </Form>
        </div>
    );
};

export default UserProfile;
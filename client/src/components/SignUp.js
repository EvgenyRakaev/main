import React, {useState} from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {localStorageSet} from "./handlers/localStorage";
import {useNavigate} from "react-router-dom";

const SignUp = ({user, setUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();


        const res = await fetch('http://localhost:3000/api/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password,
                firstName: firstName,
                lastName: lastName,
            })
        });

        const data = await res.json();

        if (res.ok) {
            console.log('✅ Вход успешен:', data);
            setUser(data.user);
            localStorageSet('user', data.user);

            setEmail('')
            setPassword('')
            navigate('/sign-in/');
        } else {
            console.error('❌ Ошибка входа:', data.error);
        }
    }




return (
        <div>
            <Form onSubmit={handleSubmit}>
                <FormGroup floating>
                    <Input
                        id="email"
                        name='email'
                        placeholder="E-mail"
                        type="email"
                        value={email}
                        required
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Label for="email">
                        E-mail
                    </Label>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="firstName"
                        name='firstName'
                        placeholder="First Name"
                        type="text"
                        value={firstName}
                        required={false}
                        onChange={(event) => setFirstName(event.target.value)}
                    />
                    <Label for="firstName">
                        First Name
                    </Label>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="lastName"
                        name='lastName'
                        placeholder="Last Name"
                        value={lastName}
                        required={false}
                        onChange={(event) => setLastName(event.target.value)}
                        type="text"
                    />
                    <Label for="lastName">
                        Last Name
                    </Label>
                </FormGroup>
                <FormGroup floating>
                    <Input
                        id="password"
                        name='password'
                        placeholder="Password"
                        value={password}
                        required
                        onChange={(event) => setPassword(event.target.value)}
                        type="password"
                    />
                    <Label for="examplePassword">
                        Password
                    </Label>
                </FormGroup>
                <Button>
                    Sign Up
                </Button>
            </Form>
        </div>
    );
};

export default SignUp;
import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {localStorageSet} from "./handlers/localStorage";
import {useNavigate} from "react-router-dom";

const SignIn = ({user, setUser}) => {

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();

    const handleLogin = async (email, password) => {
        const res = await fetch('http://localhost:3000/api/signIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const data = await res.json();

        if (res.ok) {
            console.log('✅ Вход успешен:', data);
            setUser(data.user);
            localStorageSet('user', data.user);

            setEmail('')
            setPassword('')
            navigate('/main/');
        } else {
            console.error('❌ Ошибка входа:', data.error);
        }
    }
    return (
        <Form>
            <FormGroup floating>
                <Input
                    id="email"
                    name='email'
                    placeholder="E-mail"
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Label for="email">
                    E-mail
                </Label>
            </FormGroup>
            {' '}
            <FormGroup floating>
                <Input
                    id="examplePassword"
                    name='examplePassword'
                    placeholder="Password"
                    value={password}
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Label for="examplePassword">
                    Password
                </Label>
            </FormGroup>
            {' '}
            <Button onClick={() => handleLogin(email, password)}>
                Sign In
            </Button>
        </Form>
    );
};

export default SignIn;
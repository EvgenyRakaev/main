import React from 'react';
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import {localStorageSet} from "./handlers/localStorage";
import {useNavigate} from "react-router-dom";

const SignIn = ({user, setUser}) => {

    const [login, setLogin] = React.useState('');
    const [password, setPassword] = React.useState('');

    const navigate = useNavigate();

    const handleLogin = async (login, password) => {
        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: login,
                password: password
            })
        });

        const data = await res.json();

        if (res.ok) {
            console.log('✅ Вход успешен:', data);
            setUser(data.user);
            localStorageSet('user', data.user);

            setLogin('')
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
                    id="login"
                    name='login'
                    placeholder="Login"
                    type="text"
                    value={login}
                    onChange={(e) => setLogin(e.target.value)}
                />
                <Label for="login">
                    Email
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
            <Button onClick={() => handleLogin(login, password)}>
                Sign In
            </Button>
        </Form>
    );
};

export default SignIn;
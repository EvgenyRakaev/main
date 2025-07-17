import Navigation from "./components/Navigation";
import Main from "./components/Main";
import TodoApp from "./components/todoList/TodoApp";
//import Footer from "./components/Footer";
import React from "react";
import store from "./redux-store/store";
import {Provider} from 'react-redux'
import SignIn from "./components/SignIn";
import {Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import {localStorageGet} from "./components/handlers/localStorage";
import SignUp from "./components/SignUp";
import UserProfile from "./components/UserProfile";

function App() {
    const [taskList, setTaskList] = React.useState([]);
    const [user, setUser] = React.useState(localStorageGet('user'));
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="App" style={{marginTop: '4rem'}}>
                    <Navigation user={user} setUser={setUser}/>
                        <Routes>
                            {user ? (
                                <>
                                    <Route path="/" element={
                                        <Main/>
                                    }/>
                                    <Route path="/main/" element={
                                        <Main/>
                                    }/>
                                    <Route path="/main/todoApp/" element={
                                        <TodoApp
                                            taskList={taskList}
                                            setTaskList={setTaskList}
                                        />
                                    }
                                    />
                                    <Route path="/profile/" element={<UserProfile/>}/>
                                </>
                            ) :
                                (
                                 <>
                                     <Route path="/sign-in/" element={<SignIn user={user} setUser={setUser} />} />
                                     <Route path="/sign-up/" element={<SignUp user={user} setUser={setUser} />} />
                                     {/*<Route path="*" element={<Navigate to="/sign-in/" />} />*/}
                                 </>
                                )}
                        </Routes>


                    {/*<Footer/>*/}
                </div>


            </Provider>
        </BrowserRouter>
    )
}

export default App;

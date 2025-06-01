import Navigation from "./components/Navigation";
import Main from "./components/Main";
import TodoApp from "./components/todoList/TodoApp";
//import Footer from "./components/Footer";
import React, {useState} from "react";
import store from "./redux-store/store";
import {Provider} from 'react-redux'
import SignIn from "./components/SignIn";
import {Routes, Route, BrowserRouter} from "react-router-dom";

function App() {
    const [taskList, setTaskList] = React.useState([]);
    return (
        <BrowserRouter>
            <Provider store={store}>
                <div className="App" style={{marginTop: '4rem'}}>
                    <Navigation />



                    <Routes>
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
                        <Route path="/main/sign-in/" element={<SignIn/>}/>
                    </Routes>

                    {/*<Footer/>*/}
                </div>


            </Provider>
        </BrowserRouter>
    )
}

export default App;

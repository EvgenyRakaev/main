import Navigation from "./components/Navigation";
import Main from "./components/Main";
import TodoApp from "./components/todoList/TodoApp";
import Footer from "./components/Footer";
import React, {useState} from "react";

function App() {
    const [projects, setProjects] = useState(false);
    const [taskList, setTaskList] = React.useState([]);
    if (projects) {
        return (
            <div className="Projects">
                <TodoApp
                    taskList={taskList}
                    setTaskList={setTaskList}
                    setProjects={setProjects}
                />
            </div>
        )
    }
    return (
        <div className="App">
            <Navigation
                projects={projects}
                setProjects={setProjects}
            />
            <Main/>
            <Footer/>
        </div>
    );
}

export default App;

const initialState = [{id:1, title: "task 1", completed: false},{id:2, title: "task 2", completed: false}];

export default function todoListReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TASK_LIST':
            return [...action.payload];
        case 'ADD_TASK':
            return [...state, {...action.payload, completed: false, id: Math.random().toString(36).slice(2, 10)}]
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload)
        case 'EDIT_TASK':
            return state.map(task => task.id === action.payload.id ? action.payload : task)
        case 'COMPLETE_TASK':
            return state.map(task => task.id === action.payload ? {...task, completed: !task.completed} : task);
        default:
            return state;
    }
}
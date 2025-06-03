import {combineReducers, legacy_createStore as createStore} from 'redux'

export const LOCAL_STORAGE_KEY = "supposedToBeUniqueKey";

function counterReducer(state = 0, action) {


    switch (action.type) {
        // case 'counter/incremented':
        //     return { value: state.value + 1 }
        // case 'counter/decremented':
        //     return { value: state.value - 1 }
        // case 'counter/reset':
        //     return { value: action.payload}
        default:
            return state
    }
}

function todoListReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload]
        case 'DELETE_TASK':
            return state.filter(task => task.id !== action.payload)
        case 'EDIT_TASK':
            return state.map(task => task.id === action.payload.id ? action.payload : task)
        default:
            return state;
    }
}

const combinedReducers = combineReducers({
    counter: counterReducer,
    todoList: todoListReducer,
})

let store = createStore(combinedReducers)

export default store;
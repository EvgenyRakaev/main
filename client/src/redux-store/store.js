import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux'
import todoListReducer from "./todoListReducer";
import {thunk} from 'redux-thunk';

export const LOCAL_STORAGE_KEY = "supposedToBeUniqueKey";
export const API_URL = process.env.REACT_APP_API_URL;

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

const combinedReducers = combineReducers({
    counter: counterReducer,
    todoList: todoListReducer,
})

let store = createStore(combinedReducers, applyMiddleware(thunk));

export default store;
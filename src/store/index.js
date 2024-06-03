import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import authReducer from './auth';


const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer }
})


export default store

// const counterReducer = (state = defaultProps, action) => {
//     if (action.type === "increment") {
//         return { ...state, counter: state.counter + 1 }
//     }
//     if (action.type === "increase") {
//         return { ...state, counter: state.counter + action.amount }
//     }
//     if (action.type === "decrement") {
//         return { ...state, counter: state.counter - 1 }
//     }
//     if (action.type === "toggle") {
//         return { ...state, showCounter: !state.showCounter, }
//     }
//     return state;
// }

// const store = createStore(counterReducer)

// export default store;

import { createStore } from 'redux';

const defaultProps = {
    counter: 0
}

const counterReducer = (state = defaultProps, action) => {
    if (action.type === "increment") {
        return { counter: state.counter + 1 }
    } else if (action.type === "decrement") {
        return { counter: state.counter - 1 }
    }
    return state;
}

const store = createStore(counterReducer)

export default store;

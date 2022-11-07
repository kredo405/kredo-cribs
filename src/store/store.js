import { createStore } from 'redux';
const initialState = {
    subject: {
        name: '',
        class: '',
    },
    db: '',
    finishTest: {
        questions: 0,
        isTrue: 0,
    },
    profTest: ['']
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SUB':
            return {
                ...state,
                subject: {
                    name: action.payload.name,
                    class: action.payload.class,
                }
            };
        case 'DB':
            return {
                ...state,
                db: action.payload
            };
        case 'FINISHTEST':
            return {
                ...state,
                finishTest: action.payload
            };
        case 'PROFTEST':
            return {
                ...state,
                profTest: action.payload
            };    

        default:
            return state;
    }
}

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
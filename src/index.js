import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom"
import * as serviceWorker from './serviceWorker'
import AppRedux from './AppRedux';
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import reduxThunk from "redux-thunk"
import rootReducer from "./Redux/rootReducer"

// function loagerMiddleWare(store) {
//     return function (next) {
//         return function (action) {
//             const result = next(action)
//             console.log("MiddleWare", store.getState());

//             return result
//         }
//     }
// }

const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const loagerMiddleWare = store => next => action => {
    const result = next(action)
    console.log("MiddleWare", store.getState());
    return result
}

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(
    loagerMiddleWare,
    reduxThunk
)))
const app = (
    <Provider store={store}>
        <AppRedux />
    </Provider >
)
// const app = (
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// )
ReactDOM.render(app, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

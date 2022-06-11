import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import todosReducers from "./components/services/reducers/todosReducers";

const store = createStore(todosReducers, applyMiddleware(thunk))
export default store
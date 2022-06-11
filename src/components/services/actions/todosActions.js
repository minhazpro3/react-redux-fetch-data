import axios from "axios";
import { GET_TODO_FAILED, GET_TODO_REQUEST, GET_TODO_SUCCESS } from './../constant/todosConstant';

const getAllTodos = () => async (dispatch)=>{
    dispatch({type: GET_TODO_REQUEST})
    try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos")
    dispatch({type: GET_TODO_SUCCESS , payload: res.data})
    } catch (error) {
        dispatch({type: GET_TODO_FAILED , payload: error.message})
    }

}

export default getAllTodos
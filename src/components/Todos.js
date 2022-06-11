import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getAllTodos from './services/actions/todosActions'

const Todos = () => {
const dispatch = useDispatch()
const {isLoading,todos,error} = useSelector(state=>state)
useEffect(()=>{
    dispatch(getAllTodos())
},[])

 

    return (
        <div>
            <h2>Todos App</h2>
           {isLoading &&  <h2>..........Loading</h2>}
           {error &&  <h4>{error.message}</h4>}
           <section>
            {
                todos && todos.map(todo=>{
                  return (
                    <div key={todo.id}>
                    <h4>{todo.id}</h4>
                    <h4>{todo.title}</h4>
                    <h4>{todo.completed}</h4>
                </div>
                  )
                })
            }
           </section>
        </div>
    );
};

export default Todos;
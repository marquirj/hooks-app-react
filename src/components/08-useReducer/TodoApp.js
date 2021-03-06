import React, {useReducer, useEffect} from 'react'
import './styles.css';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import {todoReducer } from './todoReducer';


const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    
    //cada vez que cambie todos salta y ejecuta la logica
    useEffect(() => {
        
    localStorage.setItem('todos',JSON.stringify(todos));
    }, [todos]);

    const handleDelete = (todoId) => {
        
        const action = {
            type: 'delete',
            payload: todoId
        };
        dispatch(action);
    };


    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload:todoId
        });
    };

    const handleAddTodo = (newTodo) => {
        dispatch({
            type:'add',
            payload:newTodo
        });

    }


    return (
        <div>
            <h1>TodoApp  ({todos.length})</h1>
            <hr />

            <div className="row">
                <TodoList 
                    todos={todos}
                    handleDelete={handleDelete}
                    handleToggle={handleToggle}
                />
                
                <div className="col-5">

                    <TodoAdd
                        handleAddTodo={handleAddTodo}
                     />
                   
                </div>
            </div>
        </div>
    )
}

const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];


//Se le pasa un estado y una acción y devuelve un estado(el nuevo)
const todoReducer= (state = initialState, action) => {
    
    if(action?.type === 'agregar'){
        return [...state, action.payload];
    }
    return state;
}
let todos = todoReducer();

const newTodo = [{
    id: 2,
    todo: 'Comprar leche',
    done: false
}];

const agregaTodoAction = {
    type: 'agregar',
    payload: newTodo,

};
todos = todoReducer(todos, agregaTodoAction );
console.log(todos);
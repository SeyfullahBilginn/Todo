
const INITIAL_STATE = {
    todos: [],
    error: [],
    loading: true
};

const listReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "ADD_LIST":
            const item = {title: action.payload,completed:false, id: +state.todos[state.todos.length-1].id + +1}
            console.log("state: " + (+state.todos[state.todos.length-1].id + +1))
            return {
                ...state,
                todos: [...state.todos ,item]
            }
            
            break;
        case "DEL_LIST":
            var deletedItem = state.todos.filter((item) => item.title!==action.payload.title)
            console.log(deletedItem)
            return {
                ...state,
                todos: deletedItem
            }            
            break;
        case "CHANGE_COMPLETED":
            return {
                ...state,
                todos: state.todos.map(todo => 
                    todo.id === action.payload.id ? {...todo, completed: !todo.completed} : todo    
                ) 
            }
            break;
        case "FETCH_USERS_REQUEST":
            return {
                loading: true
            }
        case "FETCH_USERS_SUCCESS":
            return {
                loading: false,
                todos: action.payload,
                error: ''
            }
        case "FETCH_USERS_FAILURE":
            return {
                loading: false,
                // ...state,
                todos: [],
                error: action.payload
            }
        case "SET_LIST":
            return{
                ...state,
                todos: action.payload
            }
        default:
            return state;
            break;
    }
}
export default listReducer;
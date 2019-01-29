const initialState = {
    todos: [
    {
        text: "Make todo list",
        id: 123423400412,
        completed: false
    },
    {
        text: "Try not to cry",
        id: 877813210930,
        completed: false
    }
    ]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                ...state,
                todos: [...state.todos, {text: action.text, id: Date.now(), completed: false}]
            }
        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(item => item.id === action.id ? {...item, completed: !item.completed} : item)
            }    
        case 'DELETE_ITEM':
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.id)
            } 
        default:
            return state
    }
  }

  export default reducer;
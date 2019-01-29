export const addTodo = text => ({
    type: 'ADD_TODO',
    text
  })

export const toggleCompleted = (id) => ({
    type: 'TOGGLE_COMPLETED',
    id
})
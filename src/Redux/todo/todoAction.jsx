
export const deleteTodo = (id) => ({
    type : "DELETE_TODO",
    payload : id
})


export const addTodo = (todo) => ({
    type : "ADD_TODO",
    payload : todo
})


export const editTodo = (todo) => ({
    type : "EDIT_TODO",
    payload : todo
})


export const updateTodo = (newTodo) => ({
    type : "UPDATE_TODO",
    payload : newTodo
})

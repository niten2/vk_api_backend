// export const addTodo = (text) => ({
//   type: 'ADD_TODO',
//   id: nextTodoId++,
//   text
// })

// export const setVisibilityFilter = (filter) => ({
//   type: 'SET_VISIBILITY_FILTER',
//   filter
// })


const todos = (state = [], action) => {
  // console.log("red", state, action)
  return {
    settings: {
      perPage: action.perPage,
    }
  }
  // switch (action.type) {
  //   case 'CHANGE_PER_PAGE':
  //     return [
  //       ...state,
  //       {
  //         id: action.id,
  //         text: action.text,
  //         completed: false
  //       }
  //     ]
  //   case 'TOGGLE_TODO':
  //     return state.map(todo =>
  //       (todo.id === action.id)
  //         ? {...todo, completed: !todo.completed}
  //         : todo
  //     )
  //   default:
  //     return state
  // }
}

export default todos


// const todos = (state = [], action) => {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return [
//         ...state,
//         {
//           id: action.id,
//           text: action.text,
//           completed: false
//         }
//       ]
//     case 'TOGGLE_TODO':
//       return state.map(todo =>
//         (todo.id === action.id)
//           ? {...todo, completed: !todo.completed}
//           : todo
//       )
//     default:
//       return state
//   }
// }

// export default todos

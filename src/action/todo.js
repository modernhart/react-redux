export function addtodo(text) {
  return {
    type : 'ADD_TODO',
    text
  };
}

export function toggle(id) {
  return {
    type : 'TOGGLE_TODO',
    payload : id
  };
}

export function deleteOne(id) {
  return {
    type : 'DELETE_TODO',
    payload : id
  };
}

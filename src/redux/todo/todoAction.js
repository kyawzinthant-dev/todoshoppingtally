export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const UPDATE = 'UPDATE';

export function add(todoval){
  return {
    type: ADD,
    payload: todoval
  }
}

export function deleteit(index){
  return {
    type: DELETE,
    payload: index
  }
}

export function update(index){
  return {
    type: UPDATE,
    payload: index
  }
}
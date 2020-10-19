export const ADD = 'ADD';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

export function add(val){
    return {
        type: ADD,
        payload: val
    }
}

export function update(index){
    return {
        type: UPDATE,
        payload: index
    }
}

export function deleteitem(index){
    return {
        type: DELETE,
        payload: index
    }
}
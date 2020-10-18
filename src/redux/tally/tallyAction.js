export const PLUS = 'PLUS';
export const MINUS = 'MINUS';

export function plus(val){
  return {
    type: PLUS,
    payload: val
  }
}

export function minus(val){
  return {
    type: MINUS,
    payload: val
  }
}
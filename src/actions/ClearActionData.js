import {
  CLEAR_SAVED_PRODUCTS
} from './types';

function clearData() {
  return {
    type: CLEAR_SAVED_PRODUCTS
  }
}
export function ClearProducts(){
  return (dispatch, getState)=>{
    dispatch(clearData())
  }
}

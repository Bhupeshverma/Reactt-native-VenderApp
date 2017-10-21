import {
  SAVED_PRODUCTS
} from './types';


function savingData(data) {
  return {
    payload: data,
    type: SAVED_PRODUCTS
  }
}

export function SavedProducts(data){
  return (dispatch) => {
  dispatch(savingData(data))
}
}

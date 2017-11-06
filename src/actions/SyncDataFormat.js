import {
  SAVED_SYNC_PRODUCTS
} from './types';


function savingSyncData(data) {
  return {
    payload: data,
    type: SAVED_SYNC_PRODUCTS
  }
}

export function SyncWithCrm(data){
  return (dispatch) => {
  dispatch(savingSyncData(data))
}
}

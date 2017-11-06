import {
  CLEAR_SYNC_PRODUCTS
} from './types';

function clearSyncData() {
  return {
    type: CLEAR_SYNC_PRODUCTS
  }
}
export function ClearSyncProducts(){
  return (dispatch, getState)=>{
    dispatch(clearSyncData())
  }
}

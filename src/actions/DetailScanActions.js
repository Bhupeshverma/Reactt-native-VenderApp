import {
DETAIL_BARCODE_OPEN
} from './types';

function detailstartScanning(){
  return{
    type: DETAIL_BARCODE_OPEN
  }
}
export function DetailStartscan(){
  return (dispatch, getState)=>{
    dispatch(detailstartScanning())
  }
}

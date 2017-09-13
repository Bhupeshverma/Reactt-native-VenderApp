import {
BARCODE_DATA_CLOSE
} from './types';

function dataRecieved(data){
  return{
    type: BARCODE_DATA_CLOSE,
    payload: data
  }
}
export function recievedData(data){
  return (dispatch, getState)=>{
    dispatch(dataRecieved(data))
  }
}

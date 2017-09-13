import {
BARCODE_OPEN
} from './types';

function startScanning(){
  return{
    type: BARCODE_OPEN
  }
}
export function Startscan(){
  return (dispatch, getState)=>{
    dispatch(startScanning())
  }
}

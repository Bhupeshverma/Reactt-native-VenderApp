import {BARCODE_OPEN, BARCODE_DATA_CLOSE} from '../action/types';

const INITIAL_STATE = { barcodeState : false , dataWithBarcode : false }

export default function (state=INITIAL_STATE , action) {
  switch (action.type) {
    case BARCODE_OPEN:
      return {...state , barcodeState : true , dataWithBarcode : false}
    case BARCODE_DATA_CLOSE:
      return {...state , barcodeState : false , dataWithBarcode : action.payload}
    default:
      return state
  }
}

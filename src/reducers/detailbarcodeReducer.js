import {DETAIL_BARCODE_OPEN, DETAIL_BARCODE_DATA_CLOSE} from '../actions/types';

const INITIAL_STATE = { barcodeState : false , dataWithBarcode : false }

export default function (state=INITIAL_STATE , action) {
  switch (action.type) {
    case DETAIL_BARCODE_OPEN:
      return {...state , barcodeState : true , dataWithBarcode : false}
    case DETAIL_BARCODE_DATA_CLOSE:
      return {...state , barcodeState : false , dataWithBarcode : action.payload}
    default:
      return state
  }
}

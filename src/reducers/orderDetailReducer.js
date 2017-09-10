import { SCANNED_ORDER_DETAIL, GENERAL_SCAN} from '../action/types';

const INITIAL_STATE = { orderDetailScanner : true , dataOrderDetail : null , disabledScanner : false}

export default function(state=INITIAL_STATE , action) {
  switch (action.type) {
    case SCANNED_ORDER_DETAIL:
      return {...state , orderDetailScanner : false , dataOrderDetail : action.payload}
    case GENERAL_SCAN:
      return {...state , orderDetailScanner : true , dataOrderDetail : null}
    default:
      return state
  }
}

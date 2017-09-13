import {
  ALERT_TWIN_CASE,
  ALERT_TWIN_CASE_CLOSE
} from './types';

export function alertTwinCase(){
  return{
    type: ALERT_TWIN_CASE,
  }
}

export function alertTwinCaseClose(){
  return{
    type: ALERT_TWIN_CASE_CLOSE,
  }
}

import {
ALERT_GENERAL_CASE,
ALERT_GENERAL_CASE_CLOSE
} from './types';

export function alertGeneralCase(){
  return{
    type: ALERT_GENERAL_CASE,
  }
}

export function alertGeneralCaseClose(){
  return{
    type: ALERT_GENERAL_CASE_CLOSE,
  }
}

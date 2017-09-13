import {
  ALERT_NO_MORE_PRODUCTS,
  ALERT_NO_MORE_PRODUCTS_CLOSE
} from './types';

export function alertNoMoreProducts(){
  return{
    type: ALERT_NO_MORE_PRODUCTS,
  }
}

export function alertNoMoreProductsClose(){
  return{
    type: ALERT_NO_MORE_PRODUCTS_CLOSE,
  }
}

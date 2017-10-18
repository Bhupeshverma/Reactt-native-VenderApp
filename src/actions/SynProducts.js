import {
    UPDATE_PRODUCTS
} from './types'

export function batchDone(updatedProduct){
    return{
        type: UPDATE_PRODUCTS,
        payload: updatedProduct
    }
}
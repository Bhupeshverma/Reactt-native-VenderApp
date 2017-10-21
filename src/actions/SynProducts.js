import {
    SYNCING_PRODUCTS,
    SYNCED_PRODUCTS,
    ERROR_SYNCING_PRODUCTS
} from './types'


function isSyncingProducts() {
    return{
        type : SYNCING_PRODUCTS
    }
}

function syncedProducts(data) {
    return{
        type : SYNCED_PRODUCTS,
        payload : data
    }
}

function syncedProductsError() {
    return {
        type : ERROR_SYNCING_PRODUCTS
    }
}


export function Sync(){
    return (dispatch , getState) => {

        dispatch(isSyncingProducts());

        const {sessionID} = getState().auth
        const {user : {name_value_list : {user_id : {value}}} } = getState().auth;
        

        return axios.post(`http://crm-dev.streetstylestore.com/webservice/get_missing_product_item.php`, data)
            .then((response) => {
                console.log(response.data)
                dispatch(syncedProducts(response));
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 401) {
                        dispatch(syncedProductsError());
                    }
                }
                else if (error.request) {
                    console.log(error)
                    dispatch(syncedProductsError());
                } else {
                    console.log(error)
                    dispatch(syncedProductsError());
                }
            })
    }
}

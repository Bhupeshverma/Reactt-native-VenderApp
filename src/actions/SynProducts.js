import {
    SYNCING_PRODUCTS,
    SYNCED_PRODUCTS,
    ERROR_SYNCING_PRODUCTS
} from './types'
import axios from 'axios';

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


export function Sync(dataArray, date, count){
    return (dispatch , getState) => {
        console.log("inside_Sync 1");
        dispatch(isSyncingProducts());
        console.log("inside Sync");
        console.log("date",date);


        console.log(count);
        const {sessionID} = getState().auth
        const {user : {name_value_list : {user_id : {value}}} } = getState().auth;
        const data ={

          "session": `${sessionID}`,
          "user_id": `${value}`,
    "name_value_list":[
        {
            "name": "name",
            "value": "af_"+`${date}`
        },
        {
            "name": "account_id_c",
            "value": "515f3931-fb4b-36f3-3f5a-570bd865a87b"
        },
        {
            "name": "total_shoes_c",
            "value": String(count)
        },
        {
            "name": "date_rec",
            "value": `${date}`
        },
        {
            "name": "status",
            "value": "in-dispatch"
        }

    ],
    "name_value_list_relation": dataArray
  }

  console.log(data);



        return axios.post(`http://crm.streetstylestore.com/webservice/setShoefromvendor.php`, data)
            .then((response) => {
                console.log(response.data)
                dispatch(syncedProducts(response));
            })
            .catch((error) => {
                if (error.response) {
                    if (error.response.status === 401) {

                        dispatch(syncedProductsError());
                        console.log(error);
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

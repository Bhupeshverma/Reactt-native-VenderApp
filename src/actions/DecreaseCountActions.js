import {UPDATED_PRODUCTS} from './types'
import {alertNoMoreProducts} from './AlertNoMoreProductsCaseAction';
import {alertTwinCase} from './AlertTwinCaseAction';

function updateProducts(newProductsArray) {
  return {
    type : UPDATED_PRODUCTS ,
    payload : {
      missing_item : newProductsArray
    }
  }
}

const requiredProducts = [
  '18654S39P01',
  '18654S39P02',
  '18654S39P03',
  '18654S39P04',
  '18654S39P05',
  '18654S39P06',
  '18654S39P07',
  '18654S39P08',
  '18654S39P09',
  '18654S39P10',
]

const requiredProductsDone = [];

export function decreaseCount(productID){
  return (dispatch , getState) => {
    var {products} = getState().productReducer ;
    var mutatedArray = [];
    var matchedIndex = 0;
    var formattedID = productID.slice(0,5);
    console.log("formattedID",formattedID);
    var size = productID.slice(6,8);
    console.log("size",size);
    products.missing_item.forEach((item , index)=>{
      if (formattedID === item.product_id) {
        matchedIndex = index;
        console.log("matchedIndex",matchedIndex);
        mutatedArray.push(item);
        console.log("mutatedArray",mutatedArray);
        console.log("mutatedArray[0]",mutatedArray[0]);
      }
      })
      //mutatedArray[0]
    if (size === '34' && mutatedArray[0].size_34 !== 0) {
      requiredProductsDone.forEach((item , index , arr1) => {
        if (item === productID) {
          dispatch(alert());
        }else {
          mutatedArray[0].size_34 -= 1;
          requiredProducts.forEach((item , index , arr) => {
            if (productID === item) {
              arr.splice(index,1);
              arr1.push(item);
            }
          })
        }
      })
      console.log("requiredProducts",requiredProducts);
      console.log("requiredProductsDone",requiredProductsDone);
    }

    if (size === '34' && mutatedArray[0].size_34 === 0) {
      dispatch(alert())
    }

    if (size === '35' && mutatedArray[0].size_35 !== 0) {
      mutatedArray[0].size_35 -= 1;
    }
    if (size === '35' && mutatedArray[0].size_35 === 0) {
      dispatch(alert())
    }

    if (size === '36' && mutatedArray[0].size_36 !== 0) {
      mutatedArray[0].size_36 -= 1;
    }
    if (size === '36' && mutatedArray[0].size_36 === 0) {
      dispatch(alert())
    }

    if (size === '37' && mutatedArray[0].size_37 !== 0) {
      mutatedArray[0].size_37 -= 1;
    }
    if (size === '37' && mutatedArray[0].size_37 === 0) {
      dispatch(alert())
    }

    if (size === '38' && mutatedArray[0].size_38 !== 0) {
      mutatedArray[0].size_38 -= 1;
    }
    if (size === '38' && mutatedArray[0].size_38 === 0) {
      dispatch(alert())
    }

    if (size === '39' && mutatedArray[0].size_39 !== 0) {
      if (requiredProducts.length === 0) {
        dispatch(alertNoMoreProducts());
      }
      requiredProducts.forEach((item , index , requiredProducts) => {
        if (item === productID) {
          console.log("mutatedArray[0].size_39" , mutatedArray[0].size_39);
          mutatedArray[0].size_39 = mutatedArray[0].size_39-1;
          console.log("after --1" , mutatedArray[0].size_39);
          requiredProducts.forEach((item , index , arr) => {
            if (productID === item) {
              requiredProducts.splice(index,1);
              requiredProductsDone.push(item);
            }
          })
        }else {
          requiredProductsDone.forEach((item , index , requiredProductsDone) => {
            if (item === productID) {
              dispatch(alertTwinCase())
            }
          })
        }
      })
      console.log("productID-39",productID);
      console.log("requiredProducts",requiredProducts);
      console.log("requiredProductsDone",requiredProductsDone);
    }
    if (size === '39' && mutatedArray[0].size_39 === 0) {
      dispatch(alertNoMoreProducts())
    }

    if (size === '40' && mutatedArray[0].size_40 !== 0) {
      mutatedArray[0].size_40 -= 1;
    }
    if (size === '40' && mutatedArray[0].size_40 === 0) {
      dispatch(alert())
    }

    if (size === '41' && mutatedArray[0].size_41 !== 0) {
      mutatedArray[0].size_41 -= 1;
    }
    if (size === '41' && mutatedArray[0].size_41 === 0) {
      dispatch(alert())
    }

    if (size === '42' && mutatedArray[0].size_42 !== 0) {
      mutatedArray[0].size_42 -= 1;
    }
    if (size === '42' && mutatedArray[0].size_42 === 0) {
      dispatch(alert())
    }

    var newProductsArray = products.missing_item;
    console.log("newProductsArray",newProductsArray);
    console.log("matchedIndex before splicing" , matchedIndex);
    newProductsArray.splice(matchedIndex , 1);
    console.log("after removing",newProductsArray);
    newProductsArray.splice(matchedIndex , 0 , mutatedArray[0])
    console.log("after injecitng" , newProductsArray);

    dispatch(updateProducts(newProductsArray));

  }
}

import { ActionTypes } from '../constants/action-types'

export const setProducts = (products) => {
  return {
    type: ActionTypes.SET_PRODUCTS,
    payload: products,
  }
}

export const removeProduct = () => {
  return {
    type: ActionTypes.REMOVE_PRODUCT,
  }
}

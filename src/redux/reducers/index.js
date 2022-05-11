import { productReducer, selectedProductsReducer } from './productReducer'

import { combineReducers } from 'redux'

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductsReducer,
})

export default reducers

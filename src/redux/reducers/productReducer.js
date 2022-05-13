import { ActionTypes } from '../constants/action-types'
const intialState = {
  products: [],
}
export const productReducer = (state = intialState, { type, payload }) => {
  console.log('setproduct reducer state', state)
  // const updatedState=state.products.splice(payload,1)
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      console.log(state.products)
      return { ...state, products: [...state.products, payload] }
    case ActionTypes.REMOVE_PRODUCT:
      return { ...state.products, products: state.products.filter((item, index) => index !== payload) }
    default:
      return state
  }
}

// export const removeProductReducer = ( state, { type, payload },) => {
//   console.log('payload is', payload)
//   console.log('state is', state)
//   switch (type) {
//     case ActionTypes.REMOVE_PRODUCT:
//       return {
//         ...state,
//         products: [state.products.filter((item) => item.id !== payload)],
//       }

//     default:
//       return state
//   }
// }

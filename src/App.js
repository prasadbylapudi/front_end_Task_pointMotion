import './App.css'
import { ChakraProvider } from '@chakra-ui/react'
import Header from './containers/Header'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './containers/Home'
import ManageProducts from './containers/ManageProducts'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Header />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/ManageProducts" element={<ManageProducts />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App

// import { useContext, useEffect, useState } from 'react'
// import { useSelector, useDispatch } from 'react-redux'
// import { ActionTypes } from './redux/constants/action-types'
// import reducers from './redux/reducers'
// // import { SignInOptions } from '../src/components/auth/SignInOptions';
// export default function App() {
//   const dispatch = useDispatch()
//   const authCtx = useSelector((state) =>state.)
//   console.log(authCtx)
//   useEffect(() => {
//     dispatch({ type: 'SET_PRODUCT', payload: [1, 2, 3, 4] })
//   }, [])
// }

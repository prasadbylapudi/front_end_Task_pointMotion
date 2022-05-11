import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { ChakraProvider } from '@chakra-ui/provider'
import { ColorModeScript } from '@chakra-ui/color-mode'
import theme from './theme'
import store from './redux/store'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Provider>,
)

import { Divider } from '@chakra-ui/react';
import React from 'react'
import Header from './Header'
import ProductListing from './ProductListing'
function Home() {
  return (
    <div>
      <Header value={false}/>
      <Divider/>
      <ProductListing />

    </div>
  )
}

export default Home

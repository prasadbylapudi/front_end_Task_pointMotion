import React from 'react'
import { useSelector } from 'react-redux'
import { Flex, Image, SimpleGrid, Heading } from '@chakra-ui/react'
function ProductsListing() {
  const products = useSelector((state) => state.products.products)
  // console.log('products', products)
  return (
    <SimpleGrid columns={3}>
      {products.map((item, idx) => (
        <Flex
          flexDir={'column'}
          borderWidth="2px"
          overflow="hidden"
          m="24px"
          key={idx}
        >
          <Flex>
            <Image src={item.image} />
          </Flex>
          <Flex justifyContent={'space-between'} mx="16px" my="6px">
            <Flex flexDir={'column'}>
              <Heading size={'sm'}>{item.productName}</Heading>
              <Heading size={'sm'}>{item.description}</Heading>
            </Flex>
            <Flex alignContent="center">
              <Heading>{item.price}:-</Heading>
            </Flex>
          </Flex>
        </Flex>
      ))}
    </SimpleGrid>
  )
}

export default ProductsListing

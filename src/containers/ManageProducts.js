import React from 'react'
import { useRef, useState, useEffect } from 'react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Textarea } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import {
  Table,
  Th,
  Tr,
  Tfoot,
  Td,
  Tbody,
  Thead,
  TableCaption,
  Center,
} from '@chakra-ui/react'
import {
  Button,
  Flex,
  SimpleGrid,
  FormLabel,
  Input,
  FormControl,
} from '@chakra-ui/react'
import Header from './Header'
function ManageProducts() {
  const [products, setProducts] = useState([
    {
      productName: 'phone',
      price: 259,
      description: 'realme 8 model',
    },
    {
      productName: 'spectacles',
      price: 199,
      description: 'rayban company',
    },
  ])
  const productNameRef = useRef()
  const PriceRef = useRef()
  const productDescriptionRef = useRef()
  const [productName, setproductName] = useState('')
  const [price, setPrice] = useState('')
  const [productDescription, setProductDescription] = useState('')

  const handleAddProduct = (e) => {
    e.preventDefault()

    if (productNameRef.current.value === '' || PriceRef.current.value === '') {
      return
    }

    setProducts((prevState) => {
      console.log(productNameRef.current.value)
      return [
        ...prevState,
        {
          productName: productNameRef.current.value,
          price: PriceRef.current.value,
          description: productDescriptionRef.current.value,
        },
      ]
    })

    console.log(products)
  }

  return (
    <div>
      <Header />

      <Flex justifyContent={'center'}>
        <Flex>
          <form onSubmit={handleAddProduct}>
            <VStack spacing={4} align="stretch">
              <HStack spacing="24px">
                <FormControl>
                  <FormLabel>Product Name</FormLabel>
                  <Input
                    placeholder="Enter Product Name"
                    type="text"
                    mb="20px"
                    ref={productNameRef}
                    // value={productName}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Price:</FormLabel>
                  <Input
                    placeholder="Price"
                    type="text"
                    mb="20px"
                    ref={PriceRef}
                  />
                </FormControl>
              </HStack>

              <HStack spacing="24px">
                <FormControl>
                  <FormLabel>Product Description</FormLabel>
                  <Textarea
                    placeholder="Enter Description"
                    ref={productDescriptionRef}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Product Image</FormLabel>
                  {/* <Input placeholder="Title" type="text" mb="20px" /> */}

                  <input
                    type="file"
                    placeholder="Choose file"
                    id="upload-button"
                    mb="20px"
                  />

                  {/* <button onClick={handleUpload}>Upload</button> */}
                </FormControl>
              </HStack>
              <Button type="submit" colorScheme="blue" mr={3} marginTop="20px">
                Add Product
              </Button>
            </VStack>
          </form>
        </Flex>
      </Flex>
      <Flex justifyContent={'center'}>
        <Table width={1000} mb="20px">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          {products.map((item, idx) => {
            return (
              <Tbody key={idx}>
                <Tr>
                  <Td>{item.productName}</Td>
                  <Td>{item.productDescription}</Td>
                  <Td>{item.price}</Td>
                  <Td>
                    <Button>Delete</Button>
                  </Td>
                </Tr>
              </Tbody>
            )
          })}
        </Table>
      </Flex>
    </div>
  )
}

export default ManageProducts

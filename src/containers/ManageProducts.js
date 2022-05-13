import { useRef, useState } from 'react'
import { Divider } from '@chakra-ui/react'
import { Textarea, Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux'

import { Table, Th, Tr, Td, Tbody, Thead } from '@chakra-ui/react'
import { Button, Flex, FormLabel, Input, FormControl } from '@chakra-ui/react'
import Header from './Header'
function ManageProducts() {
  const products = useSelector((state) => state.products.products)
  const productNameRef = useRef()
  const PriceRef = useRef()
  const productDescriptionRef = useRef()
  const dispatch = useDispatch()
  const [baseImage, setBaseImage] = useState('')

  const handleAddProduct = (e) => {
    e.preventDefault()

    if (productNameRef.current.value === '' || PriceRef.current.value === '') {
      return
    }

    dispatch({
      type: 'SET_PRODUCTS',
      payload: {
        productName: productNameRef.current.value,
        price: PriceRef.current.value,
        description: productDescriptionRef.current.value,
        image: baseImage,
      },
    })

    PriceRef.current.value = ''
    productNameRef.current.value = ''
    productDescriptionRef.current.value = ''
  }
  // const handleRemove = (idx) => {
  //   const items = products
  //   if (items.length > 0) {
  //     const lastIndex = items.length - 1
  //     setProducts(items.filter((item, index) => index !== lastIndex))
  //   }
  //   console.log('index', idx)
  // }
  const handleRemove = (idx) => {
    console.log('index', idx)
    dispatch({
      type: 'REMOVE_PRODUCT',
      payload: idx,
    })
  }
  const uploadImage = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertBase64(file)
    setBaseImage(base64)
  }

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader()
      fileReader.readAsDataURL(file)

      fileReader.onload = () => {
        resolve(fileReader.result)
      }

      fileReader.onerror = (error) => {
        reject(error)
      }
    })
  }

  return (
    <Flex flexDir={'column'}>
      <Header value={true} />
      <Divider />
      <Flex my="32px">
        <Flex>
          <form onSubmit={handleAddProduct}>
            <Flex spacing={4} align="stretch" flexDirection={'column'}>
              <Flex flexDirection={{ base: 'column', md: 'row', lg: 'row' }}>
                <FormControl>
                  <FormLabel>Product Name</FormLabel>
                  <Input
                    placeholder="Enter Product Name"
                    type="text"
                    ref={productNameRef}
                    width="md"
                    borderRadius={'none'}
                    my="8px"
                    mr="32px"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Price</FormLabel>
                  <Input
                    placeholder="Price"
                    type="text"
                    width="md"
                    ref={PriceRef}
                    borderRadius={'none'}
                    my="8px"
                  />
                </FormControl>
              </Flex>

              <Flex
                spacing="64px"
                flexDirection={{ base: 'column', md: 'row', lg: 'row' }}
              >
                <FormControl my="8px">
                  <FormLabel>Product Description</FormLabel>
                  <Textarea
                    placeholder="Enter Description"
                    ref={productDescriptionRef}
                    width="md"
                    borderRadius={'none'}
                    my="8px"
                    mr="32px"
                  />
                </FormControl>
                <FormControl my="8px">
                  <FormLabel>
                    Product Image{' '}
                    <Text color="gray" display={'inline'} fontSize="sm">
                      (optional)
                    </Text>
                  </FormLabel>
                  {/* <Input placeholder="Title" type="text" mb="20px" /> */}

                  <input
                    type="file"
                    onChange={(e) => {
                      uploadImage(e)
                    }}
                    my="8px"
                  />

                  {/* <button onClick={handleUpload}>Upload</button> */}
                </FormControl>
              </Flex>
              <Button
                type="submit"
                color={'white'}
                bg="#60B3E4"
                _hover={{ bg: '#60B3E4' }}
                mr={3}
                width={'200px'}
                borderRadius="none"
              >
                Add Product
              </Button>
            </Flex>
          </form>
        </Flex>
      </Flex>
      <Flex
        justifyContent={'center'}
        display={products.length === 0 ? 'none' : 'inline'}
      >
        <Table mb="20px">
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th>Name</Th>
              <Th>Info</Th>
              <Th>Price</Th>
            </Tr>
          </Thead>
          {products.map((item, idx) => {
            return (
              <Tbody key={idx}>
                <Tr>
                  <Td>
                    <Image
                      src={item.image}
                      h={{ base: '10', md: '20', lg: '20' }}
                      w={{ base: '10', md: '20', lg: '20' }}
                    />
                  </Td>
                  <Td>{item.productName}</Td>
                  <Td>{item.description}</Td>
                  <Td>{item.price}</Td>
                  <Td>
                    <Text
                      onClick={() => handleRemove(idx)}
                      color={'#48B1E4'}
                      cursor={'pointer'}
                    >
                      Remove
                    </Text>
                  </Td>
                </Tr>
              </Tbody>
            )
          })}
        </Table>
      </Flex>
    </Flex>
  )
}

export default ManageProducts

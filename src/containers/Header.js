import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Text } from '@chakra-ui/react'
function Header({ value }) {
  return (
    <Flex my="8px">
      <Flex mx="16px">
        <Link to="/Home">
          <Text
            fontSize={'lg'}
            textDecoration={!value ? 'underline' : 'none'}
            textUnderlineOffset={'10px'}
            textDecorationColor="#60B3E4"
            textDecorationThickness={'4px'}
          >
            Home
          </Text>
        </Link>
      </Flex>
      <Flex>
        <Link to="/ManageProducts">
          <Text
            fontSize={'lg'}
            textDecoration={value ? 'underline' : 'none'}
            textUnderlineOffset={'10px'}
            textDecorationColor="#60B3E4"
            textDecorationThickness={'4px'}
          >
            Manage Products
          </Text>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Header

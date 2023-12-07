import React from 'react'
import CartWidget from './CartWidget'
import {     Menu, MenuButton, MenuList, MenuItem, Flex, Spacer, Box } from '@chakra-ui/react'

const NavBar = () => {
  return (
    <div>

        <Flex>
            <Box p="4">
                My Coffee Shopp
            </Box>
            <Spacer />

            <Menu>
                <MenuButton>     
                    Café
                </MenuButton>
                <MenuList>
                    <MenuItem>Blend</MenuItem>
                    <MenuItem>Soluble</MenuItem>
                    <MenuItem>Cold Brew</MenuItem>
                </MenuList>
            </Menu>
            <Spacer />
        
            <Box p="4">
                <CartWidget/>
            </Box>

        </Flex>
    </div>
  )
}

export default NavBar
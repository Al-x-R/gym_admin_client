import {
  Box,
  Flex,
  HStack,
  useColorModeValue as mode,
  Image
} from '@chakra-ui/react';
import * as React from 'react';
import { MobileNav } from './MobileNav';
import { NavLink } from './NavLink';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import logo from '../../assets/images/Maximus-Logo.png';

const Navbar = () => {
  return (
    <Box minH="84px">
      <Box as="header" bg={mode('white', 'gray.800')} borderBottomWidth="1px">
        <Box maxW="7xl" mx="auto" py="4" px={{base: '6', md: '8'}}>
          <Flex as="nav" justify="space-between">
            <Flex>
              <Box as="a" href="/" rel="home" pr="4">
                <Image maxW="150px" src={logo} />
              </Box>
              <HStack display={{base: 'none', lg: 'flex'}} spacing="8" pt='3'>
                <NavLink.Desktop>Memberships</NavLink.Desktop>
                <NavLink.Desktop active>Clients</NavLink.Desktop>
                <NavLink.Desktop>Trainers</NavLink.Desktop>
                <NavLink.Desktop>Workouts</NavLink.Desktop>
              </HStack>
            </Flex>
            <Flex align="center">
              <HStack spacing="8" display={{base: 'none', md: 'flex'}} pt='3'>
                <NavLink.Desktop>Log out</NavLink.Desktop>
                <ColorModeSwitcher justifySelf="flex-end"/>
              </HStack>
              <Box ml="5" pt='3'>
                <MobileNav/>
              </Box>
            </Flex>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default Navbar;

import { Divider, Flex, Spacer, Stack } from '@chakra-ui/react'
import * as React from 'react'
import {
  FaRegChartBar,
  FaFire,
  FaUser,
  FaRegIdCard,
  FaNetworkWired
} from 'react-icons/fa'
import { NavLink } from './NavLink'
import { UserProfile } from './UserProfile'
import { useColorModeValue as mode } from '@chakra-ui/react';

export const Sidebar: React.FC = () => {
  return (
    <Flex
      height="calc(100vh - 84px)"
      width={{ base: 'full', sm: '2xs' }}
      direction="column"
      bg={mode('white', 'gray.800')}
      color="white"
      px={5}
      py={7}
    >
      <Stack spacing={6}>
        <Stack>
          <NavLink label="Clients" icon={FaUser} isActive />
          <NavLink label="Memberships" icon={FaRegIdCard} />
          <NavLink label="Trainers" icon={FaNetworkWired} />
          <NavLink label="Admins" icon={FaNetworkWired} />
          <NavLink label="Workouts" icon={FaFire} />
          <NavLink label="Statistics" icon={FaRegChartBar} />
        </Stack>
        <Divider borderColor="whiteAlpha.400" />
      </Stack>
      <Spacer />
      <UserProfile
        name="Cindy Winston"
        image="https://images.unsplash.com/photo-1521296797187-726205347ca9?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjR8fGxhZHklMjBzbWlsaW5nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
        email="cindy@example.com"
      />
    </Flex>
  )
}

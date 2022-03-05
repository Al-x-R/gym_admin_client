import { HStack, Icon, Link, LinkProps, Text } from '@chakra-ui/react'
import * as React from 'react'
import { useColorModeValue as mode } from '@chakra-ui/react';

interface NavLinkProps extends LinkProps {
  isActive?: boolean
  label: string
  icon: any
}

export const NavLink = (props: NavLinkProps) => {
  const { icon, isActive, label, ...rest } = props
  return (
    <Link
      display="block"
      py={2}
      px={3}
      borderRadius="md"
      transition="all 0.3s"
      fontWeight="medium"
      lineHeight="1.5rem"
      aria-current={isActive ? 'page' : undefined}
      color={mode('gray.600', 'gray.300')}
      _hover={{
        bg: 'blue.500',
        color: 'white',
      }}
      _activeLink={{
        color: mode('blue.600', 'blue.300'),
        fontWeight: 'bold',
      }}
      {...rest}
    >
      <HStack spacing={4}>
        <Icon as={icon} boxSize="20px" />
        <Text as="span">{label}</Text>
      </HStack>
    </Link>
  )
}

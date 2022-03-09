import {
  Box,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react'
import * as React from 'react'
import { Card } from './Card'
import { LoginForm } from './LoginForm'

const Auth = () => {
  return (
  <Box
    bg={useColorModeValue('gray.50', 'inherit')}
    minH="100vh"
    py="12"
    px={{ base: '4', lg: '8' }}
  >
    <Box maxW="md" mx="auto">
      <Heading textAlign="center" size="xl" fontWeight="extrabold" pb='20'>
        Sign in to your account
      </Heading>
      <Card>
        <LoginForm />
      </Card>
    </Box>
  </Box>
)}

export default Auth;

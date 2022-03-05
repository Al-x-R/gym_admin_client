import {
  Box,
  Button,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react'
import * as React from 'react'
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa'
import { Card } from './Card'
import { DividerWithText } from './DividerWithText'
import { Link } from './Link'
import { Form } from './Form'
import { Logo } from './Logo'

const LoginForm = () => (
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
        <Form />
        {/*<DividerWithText mt="6">or continue with</DividerWithText>*/}
        {/*<SimpleGrid mt="6" columns={3} spacing="3">*/}
        {/*  <Button color="currentColor" variant="outline">*/}
        {/*    <VisuallyHidden>Login with Facebook</VisuallyHidden>*/}
        {/*    <FaFacebook />*/}
        {/*  </Button>*/}
        {/*  <Button color="currentColor" variant="outline">*/}
        {/*    <VisuallyHidden>Login with Google</VisuallyHidden>*/}
        {/*    <FaGoogle />*/}
        {/*  </Button>*/}
        {/*  <Button color="currentColor" variant="outline">*/}
        {/*    <VisuallyHidden>Login with Github</VisuallyHidden>*/}
        {/*    <FaGithub />*/}
        {/*  </Button>*/}
        {/*</SimpleGrid>*/}
      </Card>
    </Box>
  </Box>
)

export default LoginForm;

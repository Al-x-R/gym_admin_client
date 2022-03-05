import * as React from "react"
import {
  Box,
  VStack,
  Grid,
} from "@chakra-ui/react"
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/LoginForm/LoginForm';


export const App = () => (
    <Box textAlign="center" fontSize="xl">
      <Navbar />
      <Grid minH="100vh" p={3}>
          <LoginForm />
      </Grid>
    </Box>
)

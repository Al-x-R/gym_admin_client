import * as React from 'react';
import {
  Box,
  VStack,
  Grid,
} from '@chakra-ui/react';
import Navbar from './components/Navbar/Navbar';
import LoginForm from './components/Auth';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './router';


export const App = () => (
  <Router>
    <Routes/>
  </Router>
  // <Box textAlign="center" fontSize="xl">
  //   <Navbar />
  //   <Grid minH="100vh" p={3}>
  //       <Auth />
  //   </Grid>
  // </Box>
);

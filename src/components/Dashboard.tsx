import React from 'react';
import { Box } from '@chakra-ui/react';
import { Sidebar } from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';

const Dashboard = () => {
  return (
    <Box>
      <Navbar />
      <Sidebar />
    </Box>
  );
};

export default Dashboard;
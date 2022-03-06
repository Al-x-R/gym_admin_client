import React from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import Table from './Table/Table';

const Dashboard = () => {
  return (
    <Box>
      <Navbar />
      <Flex>
        <Sidebar />
        <Table />
      </Flex>

    </Box>
  );
};

export default Dashboard;
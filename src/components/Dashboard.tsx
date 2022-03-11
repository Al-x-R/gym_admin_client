import React, { useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import { TableType } from '../types';
import GeneralTable from './GeneralTable';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<TableType>('Admins');

  return (
    <Box maxH="100vh" overflow="hidden">
      <Navbar/>
      <Flex position="relative">
        <Sidebar setActiveTab={setActiveTab} activeTab={activeTab}/>
        <Box h="100%" w="100%" pr={4} pb={4}>
          <GeneralTable value={activeTab}/>
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
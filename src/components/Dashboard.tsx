import React, { useEffect, useState } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Sidebar } from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import Table from './Table/Table';
import AdminsTable from './Admins';
import axios from 'axios';

const Dashboard = () => {
  const [admins, setAdmins] = useState([]);

  const getAllAdmins = async () => {
    const {data} = await axios.get('http://localhost:5000/api/admins');
    setAdmins(data[0]);
  };

  useEffect(() => {
    getAllAdmins();
  }, []);

  return (
    <Box maxH="100vh" overflow="hidden">
      <Navbar/>
      <Flex>
        <Sidebar/>
        <Box h="100%" w="100%" pr={4} pb={4}>
          <AdminsTable admins={admins}/>
        </Box>
      </Flex>

    </Box>
  );
};

export default Dashboard;
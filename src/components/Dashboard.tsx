import React, { useEffect } from 'react';
import { Box, CircularProgress, Flex } from '@chakra-ui/react';
import { Sidebar } from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import AdminsTable from './Admins';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { fetchAdmins } from '../store/reducers/ActionCreators';

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const {admins, isLoading} = useAppSelector(state => state.adminReducer);

  useEffect(() => {
    dispatch(fetchAdmins());
  }, []);

  return (
    <Box maxH="100vh" overflow="hidden">
      <Navbar/>
      <Flex position='relative'>
        <Sidebar/>
        <Box h="100%" w="100%" pr={4} pb={4}>
          {isLoading
            ? <CircularProgress isIndeterminate position='absolute' top='30%' left='50%'/>
            : <AdminsTable admins={admins}/>
          }
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
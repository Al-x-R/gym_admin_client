import React, { useEffect, useState } from 'react';
import { Box, CircularProgress, Flex, useToast } from '@chakra-ui/react';
import { Sidebar } from './Sidebar/Sidebar';
import Navbar from './Navbar/Navbar';
import AdminsTable from './Admins';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { createAdmin, fetchAdmins } from '../store/reducers/ActionCreators';
import { FieldValues, SubmitHandler } from 'react-hook-form';

type StatusType = 'success' | 'error'

const Dashboard = () => {
  const [isSubmit, setIsSubmit] = useState(false)
  const dispatch = useAppDispatch();
  const {admins, isLoading, error} = useAppSelector(state => state.adminReducer);
  const toast = useToast();
  const toastMessage = (message: string, status: StatusType) => {
    return toast({
      position: 'top',
      title: message,
      status: status,
      duration: 2000,
      isClosable: true,
    });
  };

  useEffect(() => {
    dispatch(fetchAdmins());
  }, []);

  const createAdminHandler: SubmitHandler<FieldValues> = async (values: { [x: string]: any; }) => {
    await dispatch(createAdmin(values));
  };

  return (
    <Box maxH="100vh" overflow="hidden">
      <Navbar/>
      <Flex position='relative'>
        <Sidebar/>
        <Box h="100%" w="100%" pr={4} pb={4}>
          {isLoading
            ? <CircularProgress isIndeterminate position='absolute' top='30%' left='50%'/>
            : <AdminsTable admins={admins} error={error} createAdminHandler={createAdminHandler} />
          }
        </Box>
      </Flex>
    </Box>
  );
};

export default Dashboard;
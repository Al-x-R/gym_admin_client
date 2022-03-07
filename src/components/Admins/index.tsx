import React, { FC, useState } from 'react';
import {
  Box,
  Flex,
  Button,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue as mode,
  useDisclosure, useToast
} from '@chakra-ui/react';
import { RiAddFill } from 'react-icons/ri';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

import { columns } from './_data';
import AdminModal from './AdminModal';

export interface IAdmin {
  adminName: string;
  id: number;
  isSuper: boolean;
}

interface AdminsList {
  admins: IAdmin[]
}

const AdminsTable: FC<AdminsList> = ({admins}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit} = useDisclosure();
  const [stateAdmin, setStateAdmin] = useState<IAdmin>();
  const toast = useToast();

  const createAdminHandler: SubmitHandler<FieldValues> = (values: { [x: string]: any; }) => {

    axios.post('http://localhost:5000/api/admins', {admin: values}, {
      headers: {
        'Authorization': `Basic ${localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        if (response.data) {
          toast({
            position: 'top',
            title: 'Admin created',
            status: 'success',
            duration: 1500,
            isClosable: true,
          });
          onClose();
        }
      })
      .catch((error) => {
        toast({
          position: 'top',
          title: error.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const updateAdminHandler: SubmitHandler<FieldValues> = (values: { [x: string]: any; }) => {
    if (stateAdmin?.adminName === values.adminName && stateAdmin?.isSuper === values.isSuper) {
      onCloseEdit()
      return
    }
    axios.patch('http://localhost:5000/api/admins', {admin: values}, {
      headers: {
        'Authorization': `Basic ${localStorage.getItem('token')}`
      }
    })
      .then((response) => {
        if (response.data) {
          toast({
            position: 'top',
            title: 'Admin update',
            status: 'success',
            duration: 1500,
            isClosable: true,
          });
          onCloseEdit();
        }
      })
      .catch((error) => {
        toast({
          position: 'top',
          title: error.response.data.message,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  const editAdminHandler = (admin: IAdmin) => {
    setStateAdmin(admin);
    onOpenEdit();
  };

  return (
    <>
      <Flex justify="end" pt={1} pr={3}>
        <Button onClick={onOpen} iconSpacing="1" leftIcon={<RiAddFill fontSize="1em"/>}>
          New member
        </Button>
      </Flex>

      <Box overflowY="auto" maxHeight="calc(100vh - 100px)" mt={2}>
        <Table borderWidth="1px" fontSize="sm">
          <Thead position="sticky" top={0} bg={mode('gray.50', 'gray.800')}>
            <Tr h={10}>
              {columns.map((column, index) => (
                <Th whiteSpace="nowrap" scope="col" key={index}>
                  {column.Header}
                </Th>
              ))}
              <Th/>
            </Tr>
          </Thead>

          <Tbody>
            {admins.map((row, index) => {
              return (
                <Tr key={index}>
                  {columns.map((column, index) => {
                    const cell = row[column.accessor as keyof typeof row];
                    const element = column.Cell?.(cell) ?? cell;
                    return (
                      <Td whiteSpace="nowrap" key={index}>
                        {element}
                      </Td>
                    );
                  })}
                  <Td textAlign="right">
                    <Button onClick={e => editAdminHandler(row)} variant="link" colorScheme="blue">
                      Edit
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      <AdminModal isOpen={isOpen} onClose={onClose} onSubmit={createAdminHandler}/>
      <AdminModal admin={stateAdmin} isOpen={isOpenEdit} onClose={onCloseEdit} onSubmit={updateAdminHandler}/>
    </>
  );
};

export default AdminsTable;
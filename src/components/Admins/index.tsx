import React, { FC, useEffect, useState } from 'react';
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
  useDisclosure,
  useToast,
} from '@chakra-ui/react';
import { RiAddFill } from 'react-icons/ri';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import axios from 'axios';

import { columns } from './_data';
import AdminModal from './AdminModal';
import DeleteAdminConfirmModal from './DeleteAdminConfirmModal';
import AdminActionMenu from './AdminActionMenu';
import { IAdmin } from '../../interfaces/admin.interface';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createAdmin, deleteAdmin, updateAdmin } from '../../store/reducers/ActionCreators';

interface IAdminsTable {
  admins: IAdmin[];
  error: string;
  createAdminHandler: SubmitHandler<FieldValues>;
}

const AdminsTable: FC<IAdminsTable> = ({admins, error, createAdminHandler}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();
  const {isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit} = useDisclosure();
  const {isOpen: isOpenDeleteModal, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal} = useDisclosure();
  const [stateAdmin, setStateAdmin] = useState<IAdmin>();
  const toast = useToast();
  const dispatch = useAppDispatch();


  const updateAdminHandler: SubmitHandler<FieldValues> = (values: { [x: string]: any; }) => {
    if (stateAdmin?.adminName === values.adminName && stateAdmin?.isSuper === values.isSuper) {
      onCloseEdit();
      return;
    }
    dispatch(updateAdmin(values))
    // axios.patch('http://localhost:5000/api/admins', {admin: values}, {
    //   headers: {
    //     'Authorization': `Basic ${localStorage.getItem('token')}`
    //   }
    // })
    //   .then((response) => {
    //     if (response.data) {
    //       toast({
    //         position: 'top',
    //         title: 'Admin update',
    //         status: 'success',
    //         duration: 1500,
    //         isClosable: true,
    //       });
    //       onCloseEdit();
    //     }
    //   })
    //   .catch((error) => {
    //     toast({
    //       position: 'top',
    //       title: error.response.data.message,
    //       status: 'error',
    //       duration: 5000,
    //       isClosable: true,
    //     });
    //   });
  };

  const deleteAdminHandler = () => {
    if (!stateAdmin) return;
    dispatch(deleteAdmin(stateAdmin.id));
    // axios.delete('http://localhost:5000/api/admins', {
    //   headers: {
    //     'Authorization': `Basic ${localStorage.getItem('token')}`
    //   }, data: {id: stateAdmin?.id}
    // })
    //   .then((response) => {
    //     if (response.data) {
    //       toast({
    //         position: 'top',
    //         title: 'Admin successfully deleted',
    //         status: 'success',
    //         duration: 1500,
    //         isClosable: true,
    //       });
    //       onCloseDeleteModal();
    //     }
    //   })
    //   .catch((error) => {
    //     toast({
    //       position: 'top',
    //       title: error.response.data.message,
    //       status: 'error',
    //       duration: 5000,
    //       isClosable: true,
    //     });
    //   });
  };

  const deleteAdminModalOpenHandler = (admin: IAdmin) => {
    setStateAdmin(admin);
    onOpenDeleteModal();
  };

  const editAdminModalOpenHandler = (admin: IAdmin) => {
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
                    <AdminActionMenu
                      row={row}
                      editAdminModalOpenHandler={editAdminModalOpenHandler}
                      deleteAdminModalOpenHandler={deleteAdminModalOpenHandler}
                    />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      <AdminModal isOpen={isOpen} onClose={onClose} onSubmit={createAdminHandler}/>
      <AdminModal admin={stateAdmin} isOpen={isOpenEdit} onClose={onCloseEdit} onSubmit={updateAdminHandler}/>
      <DeleteAdminConfirmModal isOpen={isOpenDeleteModal} onClose={onCloseDeleteModal} onSubmit={deleteAdminHandler}/>
    </>
  );
};

export default AdminsTable;
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
  useToast, CircularProgress,
} from '@chakra-ui/react';
import { RiAddFill } from 'react-icons/ri';
import { FieldValues, SubmitHandler } from 'react-hook-form';

import { columns } from './_data';
import AdminModal from './AdminModal';
import DeleteAdminConfirmModal from './DeleteAdminConfirmModal';
import AdminActionMenu from './AdminActionMenu';
import { IAdmin } from '../../interfaces/admin.interface';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { createAdmin, deleteAdmin, fetchAdmins, updateAdmin } from '../../store/reducers/ActionCreators';

const AdminsTable = () => {
  const {isOpen: isOpenCreate, onOpen: onOpenCreate, onClose: onCloseCreate} = useDisclosure();
  const {isOpen: isOpenEdit, onOpen: onOpenEdit, onClose: onCloseEdit} = useDisclosure();
  const {isOpen: isOpenDeleteModal, onOpen: onOpenDeleteModal, onClose: onCloseDeleteModal} = useDisclosure();
  const [stateAdmin, setStateAdmin] = useState<IAdmin>();
  const toast = useToast();
  const {admins, isLoading, error} = useAppSelector(state => state.adminReducer);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchAdmins());
  }, []);

  const createAdminHandler: SubmitHandler<FieldValues> = async (values: { [x: string]: any; }) => {
    await dispatch(createAdmin(values));
    onCloseCreate();
  };

  const updateAdminHandler: SubmitHandler<FieldValues> = (values: { [x: string]: any; }) => {
    if (stateAdmin?.adminName === values.adminName && stateAdmin?.isSuper === values.isSuper) {
      onCloseEdit();
      return;
    }
    dispatch(updateAdmin(values));
    onCloseEdit();
  };

  const deleteAdminHandler = () => {
    if (!stateAdmin) return;
    dispatch(deleteAdmin(stateAdmin.id));
    onCloseDeleteModal();
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
      {isLoading
        ? <CircularProgress isIndeterminate position="absolute" top="30%" left="50%"/>
        : <>
          <Flex justify="end" pt={1} pr={3}>
            <Button onClick={onOpenCreate} iconSpacing="1" leftIcon={<RiAddFill fontSize="1em"/>}>
              New member
            </Button>
          </Flex>

          <Box overflowY="auto" maxHeight="calc(100vh - 150px)" mt={2}>
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
          <AdminModal isOpen={isOpenCreate} onClose={onCloseCreate} onSubmit={createAdminHandler}/>
          <AdminModal admin={stateAdmin} isOpen={isOpenEdit} onClose={onCloseEdit} onSubmit={updateAdminHandler}/>
          <DeleteAdminConfirmModal isOpen={isOpenDeleteModal} onClose={onCloseDeleteModal}
                                   onSubmit={deleteAdminHandler}/>
        </>
      }
    </>
  );
};

export default AdminsTable;
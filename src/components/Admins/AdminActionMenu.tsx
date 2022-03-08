import React, { FC } from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { IAdmin } from './index';

interface IAdminActionMenu {
  row: IAdmin;
  editAdminModalOpenHandler: (admin: IAdmin) => void
  deleteAdminModalOpenHandler: (admin: IAdmin) => void
}

const AdminActionMenu: FC<IAdminActionMenu> = ({row, editAdminModalOpenHandler, deleteAdminModalOpenHandler}) => {
  return (
    <Menu>
      {({isOpen}) => (
        <>
          <MenuButton isActive={isOpen}
                      as={Button}
                      rightIcon={<ChevronDownIcon/>}
                      outline="none"
                      background="none"
                      border="none"
                      _hover={{
                        background: 'none',
                        color: 'blue.500',
                        textDecoration: 'underline',
                        border: 'none'
                      }}
                      _active={{
                        background: 'none',
                        border: 'none',
                        outline: 'none'
                      }}
                      _focus={{
                        border: 'none',
                        outline: 'none'
                      }}
          >
            {'Action'}
          </MenuButton>
          <MenuList>
            <MenuItem onClick={() => editAdminModalOpenHandler(row)}>Edit</MenuItem>
            <MenuItem onClick={() => deleteAdminModalOpenHandler(row)}>Delete</MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
};

export default AdminActionMenu;
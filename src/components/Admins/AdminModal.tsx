import React, { FC, useRef } from 'react';
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent, ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import AdminForm from './AdminForm';
import { FieldValues, SubmitHandler } from 'react-hook-form';
import { IAdmin } from './index';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: SubmitHandler<FieldValues>;
  admin?: IAdmin;
}

const AdminModal: FC<IModal> = ({isOpen, onClose, onSubmit, admin}) => {

  const finalRef = useRef(null);

  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Create new admin</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <AdminForm admin={admin} onSubmit={onSubmit}/>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default AdminModal;
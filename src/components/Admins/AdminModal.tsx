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

interface IModal {
  isOpen: boolean
  onClose: () => void
  onSubmit: SubmitHandler<FieldValues>
}

const AdminModal: FC<IModal> = ({isOpen, onClose, onSubmit}) => {

  const finalRef = useRef(null);

  return (
    <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Create new admin</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <AdminForm onSubmit={onSubmit}/>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  );
};

export default AdminModal;
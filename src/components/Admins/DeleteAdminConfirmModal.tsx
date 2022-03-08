import React, { FC } from 'react';
import {
  Button, Flex,Text,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalHeader
} from '@chakra-ui/react';
import { WarningIcon } from '@chakra-ui/icons'
import { FieldValues, SubmitHandler } from 'react-hook-form';

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: SubmitHandler<FieldValues>;
}

const DeleteAdminConfirmModal: FC<IModal> = ({isOpen,onClose,onSubmit }) => {
  return (
    <Modal onClose={onClose} size={'sm'} isOpen={isOpen}>
      <ModalOverlay/>
      <ModalContent>
        <ModalCloseButton/>
        <ModalHeader />
        <ModalBody>
          <Flex flexDir='column' align='center'>
            <WarningIcon w={10} h={10} my={3} color="red.500" />
            <Text fontSize='3xl' >Are you sure?</Text>
            <Text fontSize='2xl'>This action cannot be undone!</Text>
          </Flex>
        </ModalBody>
        <ModalFooter>
          <Button size='md'
                  mr={3}
                  onClick={onSubmit}
                  variant='ghost'
                  color="red.500"
                  _hover={{
                    background: 'none',
                    fontWeight: 'bold'
                  }}
          >Confirm</Button>
          <Button size='md'
                  variant='ghost'
                  onClick={onClose}
                  _hover={{
                    background: 'none',
                    fontWeight: 'bold'
                  }}
          >Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteAdminConfirmModal;
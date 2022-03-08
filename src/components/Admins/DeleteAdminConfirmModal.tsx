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
    <Modal onClose={onClose} size={'md'} isOpen={isOpen}>
      <ModalOverlay/>
      <ModalContent>
        <ModalCloseButton _focus={{
          outline: 'none'
        }}/>
        <ModalHeader />
        <ModalBody>
          <Flex flexDir='column' align='center'>
            <WarningIcon w={10} h={10} my={3} color="red.500" />
            <Text fontSize='3xl' >Are you sure?</Text>
            <Text fontSize='2xl' fontWeight='semiBold' pt={3}>This action cannot be undone!</Text>
          </Flex>
        </ModalBody>
        <ModalFooter mt={4}>
          <Button size='md'
                  mr={3}
                  onClick={onSubmit}
                  colorScheme='red'
          >Delete</Button>
          <Button size='md'
                  onClick={onClose}
          >Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteAdminConfirmModal;
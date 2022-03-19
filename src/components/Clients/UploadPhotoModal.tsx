import React, { FC, useEffect, useState } from 'react';
import {
  Avatar, Box,
  Button, Flex,
  Icon,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { FiFile } from 'react-icons/all';
import axios from 'axios';
import UploadProfileImage from '../UploadProfileImage';

interface IUploadPhotoModal {
  isOpen: boolean;
  onClose: () => void;
}

const UploadPhotoModal: FC<IUploadPhotoModal> = ({isOpen, onClose}) => {
  const [image, setImage] = useState<File>();

  const onSubmit = () => {
    if (image) {
      const formData = new FormData();
      formData.append('image', image, image.name);
      axios.post('http://localhost:5000/api/client',
        formData).then(res => console.log(res));
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Upload profile image</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <Flex align={'center'} justify={'center'} w={'100%'}>
            <Box mb={5} w={32}>
              <UploadProfileImage image={image} setImage={setImage} />
            </Box>
          </Flex>
        </ModalBody>

        <ModalFooter justifyContent={'space-between'}>
          <Button variant="outline"
                  borderColor={'blue.500'}
                  onClick={onSubmit}
                  leftIcon={<Icon as={FiFile}/>}
                  color={'blue.500'}
          >
            Upload
          </Button>
          <Icon as={RiDeleteBinLine} cursor={'pointer'} color={'blue.500'} w={8} h={8}/>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UploadPhotoModal;
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
import { RiAddFill, RiDeleteBinLine } from 'react-icons/ri';
import { FiFile } from 'react-icons/all';
import axios from 'axios';
import FileUpload from '../FileUpload';

interface IUploadPhotoModal {
  isOpen: boolean;
  onClose: () => void;
}

const UploadPhotoModal: FC<IUploadPhotoModal> = ({isOpen, onClose}) => {
  const [image, setImage] = useState<File>();
  const [imageUrl, setImageUrl] = useState('');

  const validateFile = (file: File) => {
    if (file) {
      const fsMb = file.size / (1024 * 1024);
      const MAX_FILE_SIZE = 10;
      if (fsMb > MAX_FILE_SIZE) {
        return 'Max file size 10mb';
      }
    }
    return true;
  };

  const fileToUrl = async (file: File) => {
    validateFile(file);

    const blob = new Blob([new Uint8Array(await file.arrayBuffer())], {type: file.type});

    const url = URL.createObjectURL(blob);
    setImageUrl(url);
  };


  useEffect(() => {
    if (image) {
      fileToUrl(image);
    }
  }, [image]);

  const onSubmit = () => {
    if (image) {
      const formData = new FormData();
      formData.append('image', image, image.name);
      axios.post('http://localhost:5000/api/client',
        formData).then(res => console.log(res));
    }
  };

  const clearImageUrl = () => setImageUrl('');

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Upload profile image</ModalHeader>
        <ModalCloseButton/>
        <ModalBody>
          <Flex align={'center'} justify={'center'} w={'100%'}>
            <Box mb={5} w={32}>
              <FileUpload setFile={setImage} accept={'image/*'}>
                <>
                {!imageUrl
                  ? (<Flex borderWidth={'1px'}
                           justify={'center'}
                           align={'center'}
                           w={32}
                           h={32}
                           cursor={'pointer'}
                           borderRadius={'50%'}
                           _hover={{
                             borderWidth: '2px',
                             borderColor: 'blue.500'
                           }}
                  >
                    <Icon w={8} h={8} as={RiAddFill}/>
                  </Flex>)
                  : <Avatar size="2xl" src={imageUrl} cursor={'pointer'}/>}
                </>
              </FileUpload>
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
          <Icon as={RiDeleteBinLine} cursor={'pointer'} color={'blue.500'} w={8} h={8}
                onClick={clearImageUrl}/>
        </ModalFooter>

      </ModalContent>
    </Modal>
  );
};

export default UploadPhotoModal;
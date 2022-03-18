import React, { FC, useState } from 'react';
import {
  Button, Flex,
  FormControl, FormErrorMessage, Icon,
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
import FileUpload from '../FileUpload';
import { SubmitHandler, useForm } from 'react-hook-form';
import axios from 'axios';

interface IUploadPhotoModal {
  isOpen: boolean;
  onClose: () => void;
}

type FormInputs = {
  photo: FileList
}

const UploadPhotoModal: FC<IUploadPhotoModal> = ({isOpen, onClose}) => {
  const [image, setImage] = useState();
  const {
    handleSubmit,
    register,
    formState: {errors}
  } = useForm<FormInputs>();
  const [file, setFile] = useState<File>();
  const validateFiles = (value: FileList) => {
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024);
      const MAX_FILE_SIZE = 10;
      if (fsMb > MAX_FILE_SIZE) {
        return 'Max file size 10mb';
      }
    }
    setFile(value[0]);
    return true;
  };
  console.log(file);
  const onSubmit: SubmitHandler<FormInputs> = (values) => {

    const file = values.photo[0];

    axios.post('http://localhost:5000/api/client', {
      client: {
        photo: {
          lastModified: file.lastModified,
          name: file.name,
          size: file.size,
          type: file.type

        }
      }
    }).then(res => console.log(res));
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay/>
      <ModalContent>
        <ModalHeader>Upload profile image</ModalHeader>
        <ModalCloseButton/>
        <form onSubmit={handleSubmit(onSubmit)}>
        <ModalBody>
          <Flex align={'center'} justify={'center'} w={'100%'}>
              <FormControl mb={5} isInvalid={!!errors.photo} w={32}>
                <FileUpload
                  accept={'image/*'}
                  register={register('photo', {validate: validateFiles})}
                >
                  <Flex borderWidth={'1px'}
                        justify={'center'}
                        align={'center'}
                        w={32}
                        h={32}
                        cursor={'pointer'}
                        borderRadius={'50%'}
                        _hover={{
                          borderWidth: '2px',
                          borderColor: 'blue.400'
                        }}
                  >
                    <Icon w={8} h={8} as={RiAddFill}/>
                  </Flex>
                </FileUpload>
                <FormErrorMessage>
                  {errors.photo && errors?.photo.message}
                </FormErrorMessage>
              </FormControl>
          </Flex>
        </ModalBody>

        <ModalFooter justifyContent={'space-between'}>
          <Button variant="outline"
                  borderColor={'blue.500'}
                  type={'submit'}
                  leftIcon={<Icon as={FiFile}/>}
                  color={'blue.500'}
          >
            Upload
          </Button>
          <Icon as={RiDeleteBinLine} cursor={'pointer'} color={'blue.500'} w={8} h={8} onClick={()=> console.log('click')} />
        </ModalFooter>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default UploadPhotoModal;
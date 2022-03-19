import React, { FC, useEffect, useState, MouseEvent } from 'react';
import { Avatar, Box, Flex, Icon } from '@chakra-ui/react';
import { RiAddFill, RiCloseCircleLine } from 'react-icons/ri';
import FileUpload from './FileUpload';

interface UploadProfileImageProps {
  image: File | undefined;
  setImage: Function;
}

const UploadProfileImage: FC<UploadProfileImageProps> = ({image, setImage}) => {
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

  const clearImageUrl = (e: MouseEvent) => {
    e.stopPropagation()
    setImageUrl('');
    setImage(null)
  };

  return (
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
          : <Box w={32} position={'relative'}>
            <Avatar size="2xl" src={imageUrl} cursor={'pointer'} />
            <Icon w={5}
                  h={5}
                  as={RiCloseCircleLine}
                  position={'absolute'}
                  top={0}
                  right={-3}
                  onClick={e => clearImageUrl(e)}
                  cursor={'pointer'}
            />
          </Box>
        }
      </>
    </FileUpload>
  );
};

export default UploadProfileImage;
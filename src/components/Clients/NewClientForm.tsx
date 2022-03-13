import React, { useState } from 'react';
import {
  FieldValues,
  SubmitHandler,
  useForm,
  Controller,
  ControllerRenderProps,
  Control,
} from 'react-hook-form';
import { FormErrorMessage, Box, Button, Flex, FormControl, FormLabel, Icon, Input, Stack, Switch } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import FileUpload from '../FileUpload';
import { FiFile } from 'react-icons/all';

type FormInputs = {
  firstName: string;
  lastName: string
  email: string
  mobile: string
  birthdate: Date
  photo: FileList
}

const NewClientForm = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: { errors }
  } = useForm<FormInputs>();

  const validateFiles = (value: FileList) => {
    if (value.length < 1) {
      return 'Files is required';
    }
    for (const file of Array.from(value)) {
      const fsMb = file.size / (1024 * 1024);
      const MAX_FILE_SIZE = 10;
      if (fsMb > MAX_FILE_SIZE) {
        return 'Max file size 10mb';
      }
    }
    return true;
  };

  const onSubmit: SubmitHandler<FormInputs> = (values) => {
    console.log('values', values);
  };

  return (
    <Flex w="100%" align="center" justify="start">
      <Box w="100%">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing="6" mt={10} pr={3}>
            <Flex>
              <FormControl>
                <FormLabel>First name</FormLabel>
                <Input type="text"  {...register('firstName', {
                  required: 'This is required'
                })} />
              </FormControl>
              <FormControl>
                <FormLabel>Last name</FormLabel>
                <Input ml={3} type="text" {...register('lastName', {
                  required: 'This is required'
                })}/>
              </FormControl>
            </Flex>

            <Flex>
              <FormControl>
                <FormLabel htmlFor="email">Email address</FormLabel>
                <Input type="email" {...register('email')} />
              </FormControl>
              <FormControl>
                <FormLabel>Mobile</FormLabel>
                <Input ml={3} type="tel"
                       maxLength={10}
                       {...register('mobile')}
                />
              </FormControl>
            </Flex>

            <Box w='190px'>
              <FormControl>
                <FormLabel>Birth date</FormLabel>
                <Controller name="birthdate"
                            control={control}
                            defaultValue={new Date}
                            render={({field}) => (
                              <DatePicker selected={field.value}
                                          isClearable
                                          onChange={(e) => field.onChange(e)}
                                          customInput={<Input w={'150px'}/>}
                              />
                            )}
                />
              </FormControl>
            </Box>
              <FormControl isInvalid={!!errors.photo}>
                <FormLabel>{'Photo'}</FormLabel>
                <FileUpload
                  accept={'image/*'}
                  multiple
                  register={register('photo', {validate: validateFiles})}
                >
                  <Button variant="outline"
                          w='150px'
                          _focus={{outline: 'none'}}
                          leftIcon={<Icon as={FiFile}/>}
                  >
                    Upload
                  </Button>
                </FileUpload>
                <FormErrorMessage>
                  {errors.photo && errors?.photo.message}
                </FormErrorMessage>
              </FormControl>
            <Button maxW="200px" type="submit" variant="outline" colorScheme="blue" size="lg" fontSize="md">
              Create
            </Button>
          </Stack>
        </form>
      </Box>
    </Flex>
  );
};

export default NewClientForm;
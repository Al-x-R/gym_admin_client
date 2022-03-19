import React, { useState } from 'react';
import {
  SubmitHandler,
  useForm,
  Controller,
} from 'react-hook-form';
import { Box, Button, Flex, FormControl, FormLabel, Icon, Input, Stack } from '@chakra-ui/react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import UploadProfileImage from '../UploadProfileImage';

type FormInputs = {
  firstName: string;
  lastName: string
  email: string
  mobile: string
  birthdate: Date
}

const NewClientForm = () => {
  const {
    handleSubmit,
    register,
    control,
    formState: {errors}
  } = useForm<FormInputs>();
  const [image, setImage] = useState<File>();

  const onSubmit: SubmitHandler<FormInputs> = (values) => {
    const formData = new FormData();
    formData.append('firstName', values.firstName);
    formData.append('lastName', values.lastName);
    formData.append('email', values.email);
    formData.append('mobile', values.mobile);
    formData.append('birthdate', String(values.birthdate));

    if (image) formData.append('image', image, image.name);

    axios.post('http://localhost:5000/api/client', formData).then(res => console.log(res));
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

            <Flex maxW="420px" justify="space-between" flexWrap="wrap" pb={5}>
              <Box>
                <FormLabel>Upload profile image</FormLabel>
                <UploadProfileImage image={image} setImage={setImage}/>
              </Box>
              <FormControl w="190px">
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
            </Flex>
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
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack, useToast,
} from '@chakra-ui/react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { PasswordField } from './PasswordField';
import axios from 'axios';

export const Form = () => {
  const {
    handleSubmit,
    register,
  } = useForm();

  const toast = useToast();
  const navigate = useNavigate()

  const onSubmit: SubmitHandler<FieldValues> = (values: { [x: string]: any; }) => {
    axios.post('http://localhost:5000/api/admins/login', {admin: values})
      .then((response) => {
        if (response.data.admin) {
          toast({
            position: 'top',
            title: 'Logged In',
            status: 'success',
            duration: 1500,
            isClosable: true,
          });

          setTimeout(() => {
            navigate('/')
          }, 1500)
        }
      })
      .catch((error) => {
        const {data: {errors}} = error.response;
        toast({
          position: 'top',
          title: `${errors['message']}`,
          status: 'error',
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Admin name</FormLabel>
          <Input type="text" {...register('adminName', {
            required: 'This is required'
          })}/>
        </FormControl>
        <PasswordField {...register('password', {
          required: 'This is required'
        })}/>
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign in
        </Button>
      </Stack>
    </form>
  );
};

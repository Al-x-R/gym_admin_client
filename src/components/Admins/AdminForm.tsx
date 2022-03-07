import React, { FC } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormControl, FormLabel, Input, Stack, Switch } from '@chakra-ui/react';
import { PasswordField } from '../Auth/PasswordField';

interface IAdminForm {
  onSubmit: SubmitHandler<FieldValues>
}
const AdminForm: FC<IAdminForm> = ({onSubmit}) => {
  const {
    handleSubmit,
    register,
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        <FormControl id="adminName">
          <FormLabel>Admin name</FormLabel>
          <Input type="text" {...register('adminName', {
            required: 'This is required'
          })}/>
        </FormControl>
        <PasswordField {...register('password', {
          required: 'This is required'
        })}/>
        <Switch {...register('isSuper')} />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Create
        </Button>
      </Stack>
    </form>
  );
};

export default AdminForm;
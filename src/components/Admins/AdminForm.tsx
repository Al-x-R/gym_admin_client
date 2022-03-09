import React, { FC, useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Button, FormControl, FormLabel, Input, Stack, Switch } from '@chakra-ui/react';
import { PasswordField } from '../Auth/PasswordField';
import { IAdmin } from '../../interfaces/admin.interface'

interface IAdminForm {
  onSubmit: SubmitHandler<FieldValues>;
  admin?: IAdmin;
}

const AdminForm: FC<IAdminForm> = ({onSubmit, admin}) => {
  const [isChecked, setIsChecked] = useState(false);
  const {
    handleSubmit,
    register,
    setValue
  } = useForm();

  useEffect(() => {
    if (admin) {
      setValue('id', admin.id);
      setValue('adminName', admin.adminName);
      setValue('isSuper', admin.isSuper);
      setIsChecked(admin.isSuper);
    }
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing="6">
        <FormControl id="adminName">
          <FormLabel>Admin name</FormLabel>
          <Input type="text" {...register('adminName', {
            required: 'This is required'
          })}/>
        </FormControl>
        {!admin && <PasswordField {...register('password', {
          required: 'This is required'
        })}/>}
        <Switch {...register('isSuper')}
                isChecked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
        />
        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          {admin ? 'Update' : 'Create'}
        </Button>
      </Stack>
    </form>
  );
};

export default AdminForm;
import {
  Button,
  ButtonGroup,
  FormControl,
  FormLabel,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from '@chakra-ui/react';
import * as React from 'react';
import { BsSearch } from 'react-icons/bs';
import { RiAddFill } from 'react-icons/ri';
import { FC } from 'react';

interface IClientTableActions {
  newMember: boolean
  setNewMember: React.Dispatch<React.SetStateAction<any>>
}
export const ClientTableActions: FC<IClientTableActions> = ({setNewMember, newMember}) => {
  return (
    <Stack spacing="4" pt={3} pb={1} direction='row' justify="space-between" maxW='1200px'>
      <HStack>
        <FormControl minW={{md: '320px'}} id="search">
          <InputGroup size="sm">
            <FormLabel srOnly>Filter by name </FormLabel>
            <InputLeftElement pointerEvents="none" color="gray.400">
              <BsSearch/>
            </InputLeftElement>
            <Input rounded="base" type="search" placeholder="Filter by name ..."/>
          </InputGroup>
        </FormControl>
      </HStack>
      <ButtonGroup size="sm" variant="outline">
        <Button iconSpacing="1" leftIcon={<RiAddFill fontSize="1.25em"/>} onClick={()=> setNewMember(!newMember)}>
          {!newMember ? 'New member' : 'Cancel'}
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

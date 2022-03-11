import { Badge, Box } from '@chakra-ui/react';
import React from 'react';

const badgeEnum: Record<string, string> = {
  all: 'green',
  limited: 'orange',
  forbidden: 'red',
};

// client
// - first name
// - last name
// - email
// - mobile
// - birth date
// - photo

export const data = [
  {
    id: 3,
    firstName: 'first',
    lastName: 'last',
    email: 'email',
    mobile: '1234567890',
    birthDate: Date.now(),
    photo: 'src'
  },
  {
    id: 3,
    firstName: 'first',
    lastName: 'last',
    email: 'email',
    mobile: '1234567890',
    birthDate: Date.now(),
    photo: 'src'
  },
  {
    id: 3,
    firstName: 'first',
    lastName: 'last',
    email: 'email',
    mobile: '1234567890',
    birthDate: Date.now(),
    photo: 'src'
  },
  {
    id: 3,
    firstName: 'first',
    lastName: 'last',
    email: 'email',
    mobile: '1234567890',
    birthDate: Date.now(),
    photo: 'src'
  },
  {
    id: 3,
    firstName: 'first',
    lastName: 'last',
    email: 'email',
    mobile: '1234567890',
    birthDate: Date.now(),
    photo: 'src'
  },
  {
    id: 3,
    firstName: 'first',
    lastName: 'last',
    email: 'email',
    mobile: '1234567890',
    birthDate: Date.now(),
    photo: 'src'
  },
  {
    id: 3,
    firstName: 'first',
    lastName: 'last',
    email: 'email',
    mobile: '1234567890',
    birthDate: Date.now(),
    photo: 'src'
  },
  ];

export const columns = [
  {
    Header: 'Last name',
    accessor: 'lastName',
    Cell: function LastNameCell(data: any) {
      return (
        <Box  fontSize="sm" fontWeight="medium">
          {data}
        </Box>);
    },
  },
  {
    Header: 'First name',
    accessor: 'firstName',
    Cell: function FirstNameCell(data: any) {
      return (
        <Box  fontSize="sm" fontWeight="medium">
          {data}
        </Box>);
    },
  },
  {
    Header: 'Email',
    accessor: 'email',
    Cell: function EmailCell(data: any) {
      return (
        <Box  fontSize="sm" fontWeight="medium">
          {data}
        </Box>);
    }
  },
  {
    Header: 'Mobile',
    accessor: 'mobile',
    Cell: function MobileCell(data: any) {
      return (
        <Box  fontSize="sm" fontWeight="medium">
          {data}
        </Box>);
    }
  },
  {
    Header: 'Birth date',
    accessor: 'birthDate',
    Cell: function BirthDateCell(data: any) {
      return (
        <Box  fontSize="sm" fontWeight="medium">
          {data}
        </Box>);
    }
  },
];

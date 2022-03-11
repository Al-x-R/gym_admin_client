import { Box, CircularProgress, CircularProgressLabel, Flex } from '@chakra-ui/react';
import React from 'react';
import { User } from './User';
import { log } from 'util';

export const data = [
  {
    id: 1,
    client: {
      image:
        'https://images.unsplash.com/photo-1512485694743-9c9538b4e6e0?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDN8fGd1eSUyMGZhY2V8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      firstName: 'Marion',
      lastName: 'Watson',
    },
    workout: {
      name: 'boxing',
      trainer: 'Full name'
    },
    type: '12',
    progress: '2',
    activationDate: '01.03.2022',
    expirationDate: '01.04.2022',
    price: 800,
    discount: 'none',
    admin: 'adminName'
  },
  {
    id: 1,
    client: {
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
      firstName: 'Louise',
      lastName: 'Hopkins',
    },
    workout: {
      name: 'bjj',
      trainer: 'Full name'
    },
    type: '12',
    progress: '12',
    activationDate: '01.03.2022',
    expirationDate: '01.04.2022',
    price: 800,
    discount: 'none',
    admin: 'adminName'
  },
  {
    id: 1,
    client: {
      image:
        'https://images.unsplash.com/photo-1470506028280-a011fb34b6f7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjN8fGxhZHklMjBmYWNlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=60',
      firstName: 'Marion',
      lastName: 'Watson',
    },
    workout: {
      name: 'boxing',
      trainer: 'Full name'
    },
    type: 'unlim',
    progress: '',
    activationDate: '03.03.2022',
    expirationDate: '03.04.2022',
    price: 800,
    discount: 'none',
    admin: 'adminName'
  },
];

export const columns = [
  {
    Header: 'Client',
    accessor: 'client',
    Cell: function ClientCell(data: any) {
      return (
        <User data={data}/>
      );
    },
  },
  {
    Header: 'Workout',
    accessor: 'workout',
    Cell: function WorkoutCell(data: any) {
      return (
        <Flex flexDir="column">
          <Box fontSize="sm" fontWeight="medium">
            {data.name}
          </Box>
          <Box fontSize="sm" fontWeight="medium">
            {data.trainer}
          </Box>
        </Flex>
      );
    },
  },
  {
    Header: 'Type',
    accessor: 'type',
    Cell: function TypeCell(data: any) {
      return (
        <Box fontSize="sm" fontWeight="medium">
          {data}
        </Box>);
    }
  },
  {
    Header: 'Progress',
    accessor: 'progress',
    Cell: function ProgressCell(data: any) {
      const value = (data * 100) / 12;

      return (
        <CircularProgress value={value}>
          <CircularProgressLabel>{data}</CircularProgressLabel>
        </CircularProgress>
      );
    }
  },
  {
    Header: 'Activation date',
    accessor: 'activationDate',
    Cell: function ActivationDateCell(data: any) {
      return (
        <Box fontSize="sm" fontWeight="medium">
          {data}
        </Box>);
    }
  },
  {
    Header: 'Expiration date',
    accessor: 'expirationDate',
    Cell: function ExpirationDateCell(data: any) {
      return (
        <Box fontSize="sm" fontWeight="medium">
          {data}
        </Box>);
    }
  },
  {
    Header: 'Price',
    accessor: 'price',
    Cell: function PriceCell(data: any) {
      return (
        <Box fontSize="sm" fontWeight="medium">
          {data}
        </Box>);
    }
  },
  {
    Header: 'Discount',
    accessor: 'discount',
    Cell: function DiscountCell(data: any) {
      return (
        <Box fontSize="sm" fontWeight="medium">
          {data}
        </Box>);
    }
  },
  {
    Header: 'Admin',
    accessor: 'admin',
    Cell: function AdminCell(data: any) {
      return (
        <Box fontSize="sm" fontWeight="medium">
          {data}
        </Box>);
    }
  },
];

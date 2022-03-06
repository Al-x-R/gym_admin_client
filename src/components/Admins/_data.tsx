import { Badge, Box } from '@chakra-ui/react';
import React from 'react';

const badgeEnum: Record<string, string> = {
  all: 'green',
  limited: 'orange',
  forbidden: 'red',
};

export const data = [
  {
    adminName: 'admin',
    id: 3,
    isSuper: true
  },
  {
    adminName: 'admin2',
    id: 4,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  {
    adminName: 'test update admin',
    id: 5,
    isSuper: false
  },
  ];

export const columns = [
  {
    Header: 'Member',
    accessor: 'adminName',
    Cell: function MemberCell(data: any) {
      return (
        <Box  fontSize="sm" fontWeight="medium">
          {data}
        </Box>);
    },
  },
  {
    Header: 'Access',
    accessor: 'isSuper',
    Cell: function StatusCell(data: any) {
      const color = data ? 'all' : 'limited';
      return (
        <Badge fontSize="xs" colorScheme={badgeEnum[color]}>
          {color}
        </Badge>);
    }
  }
];

import React, { FC } from 'react';
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue as mode } from '@chakra-ui/react';
import { columns } from './_data';

interface Admin {
  adminName: string;
  id: number;
  isSuper: boolean;
}

interface AdminsList {
  admins: Admin[]
}

const AdminsTable:FC<AdminsList> = ({admins}) => {
  return (
    <Box overflowY="auto" maxHeight="calc(100vh - 100px)" mt={5}>
      <Table borderWidth="1px" fontSize="sm">
        <Thead position="sticky" top={0} bg={mode('gray.50', 'gray.800')}>
          <Tr h={10}>
            {columns.map((column, index) => (
              <Th whiteSpace="nowrap" scope="col" key={index}>
                {column.Header}
              </Th>
            ))}
            <Th/>
          </Tr>
        </Thead>

        <Tbody>
          {admins.map((row, index) => {
            return (
              <Tr key={index}>
                {columns.map((column, index) => {
                  const cell = row[column.accessor as keyof typeof row];
                  const element = column.Cell?.(cell) ?? cell;
                  return (
                    <Td whiteSpace="nowrap" key={index}>
                      {element}
                    </Td>
                  );
                })}
                <Td textAlign="right">
                  <Button variant="link" colorScheme="blue">
                    Edit
                  </Button>
                </Td>
              </Tr>
            );
          })}
        </Tbody>

      </Table>
    </Box>
  );
};

export default AdminsTable;
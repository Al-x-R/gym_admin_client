import React, { useState } from 'react';
import { Box, Button, Table, Tbody, Td, Th, Thead, Tr, useColorModeValue as mode } from '@chakra-ui/react';
import { columns, data } from './_data';
import { ClientTableActions } from './ClientTableActions';
import NewClientForm from './NewClientForm';

const Clients = () => {
  const [newMember, setNewMember] = useState(false)
  return (
    <>
    <ClientTableActions newMember={newMember} setNewMember={setNewMember} />
      {!newMember
        ? <Box overflowY="auto" maxHeight="calc(100vh - 150px)" mt={2}>
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
            {data.map((row, index) => {
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
                    <Button>action</Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </Box>
      : <NewClientForm />
      }
    </>
  );
};

export default Clients;
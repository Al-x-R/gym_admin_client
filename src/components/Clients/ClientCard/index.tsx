import React from 'react';
import { Avatar, Box, Button, Flex, useColorModeValue } from '@chakra-ui/react';
import { HiPencilAlt } from 'react-icons/hi';
import { CardHeader } from './CardHeader';
import { Property } from './Property';

const ClientCard = () => {
  return (
    <Box as="section" bg={useColorModeValue('gray.100', 'inherit')} py="12" px={{ md: '8' }}>
      <Flex
        bg={useColorModeValue('white', 'gray.700')}
        rounded={{ md: 'lg' }}
        shadow="base"
        overflow="hidden"
        maxW="4xl"
        mx="auto">
        <Box p={4}>
          <Avatar size='2xl' name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
        </Box>
        <Flex w={'100%'} flexDir={'column'} pr={4}>
          <CardHeader
            title="Segun Adebayo"
            action={
              <Button variant="outline" minW="20" leftIcon={<HiPencilAlt />}>
                Edit
              </Button>
            }
          />
          <Property label="Email" value="chakra-ui.sh@gmail.com" />
          <Property label="Mobile" value="0987654321" />
          <Property label="Birthday" value="03.05.2000" />
        </Flex>
        </Flex>
    </Box>
  );
};

export default ClientCard;
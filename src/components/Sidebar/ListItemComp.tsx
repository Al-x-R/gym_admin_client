import { HStack, ListIcon, ListItem, ListItemProps, Text } from '@chakra-ui/react'
import * as React from 'react'
import { useColorModeValue as mode } from '@chakra-ui/react';
import { FC } from 'react';

interface IListItem extends ListItemProps{
  activeTab: string
  name: string
  icon: any
  setActiveTab: React.Dispatch<React.SetStateAction<any>>
}

export const ListItemComp: FC<IListItem> = ({icon, activeTab, name, setActiveTab}) => {

  return (
    <ListItem
      py={2}
      px={3}
      borderRadius="md"
      transition="all 0.3s"
      fontWeight={name === activeTab ? 'bold' : 'medium'}
      lineHeight="1.5rem"
      color={name === activeTab
        ? mode('blue.600', 'blue.300')
        : mode('gray.600', 'gray.300')
      }
      _hover={{
        bg: mode('gray.200', 'gray.600'),
        color: mode('gray.600', 'white'),
        fontWeight: 'bold'
      }}

      onClick={() => setActiveTab(name)}
    >
      <HStack spacing={4}>
        <ListIcon as={icon} boxSize="20px" />
        <Text as="span">{name}</Text>
      </HStack>
    </ListItem>
  )
}

import * as React from 'react';
import { Divider, Flex, Spacer, Stack, List, useColorModeValue as mode } from '@chakra-ui/react';
import { ListItemComp } from './ListItemComp';
import { FC } from 'react';
import { listItems } from './_data';

interface ISidebar {
  setActiveTab: React.Dispatch<React.SetStateAction<any>>
  activeTab: string
}

export const Sidebar: FC<ISidebar> = ({setActiveTab, activeTab}) => {

  return (
    <Flex
      height="calc(100vh - 84px)"
      width='xs'
      direction="column"
      bg={mode('white', 'gray.800')}
      color="white"
      px={5}
      py={10}
    >
      <Stack spacing={6}>
        <List spacing={3}>
          {listItems.map(item => (
            <ListItemComp key={item.name}
                          name={item.name}
                          icon={item.icon}
                          activeTab={activeTab}
                          setActiveTab={setActiveTab}
            />
          ))}
        </List>
        <Divider borderColor="whiteAlpha.400"/>
      </Stack>
      <Spacer/>
    </Flex>
  );
};

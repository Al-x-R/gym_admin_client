import { Box, Heading } from '@chakra-ui/react'
import * as React from 'react'
import { TableActions } from './TableActions'
import { TableContent } from './TableContent'
import { TablePagination } from './TablePagination'

const Table = () => {
  return (
    <Box as="section" py="10">
      <Box maxW='100%' mx="auto" px={{ base: '4', md: '5' }}>
        <Box overflowX="auto">
          <TableActions />
          <TableContent />
          <TablePagination />
        </Box>
      </Box>
    </Box>
  )
}

export default Table;

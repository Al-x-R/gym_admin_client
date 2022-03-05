import * as React from "react"
import {
  Box,
  Text,
  VStack,
  Grid,
} from "@chakra-ui/react"
import Navbar from './components/Navbar/Navbar';

export const App = () => (
    <Box textAlign="center" fontSize="xl">
      <Navbar />
      <Grid minH="100vh" p={3}>
        <VStack spacing={8}>
          <Text>
            Hello
          </Text>
        </VStack>
      </Grid>
    </Box>
)

import { Box, Heading, Text, Button, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Box bg="gray.100" minH="100vh" py={12}>
      <VStack spacing={8} align="center">
        <Heading as="h1" size="2xl">
          Welcome to My Django Website
        </Heading>

        <Text fontSize="xl" textAlign="center" maxW="2xl">
          This is a simple website built using the Django web framework. It currently just has a homepage, but more pages and features can be added.
        </Text>

        <Button colorScheme="blue" size="lg">
          Get Started
        </Button>
      </VStack>
    </Box>
  );
};

export default Index;

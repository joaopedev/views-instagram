import { Box, Center, Progress, Image, Text } from "@chakra-ui/react";
import React from "react";

export const InstaPage: React.FC = () => {
  return (
    <Box
      paddingTop="35px"
      paddingLeft="30%"
      paddingRight="30%"
      paddingBottom="50px"
    >
      <Progress
        borderRadius="18px"
        maxW="100%"
        height="12px"
        colorScheme="red"
        value={50}
        bg="rgb(254 226 226);"
      />
      <Center paddingTop="50px">
        <Image
          h="400px"
          w="400px"
          src="https://odetetivedoinsta.com.br/_next/image?url=%2F2.png&w=256&q=75"
        />
      </Center>
      <Box>
        <Text fontSize="5xl" textAlign="center">
          Find out in 1 minute who still loves you and who hates you
        </Text>
      </Box>
    </Box>
  );
};

export default InstaPage;

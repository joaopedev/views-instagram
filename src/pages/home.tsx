import {
  Box,
  Progress,
  Image,
  Center,
  Text,
  Button,
  Flex,
} from "@chakra-ui/react";
import React from "react";

export const Home: React.FC = () => {
  return (
    <Box paddingTop="35px" paddingLeft="30%" paddingRight="30%" paddingBottom="50px">
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
          src="https://odetetivedoinsta.com.br/_next/image?url=%2F1.png&w=256&q=75"
        />
      </Center>
      <Box>
        <Text fontSize="5xl" textAlign="center">
          Find out in 1 minute who still loves you and who hates you
        </Text>
      </Box>
      <Center paddingTop="50px">
        <Button w="290px" h="57px" borderRadius="20px" color="rgb(29 78 216)">
          Immediate Result
        </Button>
      </Center>
      <Center paddingTop="45px">
        <Flex gap="10px">
          <Box
            boxShadow="xl"
            borderRadius="12px"
            h="190px"
            w="175px"
            p="4"
            bg="white"
            borderColor="grey"
          >
            <Text fontWeight="bold" textAlign="center">
              Who can't take their eyes off you
            </Text>
            <Text paddingTop="20px" textAlign="center">
              Reviewed your stories more than 3 times
            </Text>
          </Box>
          <Box
            boxShadow="xl"
            borderRadius="12px"
            h="190px"
            w="175px"
            p="4"
            bg="white"
            borderColor="grey"
          >
            <Text fontWeight="bold" textAlign="center">
              Who doesn't forget you
            </Text>
            <Text paddingTop="15px" textAlign="center">
              Says he got over you but visited your profile 3 times today
            </Text>
          </Box>
        </Flex>
      </Center>
      <Center paddingTop="20px">
        <Flex gap="10px">
          <Box
            boxShadow="xl"
            borderRadius="12px"
            h="190px"
            w="175px"
            p="4"
            bg="white"
            borderColor="grey"
          >
            <Text fontWeight="bold" textAlign="center">
              Who can't get you out of their mouths
            </Text>
            <Text paddingTop="15px" textAlign="center">
              Your followers who mentioned you the most
            </Text>
          </Box>
          <Box
            boxShadow="xl"
            borderRadius="12px"
            h="190px"
            w="175px"
            p="4"
            bg="white"
            borderColor="grey"
          >
            <Text fontWeight="bold" textAlign="center">
              Who wants you
            </Text>
            <Text paddingTop="35px" textAlign="center">
              Who spent the most time viewing your profile
            </Text>
          </Box>
        </Flex>
      </Center>
      <Center paddingTop="55px">
        <Button height="68px" w="362px" fontWeight="12px" colorScheme="red">Continue</Button>
      </Center>
    </Box>
  );
};

export default Home;

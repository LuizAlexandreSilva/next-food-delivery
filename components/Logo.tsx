import { Flex, Heading } from "@chakra-ui/core";

const Logo: React.FC = () => {
  return (
    <Flex w="100%" height="100%" gridArea="logo" bg="red.500"
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <Heading>Logo</Heading>
    </Flex>
  );
}

export default Logo;
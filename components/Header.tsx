import { Box, Flex, Icon, Input, InputGroup, InputRightElement, Link } from "@chakra-ui/core";
import { MdEventNote, MdFavoriteBorder, MdPersonOutline } from 'react-icons/md';

const Header: React.FC = () => {
  return (
    <Flex gridArea="header" bg="red.500" alignItems="center"
      justifyContent="space-between" p="8">
      <InputGroup>
        <Input type="string" placeholder="Buscar" pr="2.5rem" w="400px" />
        <InputRightElement
          height="70%"
          top="15%"
          borderLeft="1px"
          borderColor="gray.300"
          children={
            <Icon name="search" color="gray.300" />
          }
        />
      </InputGroup>
      <Flex>
        <Link fontWeight="700" d="flex"
          alignItems="center" color="white" fontSize="xs">
          <Box as={MdEventNote} size={4} mr="1" />
          PEDIDOS
        </Link>
        <Link fontWeight="700" d="flex"
          alignItems="center" color="white" fontSize="xs" ml="4">
          <Box as={MdFavoriteBorder} size={4} mr="1" />
          FAVORITOS
        </Link>
        <Link fontWeight="700" d="flex"
          alignItems="center" color="white" fontSize="xs" ml="4">
          <Box as={MdPersonOutline} size={4} mr="1" />
          MINHA CONTA
        </Link>
      </Flex>
    </Flex>
  );
}

export default Header;
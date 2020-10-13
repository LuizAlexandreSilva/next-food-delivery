import { Box, Flex, Link, Menu, MenuItem, MenuList } from "@chakra-ui/core";

const MainMenu: React.FC = () => {
  return (
    <Flex direction="column" gridArea="menu" bg="gray.100" alignItems="center"
      h="calc(100vh - 86px)">
      <Link fontSize="xl" fontWeight="600" p="3" mt="4">
        Início
      </Link>
      <Link fontSize="xl" fontWeight="600" p="3">
        Mercado
      </Link>
      <Link fontSize="xl" fontWeight="600" p="3">
        Promoções
      </Link>
      <Link fontSize="xl" fontWeight="600" p="3">
        Brasileira
      </Link>
      <Link fontSize="xl" fontWeight="600" p="3">
        Saudável
      </Link>
      <Link fontSize="xl" fontWeight="600" p="3">
        Vegetariana
      </Link>
      <Link fontSize="xl" fontWeight="600" p="3">
        Marmita
      </Link>
      <Link fontSize="xl" fontWeight="600" p="3">
        Lanches
      </Link>
      <Link fontSize="xl" fontWeight="600" p="3">
        Japonesa
      </Link>
      <Link fontSize="xl" fontWeight="600" p="3">
        Pizza
      </Link>
    </Flex>
  );
}

export default MainMenu;
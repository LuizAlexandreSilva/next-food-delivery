import { Box, Flex, Icon, Link, Text } from "@chakra-ui/core";
import { useMemo } from "react";
import { MdMenu, MdShoppingCart } from "react-icons/md";
import { useCart } from "../hooks/cart";

const CartHeader: React.FC = () => {
  const { items } = useCart();

  const itemsCount = useMemo(() => {
    if (items.length) {
      const singularOrPlural = items.length > 1 ? 'itens' : 'item';
      return `${items.length} ${singularOrPlural}`;
    } else {
      return 'VAZIO';
    }
  }, [items]);

  return (
    <Flex gridArea="cart-header" bg="red.500" p="4" borderLeft="1px"
      borderColor="red.600" alignItems="center" justifyContent="space-between"
      color="white">
      <Text d="flex" alignItems="center" fontWeight="700" fontSize="sm">
        <Icon as={MdMenu} mr="2" />
        MEU CARRINHO
      </Text>
      <Link fontWeight="700" d="flex" alignItems="center" fontSize="xs">
        <Box as={MdShoppingCart} size={4} mr="1" />
        {itemsCount}
      </Link>
    </Flex>
  );
}

export default CartHeader;
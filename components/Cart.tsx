import { Box, Divider, Flex, Icon, PseudoBox, Text } from "@chakra-ui/core";
import { useMemo } from "react";
import { MdArrowForward, MdDelete, MdPersonPinCircle } from "react-icons/md";
import { useCart } from "../hooks/cart";
import { CardItem } from "../models/CardItem";
import formatValue from "../utils/formatValue";
import CartItem from "./CartItem";

const Cart: React.FC = () => {
  const { items } = useCart();

  const orders: Map<string, CardItem[]> = useMemo(() => {
    return items.reduce((arr: CardItem[], item) => {
      arr[item.dish.restaurantName] = arr[item.dish.restaurantName] || [];
      arr[item.dish.restaurantName].push(item);
      return arr;
    }, Object.create(null));
  }, [items]);

  const total: string = useMemo(() => {
    return formatValue(items.reduce((cur, item) => cur +
      (item.dish.promotionPrice
        ? item.dish.promotionPrice
        : item.dish.price)
      , 0));
  }, [items]);

  return (
    <Box gridArea="cart" bg="gray.50" borderLeft="1px" borderColor="gray.200"
      p="4" mt="1" h="calc(100vh - 86px)">
      <Flex justifyContent="space-between" alignItems="center" color="gray.400">
        <Text fontSize="xs" d="flex" alignItems="center" fontWeight="700">
          TROCAR ENDEREÇO
          <Icon as={MdArrowForward} size="4" ml="1" />
        </Text>
        <Icon as={MdDelete} />
      </Flex>
      <Flex mt="5" alignItems="center" lineHeight="1.2">
        <Icon as={MdPersonPinCircle} size="6" mr="1" />
        <Flex direction="column" fontSize="sm">
          <Text fontWeight="700">
            MEU ENDEREÇO
          </Text>
          <Text isTruncated as="u">
            Rua das Nogueiras, 123 - Jardim...
          </Text>
        </Flex>
      </Flex>
      <Box mt="10">
        {!items.length ? (
          <Text color="gray.400" textAlign="center">
            Seu carrinho está vazio no momento :(
          </Text>
        ) : (
            <>
              {Object.keys(orders).map(restaurant => (
                <Box key={restaurant}>
                  <Text fontWeight="600" mb="2">{restaurant}</Text>
                  {orders[restaurant].map(item => (
                    <CartItem key={item.dish.name} item={item} />
                  ))}
                </Box>
              ))
              }
              <Divider mt="5" mb="5" />
              <Flex alignItems="center" fontWeight="600">
                <Text>TOTAL</Text>
                <Text ml="auto" fontSize="lg">{total}</Text>
              </Flex>
              <PseudoBox as="button" d="flex" justifyContent="space-between"
                w="100%" alignItems="center" bg="red.500" color="white"
                rounded="md" p="8px" lineHeight="16px" mt="2"
                _hover={{ bg: "red.600" }} _active={{ bg: "red.700" }}
                transition="all 0.2s ease"
              >
                <Box>
                  <Text fontSize="sm">Receba em</Text>
                  <Text>{items[0].dish.deliveryTime}</Text>
                </Box>
                <Text>
                  PAGAR
                  <Icon name="chevron-right" />
                </Text>
              </PseudoBox>
            </>
          )}
      </Box>
    </Box>
  );
}

export default Cart;
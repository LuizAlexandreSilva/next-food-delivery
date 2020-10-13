import { Box, Flex, Image, PseudoBox, Text } from "@chakra-ui/core";
import { useCallback } from "react";
import { useCart } from "../hooks/cart";
import { ICartItem } from "../models/CartItem";

interface CartItemProps {
  item: ICartItem;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { removeItem } = useCart();

  const handleRemoveItem = useCallback(() => {
    removeItem(item);
  }, [item, removeItem]);

  return (
    <Flex key={item.dish.name} alignItems="center" mb="1" position="relative">
      <Image src={item.dish.imageUrl} alt={item.dish.name}
        w="40px" h="45px" borderRadius="md" mr="1"
      />
      <Box>
        <Text as="p" fontSize="sm">
          <strong>{item.quantity}x</strong> {item.dish.name}
        </Text>
      </Box>
      <Box ml="auto">
        <Text fontSize="sm">
          {item.dish.promotionPrice
            ? item.dish.formattedPromotionPrice
            : item.dish.formattedPrice}
        </Text>
      </Box>
      <PseudoBox as="button" position="absolute" w="100%" h="100%" color="white"
        borderRadius="md" opacity={0} _hover={{ opacity: 1 }} bg="red.500"
        onClick={handleRemoveItem}
      >
        <Text>Remover item</Text>
      </PseudoBox>
    </Flex>
  )
}

export default CartItem;
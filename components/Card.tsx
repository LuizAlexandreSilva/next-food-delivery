import { Badge, Box, Button, Flex, Icon, Image, Input, PseudoBox, Text } from "@chakra-ui/core";
import { useCallback, useContext, useEffect, useState } from "react";
import { MdFavorite, MdFavoriteBorder, MdLocationOn, MdMotorcycle, MdThumbUp } from "react-icons/md";
import { useCart } from "../hooks/cart";
import { CardItem } from "../models/CardItem";

interface CardProps {
  item: CardItem;
}

const Card: React.FC<CardProps> = ({ children, item }) => {
  const [quantity, setQuantity] = useState(0);
  const { updateCart, items } = useCart();

  useEffect(() => {
    const foundItem = items.find(i => i.dish.name === item.name);
    if (foundItem) {
      setQuantity(foundItem.quantity);
    } else {
      setQuantity(0);
    }
  }, [items]);

  const handleAddQuantity = useCallback(() => {
    setQuantity(quantity + 1);
    updateCart({ dish: item, quantity: quantity + 1 });
  }, [quantity, setQuantity, updateCart]);

  const handleSubQuantity = useCallback(() => {
    if (!quantity) return;
    setQuantity(quantity - 1);
    updateCart({ dish: item, quantity: quantity - 1 });
  }, [quantity, setQuantity, updateCart]);

  return (
    <PseudoBox rounded="lg" fontSize="sm" borderWidth="1px"
      color="gray.500" position="relative" borderRadius="lg"
      overflow="hidden" transition="0.2s all ease-in-out" maxH="320px"
      opacity={!item.available ? 0.5 : 1} boxShadow="0px 2px 5px 0px rgba(0,0,0,0.1)"
      cursor={!item.available ? 'not-allowed' : 'default'}
    >
      {item.type === "dish" ? (
        <Image src={item.restaurantLogoUrl} alt="Restaurant" position="absolute"
          top={0} left={0} height={5} width={12} borderRadius="0 0 0.5rem 0"
        />
      ) : (
          <Badge fontSize="md" position="absolute" bg="red.500" color="white"
            borderRadius="0 0 0.5rem 0"
          >
            {item.category}
          </Badge>
        )}
      <Image height="220px" width="100%" src={item.imageUrl} alt={item.name}
        objectFit="fill" objectPosition="0 10%" />
      <Box p="2">
        <Text fontWeight="600" isTruncated title={item.name}>
          {item.name}
        </Text>
        {
          item.type === "dish" ? (
            <Text textAlign="right">
              {item.weight}
            </Text>
          ) : (
              <Flex justifyContent="space-between" alignItems="center">
                <Flex alignItems="center" color="red.500">
                  <Icon as={MdLocationOn} mr="1" />
                  <Text>{item.distance}</Text>
                </Flex>
                <Flex alignItems="center" color="green.500">
                  <Icon as={MdThumbUp} mr="1" />
                  <Text>{item.rating}</Text>
                </Flex>
              </Flex>
            )
        }
        <Flex alignItems="center" justifyContent="space-between">
          <Text d="flex" alignItems="center">
            <Icon as={MdMotorcycle} color="red.500" mr="1" />
            {item.deliveryTime} | {item.formattedDeliveryPrice}
          </Text>
          <Icon as={item.favorite ? MdFavorite : MdFavoriteBorder} color="red.500" />
        </Flex>
      </Box>
      {item.type === "dish" && item.available && (
        <PseudoBox
          position="absolute"
          borderRadius="lg"
          top="0" w="100%" h="100%"
          background="rgba(0, 0, 0, 0.8)"
          color="white"
          opacity={0}
          _hover={{ opacity: 1 }}
          transition="0.2s all ease-in-out"
          d="flex" p="5" textAlign="center"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          userSelect="none"
        >
          <Text>
            {item.name}
          </Text>
          <Flex mt="4" mb="4">
            <Button color="gray.500" borderRadius="8px 0 0 8px" onClick={handleSubQuantity}>
              <Icon name="minus" size="3" />
            </Button>
            <Input type="number" w="50px" color="red.500" borderRadius="0"
              textAlign="center" value={quantity} backgroundColor="white" isReadOnly
            />
            <Button color="gray.500" borderRadius="0 8px 8px 0" onClick={handleAddQuantity}>
              <Icon name="add" size="3" />
            </Button>
          </Flex>
          <Text mb="1">{item.weight} | {item.promotionPrice ? item.formattedDeliveryPrice : item.formattedPrice}</Text>
          <Text>{item.deliveryTime} | {item.formattedDeliveryPrice}</Text>
        </PseudoBox>
      )}
      {item.type === "restaurant" && item.available && (
        <PseudoBox
          position="absolute"
          borderRadius="lg"
          top="0" w="100%" h="100%"
          background="rgba(0, 0, 0, 0.8)"
          color="white"
          opacity={0}
          _hover={{ opacity: 1 }}
          transition="0.2s all ease-in-out"
          d="flex" p="5" textAlign="center"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          userSelect="none"
        >
          <Button color="gray.900">VER CARDÁPIO</Button>
        </PseudoBox>
      )}
    </PseudoBox>
  );
}

export default Card;
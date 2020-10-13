import { Box, Flex, Grid, IconButton, Select, SimpleGrid, Text } from "@chakra-ui/core";
import { GetStaticProps } from "next";
import Card from "../components/Card";
import Cart from "../components/Cart";
import CartHeader from "../components/CartHeader";
import Header from "../components/Header";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import SectionHeader from "../components/SectionHeader";
import { CardItem } from "../models/CardItem";
import formatValue from "../utils/formatValue";

interface HomeProps {
  dishes: CardItem[];
  restaurants: CardItem[];
}

export default function Home({ dishes, restaurants }: HomeProps) {
  return (
    <Grid
      as="main"
      height="100vh"
      templateColumns="240px auto 280px"
      templateRows="80px auto"
      templateAreas="
        'logo header cart-header'
        'menu main cart'
      "
    >
      <Logo />
      <Header />
      <CartHeader />
      <Menu />
      <Cart />
      <Box gridArea="main" bg="gray.50" p="1rem 2rem" color="gray.600"
        h="calc(100vh - 80px)" overflowY="auto"
      >
        <Flex alignItems="center" justifyContent="space-between">
          <Text fontSize="xl" fontWeight="bold">
            Sua busca encontrou 6 resultados
          </Text>
          <Flex alignItems="center">
            <Text mr="3" fontWeight="600">
              Filtrar por:
            </Text>
            <Select w="250px" placeholder="Selecione" defaultValue={0}>
              <option value={0}>Tempo de entrega</option>
            </Select>
            <IconButton aria-label="Submit filter" variantColor="red"
              borderRadius="lg" icon="arrow-down" ml="3" />
          </Flex>
        </Flex>
        <SectionHeader
          sectionName="Pratos"
          detailsLabel="Ver todos os restaurantes"
        />
        <SimpleGrid columns={4} spacing={6} mt="3">
          {
            dishes && dishes.map(dish => (
              <Card key={dish.name} item={dish} />
            ))
          }
        </SimpleGrid>
        <SectionHeader
          sectionName="Restaurantes"
          detailsLabel="Ver restaurantes próximos"
        />
        <SimpleGrid columns={4} spacing={6} mt="3">
          {
            restaurants && restaurants.map(restaurant => (
              <Card key={restaurant.name} item={restaurant} />
            ))
          }
        </SimpleGrid>
      </Box>
    </Grid>
  )
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const dishes: CardItem[] = (await import('../dishes.json')).default;
  dishes.forEach(dish => {
    dish.formattedPrice = formatValue(dish.price);
    dish.formattedPromotionPrice = dish.promotionPrice ? formatValue(dish.promotionPrice) : null;
    dish.formattedDeliveryPrice = formatValue(dish.deliveryPrice);
  });
  const restaurants: CardItem[] = (await import('../restaurants.json')).default;

  return {
    props: {
      dishes,
      restaurants
    }
  }
}

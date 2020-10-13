export interface CardItem {
  name: string;
  price?: number;
  promotionPrice?: number;
  weight?: string;
  deliveryTime: string;
  deliveryPrice: number;
  favorite: boolean;
  available: boolean;
  type: string;
  restaurantName?: string;
  imageUrl: string;
  restaurantLogoUrl?: string;
  category?: string;
  distance?: string;
  rating?: number;

  formattedPrice?: string;
  formattedPromotionPrice?: string;
  formattedDeliveryPrice?: string;
}
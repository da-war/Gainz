export function getDiscountedPrice(originalPrice: number, discountPercentage: number): number {
  const discountedPrice = originalPrice - (originalPrice * discountPercentage) / 100;
  return Math.round(discountedPrice); 
}
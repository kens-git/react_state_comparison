import Product from '../types/Product';
import ProductCategory from '../types/ProductCategory';

export const PRODUCT1: Product = {
  id: 1,
  name: 'Great Couch',
  description:
    'A great couch! Now fire retardant after recent customer feedback.',
  category: ProductCategory.furniture,
  price: 1599,
  inventory: 3,
} as const;

export const PRODUCT2: Product = {
  id: 2,
  name: "Elite 'Puter Supply: 128MB RAM",
  description: '128MB of RAM. Contains dust at no extra charge.',
  category: ProductCategory.electronics,
  price: 10,
  inventory: 100,
} as const;

export const PRODUCT3: Product = {
  id: 3,
  name: "'Classic' Blue Jeans",
  description:
    'The holes are intentional and definitely not because these were previously worn.',
  category: ProductCategory.clothes,
  price: 30,
  inventory: 50,
} as const;

export const PRODUCT4: Product = {
  id: 4,
  name: 'Folding Chair',
  description: 'For when you only want to sit sometimes.',
  category: ProductCategory.furniture,
  price: 20,
  inventory: 100,
} as const;

export const PRODUCT5: Product = {
  id: 5,
  name: 'Strawberry Pi',
  description: "Raspberry's less successful cousin.",
  category: ProductCategory.electronics,
  price: 25,
  inventory: 1000,
} as const;

export const PRODUCT6: Product = {
  id: 6,
  name: 'Jumper',
  description: 'Imported from the UK. Cheeky, innit bruv?',
  category: ProductCategory.clothes,
  price: 50,
  inventory: 20,
} as const;

const INVENTORY: Product[] = [
  PRODUCT1,
  PRODUCT2,
  PRODUCT3,
  PRODUCT4,
  PRODUCT5,
  PRODUCT6,
];

export default INVENTORY;

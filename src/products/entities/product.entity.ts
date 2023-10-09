export class Product {
  id: string;
  name: string;
  value: number;
  availableQuantity: number;
  description: string;
  characteristics: { name: string; description: string }[];
  images: { url: string; description: string }[];
  category: string;
  creationDate: Date;
  updateDate: Date;
}

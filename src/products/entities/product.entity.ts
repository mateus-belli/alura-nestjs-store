import { PorductCharacteristicEntity } from './productCharacteristic.entity';
import { ProductImageEntity } from './productImage.entity';

export class ProductEntity {
  id: string;
  name: string;
  value: number;
  availableQuantity: number;
  description: string;
  characteristics: PorductCharacteristicEntity[];
  images: ProductImageEntity[];
  category: string;
  creationDate: Date;
  userCreationId: string;
  updateDate: Date;
  userUpdateId: string | undefined;
}

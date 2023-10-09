import { IsString } from 'class-validator';

export class ProductCaracteristicDto {
  @IsString()
  name: string;

  @IsString()
  description: string;
}

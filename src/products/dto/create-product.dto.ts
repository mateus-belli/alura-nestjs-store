import {
  ArrayMaxSize,
  ArrayMinSize,
  IsArray,
  IsDefined,
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  IsUUID,
  ValidateNested,
} from 'class-validator';
import { ProductCaracteristicDto } from './product-caracteristic.dto';
import { Type } from 'class-transformer';
import { ProductImageDto } from './product-image.dto';
import { UserExists } from 'src/user/validation/user-exists.validator';

export class CreateProductDto {
  @IsString()
  @IsDefined()
  name: string;

  @IsNumber()
  @IsDefined()
  value: number;

  @IsNumber()
  @IsPositive()
  @IsInt()
  @IsDefined()
  availableQuantity: number;

  @IsString()
  description: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @ArrayMaxSize(10)
  @Type(() => ProductCaracteristicDto)
  characteristics: [];

  @ValidateNested()
  @IsArray()
  @Type(() => ProductImageDto)
  images: [];

  @IsString()
  category: string;

  // @IsDefined()
  // @IsUUID()
  // @UserExists()
  // userCreationId: string;
}

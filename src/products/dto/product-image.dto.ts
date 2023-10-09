import { IsOptional, IsString } from 'class-validator';

export class ProductImageDto {
  @IsString()
  url: string;

  @IsOptional()
  @IsString()
  description: string;
}

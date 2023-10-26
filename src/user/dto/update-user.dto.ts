import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { UserEmailIsUnique } from '../validation/user-email-is-unique.validator';

export class UpdateUserDto {
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  name: string;

  @IsEmail()
  @UserEmailIsUnique()
  @IsOptional()
  email: string;

  @MinLength(6)
  @IsOptional()
  password: string;
}

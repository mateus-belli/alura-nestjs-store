import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { UserEmailIsUnique } from '../validation/user-email-is-unique.validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @UserEmailIsUnique()
  email: string;

  @MinLength(6)
  password: string;
}

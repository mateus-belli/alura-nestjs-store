import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';
import { EmailIsUnique } from '../validation/email-is-unique.validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @EmailIsUnique()
  email: string;

  @MinLength(6)
  password: string;
}

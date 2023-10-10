import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserEmailIsUniqueValidator } from './validation/user-email-is-unique.validator';
import { UserExistsValidator } from './validation/user-exists.validator';

@Module({
  controllers: [UserController],
  providers: [UserRepository, UserEmailIsUniqueValidator, UserExistsValidator],
})
export class UserModule {}

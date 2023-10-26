import { Injectable } from '@nestjs/common';
import { UserEntity } from './entities/user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async exists(id: string): Promise<boolean> {
    return !!this.users.find((user) => user.id === id);
  }

  async existsByEmail(email: string): Promise<boolean> {
    return !!this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<UserEntity | null> {
    const userEntity = this.users.find((user) => user.id === id);

    if (!userEntity) {
      throw new Error(`User ${id} not found`);
    }

    return userEntity;
  }

  async list(): Promise<UserEntity[]> {
    return this.users;
  }

  async save(user: UserEntity) {
    this.users.push(user);
  }

  async update(id: string, updateData: Partial<UserEntity>) {
    const userEntity = this.findById(id);

    if (!userEntity) {
      throw new Error('Usuário não existe');
    }

    Object.entries(updateData).forEach(([key, value]) => {
      if (key === 'id' || !value) {
        return;
      }

      userEntity[key] = value;
    });

    return userEntity;
  }

  async delete(id: string) {
    this.users = this.users.filter((user) => user.id !== id);
  }
}

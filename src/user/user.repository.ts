import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';

@Injectable()
export class UserRepository {
  private users: any[] = [];

  async exists(id: string): Promise<boolean> {
    return !!this.users.find((user) => user.id === id);
  }

  async existsByEmail(email: string): Promise<boolean> {
    return !!this.users.find((user) => user.email === email);
  }

  async list() {
    return this.users;
  }

  async save(user: any) {
    user.id = randomUUID();
    user.createdAt = new Date();
    user.updatedAt = new Date();
    user.deletedAt = null;

    this.users.push(user);
  }
}

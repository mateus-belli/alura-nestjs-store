import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  private users: any[] = [];

  async save(user: any) {
    this.users.push(user);
  }

  async list() {
    return this.users;
  }

  async existsByEmail(email: string): Promise<boolean> {
    return !!this.users.find((user) => user.email === email);
  }
}

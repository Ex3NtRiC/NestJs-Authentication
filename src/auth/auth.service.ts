import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    console.log(password);
    if (user && user.password === password) {
      console.log('true');
      const { ...rest } = user;
      return rest;
    }

    return null;
  }
}

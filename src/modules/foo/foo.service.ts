import { Injectable } from '@nestjs/common';
import { User } from 'src/entities';
import { UnitOfWorkService } from '../unit-of-work';

@Injectable()
export class FooService {
  constructor(private readonly uowService: UnitOfWorkService) {
    console.log('new foo svc');
  }

  async getCount(): Promise<number> {
    const queryRunner = this.uowService.getQueryRunner();
    const count = await queryRunner.manager.count(User);
    return count;
  }

  async addUser(): Promise<User> {
    const queryRunner = this.uowService.getQueryRunner();
    const user = await queryRunner.manager.save(User, {
      firstName: Math.random().toString(),
      lastName: Math.random().toString(),
    });
    // throw new Error();
    return user;
  }
}

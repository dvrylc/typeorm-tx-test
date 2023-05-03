import { Injectable } from '@nestjs/common';
import { User } from './entities';
import { UnitOfWorkService } from './modules/unit-of-work';

@Injectable()
export class AppService {
  constructor(private readonly uowService: UnitOfWorkService) {
    console.log('new app svc');
  }

  async getUsers(): Promise<User[]> {
    const queryRunner = this.uowService.getQueryRunner();
    const users = await queryRunner.manager.find(User);
    return users;
  }
}

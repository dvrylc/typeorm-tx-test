import { Injectable } from '@nestjs/common';
import { User } from 'src/entities';
import { UnitOfWorkService } from '../unit-of-work';

@Injectable()
export class BarService {
  constructor(private readonly uowService: UnitOfWorkService) {
    console.log('new bar svc');
  }

  async getUsers(): Promise<User[]> {
    const queryRunner = this.uowService.getQueryRunner();
    // console.log(await queryRunner.manager.query('select txid_current()'));
    const users = await queryRunner.manager.find(User);
    return users;
  }
}

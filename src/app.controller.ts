import { Controller, Get } from '@nestjs/common';
import { BarService } from './modules/bar';
import { FooService } from './modules/foo';
import { UnitOfWorkService } from './modules/unit-of-work';

@Controller()
export class AppController {
  constructor(
    private readonly fooService: FooService,
    private readonly barService: BarService,
    private readonly uowService: UnitOfWorkService,
  ) {}

  @Get()
  async getHello(): Promise<unknown> {
    // start tx
    await this.uowService.startQueryRunnerTx();

    const beforeCount = await this.fooService.getCount();
    const beforeUsers = await this.barService.getUsers();

    await this.fooService.addUser();

    const afterCount = await this.fooService.getCount();
    const afterUsers = await this.barService.getUsers();

    // commit tx
    await this.uowService.commitQueryRunnerTx();

    return {
      before: {
        count: beforeCount,
        // users: beforeUsers,
      },
      after: {
        count: afterCount,
        // users: afterUsers,
      },
    };
  }
}

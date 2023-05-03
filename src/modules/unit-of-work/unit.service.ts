import { Injectable, Scope } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, QueryRunner } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class UnitOfWorkService {
  private readonly queryRunner: QueryRunner;

  constructor(
    @InjectDataSource()
    private readonly dataSource: DataSource,
  ) {
    console.log('new uow');
    // no tx by default, although we can consider that too?
    this.queryRunner = this.dataSource.createQueryRunner();
  }

  getQueryRunner() {
    return this.queryRunner;
  }

  async startQueryRunnerTx() {
    await this.queryRunner.startTransaction();
  }

  async commitQueryRunnerTx() {
    await this.queryRunner.commitTransaction();
  }
}

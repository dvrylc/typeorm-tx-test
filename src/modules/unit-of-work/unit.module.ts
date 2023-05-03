import { Module } from '@nestjs/common';
import { UnitOfWorkService } from './unit.service';

@Module({
  providers: [UnitOfWorkService],
  exports: [UnitOfWorkService],
})
export class UnitOfWorkModule {}

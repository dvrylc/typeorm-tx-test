import { Module } from '@nestjs/common';
import { UnitOfWorkModule } from '../unit-of-work';
import { FooService } from './foo.service';

@Module({
  imports: [UnitOfWorkModule],
  providers: [FooService],
  exports: [FooService],
})
export class FooModule {}

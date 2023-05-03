import { Module } from '@nestjs/common';
import { UnitOfWorkModule } from '../unit-of-work';
import { BarService } from './bar.service';

@Module({
  imports: [UnitOfWorkModule],
  providers: [BarService],
  exports: [BarService],
})
export class BarModule {}

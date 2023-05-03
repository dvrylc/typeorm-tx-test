import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import 'reflect-metadata';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FooModule } from './modules/foo/foo.module';
import { UnitOfWorkModule } from './modules/unit-of-work/unit.module';
import { BarModule } from './modules/bar';
import { datasource } from './ormconfig';

@Module({
  imports: [
    TypeOrmModule.forRoot(datasource),
    UnitOfWorkModule,
    FooModule,
    BarModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

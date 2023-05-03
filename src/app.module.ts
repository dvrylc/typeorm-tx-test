import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import 'reflect-metadata';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { FooModule } from './modules/foo/foo.module';
import { UnitOfWorkModule } from './modules/unit-of-work/unit.module';
import { BarModule } from './modules/bar';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'typeorm-tx-test.sqlite',
      entities: [join(__dirname, 'entities/**/*.entity.{js,ts}')],
      migrations: [join(__dirname, 'migrations/**/*.{js,ts}')],
      logging: true,
    }),
    UnitOfWorkModule,
    FooModule,
    BarModule,
  ],
  controllers: [AppController],
})
export class AppModule {}

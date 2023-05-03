import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import 'reflect-metadata';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { FooModule } from './modules/foo/foo.module';
import { UnitOfWorkModule } from './modules/unit-of-work/unit.module';

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
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

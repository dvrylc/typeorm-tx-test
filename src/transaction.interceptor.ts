import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
  Scope,
} from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { catchError, finalize, tap } from 'rxjs';
import { DataSource } from 'typeorm';

@Injectable({ scope: Scope.REQUEST })
export class TransactionInterceptor implements NestInterceptor {
  private dataSource: DataSource;

  constructor(@InjectDataSource() dataSource: DataSource) {
    this.dataSource = dataSource;
  }

  async intercept(context: ExecutionContext, next: CallHandler) {
    const queryRunner = this.dataSource.createQueryRunner();
    await queryRunner.connect();
    queryRunner.startTransaction();

    const req = context.switchToHttp().getRequest();
    req.queryRunner = queryRunner;

    return next.handle().pipe(
      tap(() => {
        throw new Error();
        queryRunner.commitTransaction();
      }),
      catchError((e) => {
        console.error('Transaction errored, rollback');
        queryRunner.rollbackTransaction();
        throw e;
      }),
      finalize(() => {
        queryRunner.release();
      }),
    );
  }
}

import { Injectable } from '@nestjs/common';
import { UnitOfWorkService } from './modules/unit-of-work';

@Injectable()
export class AppService {
  constructor(private readonly uowService: UnitOfWorkService) {
    console.log('new app svc');
  }
}

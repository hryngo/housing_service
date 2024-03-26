import { Module } from '@nestjs/common';

import { DatabaseModule } from '../database/database.module';
import { sharedProviders } from './shared.providers';

@Module({
  imports: [DatabaseModule],
  providers: [...sharedProviders],
})
export class SharedModule {}

import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { ResendOptions } from './ResendOptions';
import { ResendOptionsFactory } from './ResendOptionsFactory';

export interface ResendAsyncOptions extends Pick<ModuleMetadata, 'imports'> {
  inject?: any[];
  useClass?: Type<ResendOptionsFactory>;
  useExisting?: Type<ResendOptionsFactory>;
  useFactory?: (...args: any[]) => Promise<ResendOptions> | ResendOptions;
}

import { DynamicModule, Module } from '@nestjs/common';
import { ResendAsyncOptions, ResendOptions } from './interfaces';
import { ResendCoreModule } from './ResendCoreModule';

@Module({})
export class ResendModule {
  public static forRoot(options: ResendOptions): DynamicModule {
    return {
      module: ResendModule,
      imports: [ResendCoreModule.forRoot(options)],
    };
  }

  public static forRootAsync(options: ResendAsyncOptions): DynamicModule {
    return {
      module: ResendModule,
      imports: [ResendCoreModule.forRootAsync(options)],
    };
  }
}

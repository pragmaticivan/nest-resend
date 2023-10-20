import {
  DynamicModule, Global, Module, Provider, Type,
} from '@nestjs/common';
import { resendModuleOptions, resendToken } from './constants';
import {
  ResendAsyncOptions,
  ResendOptions,
  ResendOptionsFactory,
} from './interfaces';
import { createResendProvider } from './providers';
import { getResendClient } from './util';

@Global()
@Module({})
export class ResendCoreModule {
  public static forRoot(options: ResendOptions): DynamicModule {
    const provider = createResendProvider(options);

    return {
      exports: [provider],
      module: ResendCoreModule,
      providers: [provider],
    };
  }

  static forRootAsync(options: ResendAsyncOptions): DynamicModule {
    const resendProvider: Provider = {
      inject: [resendModuleOptions],
      provide: resendToken,
      useFactory: (resendOptions: ResendOptions) => getResendClient(resendOptions),
    };

    return {
      exports: [resendProvider],
      imports: options.imports,
      module: ResendCoreModule,
      providers: [...this.createAsyncProviders(options), resendProvider],
    };
  }

  private static createAsyncProviders(options: ResendAsyncOptions): Provider[] {
    if (options.useExisting || options.useFactory) {
      return [this.createAsyncOptionsProvider(options)];
    }

    const useClass = options.useClass as Type<ResendOptionsFactory>;
    return [
      this.createAsyncOptionsProvider(options),
      {
        provide: useClass,
        useClass,
      },
    ];
  }

  private static createAsyncOptionsProvider(
    options: ResendAsyncOptions,
  ): Provider {
    if (options.useFactory) {
      return {
        inject: options.inject || [],
        provide: resendModuleOptions,
        useFactory: options.useFactory,
      };
    }

    const inject = [
      (options.useClass || options.useExisting) as Type<ResendOptionsFactory>,
    ];

    return {
      inject,
      provide: resendModuleOptions,
      useFactory: (optionsFactory: ResendOptionsFactory) => optionsFactory.createResendOptions(),
    };
  }
}

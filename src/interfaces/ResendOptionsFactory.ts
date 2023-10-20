import { ResendOptions } from './ResendOptions';

export interface ResendOptionsFactory {
  createResendOptions(): Promise<ResendOptions> | ResendOptions;
}

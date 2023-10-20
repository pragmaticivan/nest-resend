import { Provider } from '@nestjs/common';
import { Resend } from 'resend';
import { resendToken } from '../constants';
import { ResendOptions } from '../interfaces';
import { getResendClient } from '../util';

export function createResendProvider(options: ResendOptions): Provider<Resend> {
  return {
    provide: resendToken,
    useValue: getResendClient(options),
  };
}

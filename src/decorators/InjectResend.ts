import { Inject } from '@nestjs/common';
import { resendToken } from '../constants';

export function InjectResend() {
  return Inject(resendToken);
}

import { Resend } from 'resend';
import { ResendOptions } from '../interfaces';

export function getResendClient({ apiKey }: ResendOptions): Resend {
  const resendClient = new Resend(apiKey);

  return resendClient;
}

import { Resend } from 'resend';
import { getResendClient } from './getResendClient';

describe('getResendeClient', () => {
  const apiKey = 'test';

  it('should return the resend client', () => {
    const resendClient = getResendClient({ apiKey });
    expect(resendClient).toBeInstanceOf(Resend);
  });
});

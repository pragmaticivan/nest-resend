import { Resend } from 'resend';
import { resendToken } from '../constants';
import { createResendProvider } from './createResendProvider';

describe('resendProvider', () => {
  const apiKey = 'test';

  describe('when called', () => {
    it('should use the correct token', () => {
      const provider = createResendProvider({ apiKey });
      expect(provider).toHaveProperty('provide', resendToken);
    });

    it('should provide a resend client', () => {
      const provider = createResendProvider({ apiKey });
      expect(provider).toHaveProperty('useValue');
      expect((provider as any).useValue).toBeInstanceOf(Resend);
    });
  });
});

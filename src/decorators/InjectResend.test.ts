import { Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Resend } from 'resend';
import { ResendModule } from '../ResendModule';
import { InjectResend } from './InjectResend';

describe('InjectResend', () => {
  const apiKey = 'test';
  let module: TestingModule;

  @Injectable()
  class TestService {
    public constructor(@InjectResend() public readonly resendClient: Resend) {}
  }

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [ResendModule.forRoot({ apiKey })],
      providers: [TestService],
    }).compile();
  });

  describe('when decorating a class constructor parameter', () => {
    it('should inject the resend client', () => {
      const testService = module.get(TestService);
      expect(testService).toHaveProperty('resendClient');
      expect(testService.resendClient).toBeInstanceOf(Resend);
    });
  });
});

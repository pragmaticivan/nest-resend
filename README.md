![nest-resend](https://github.com/pragmaticivan/nest-resend/assets/301291/3018c210-3e74-41cd-93a2-891e313c7dbe)

## 🐕 About

`nest-resend` implements a module, `ResendModule`, which when imported into
your nestjs project provides a Resend client to any class that injects it. This
lets Resend be worked into your dependency injection workflow without having to
do any extra work outside of the initial setup.

## 🤖 Installation

```bash
npm install --save nest-resend
```

## 🎇 Getting Started

The simplest way to use `nest-resend` is to use `ResendModule.forRoot`

```typescript
import { Module } from '@nestjs-common';
import { ResendModule } from 'nest-resend';

@Module({
  imports: [
    ResendModule.forRoot({
      apiKey: 're_secret_key'
    }),
  ],
})
export class AppModule {}
```

You can then inject the Resend client into any of your injectables by using a
custom decorator

```typescript
import { Injectable } from '@nestjs/common';
import { InjectResend } from 'nest-resend';
import { Resend } from 'resend';

@Injectable()
export class AppService {
  public constructor(@InjectResend() private readonly resendClient: Resend) {}

  sendEmail() {
    return this.resendClient.emails.send({
      from: 'you@nestjs.com',
      to: 'user@nestjs.com',
      subject: 'Howdy!',
      html: '<strong>YAY!</strong>',
    });
  }
}
```

Asynchronous setup is also supported

```typescript
import { Module } from '@nestjs-common';
import { ResendModule } from 'nest-resend';

@Module({
  imports: [
    ResendModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        apiKey: configService.get('resend_key')
      }),
    }),
  ],
})
export class AppModule {}
```

## 🥷 Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request


## 👏 Acknowledgements

- [nestjs](https://nestjs.com)
- [nestjs-otel](https://github.com/pragmaticivan/nestjs-otel)
- [nestjs-stripe](https://github.com/dhaspden/nestjs-stripe)

## 📝 License

The code is available under the [Apache 2 license](https://github.com/pragmaticivan/nestjs-resend/blob/main/LICENSE).

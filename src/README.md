<p align="center">
  <h3 align="center">
    nestjs-resend
  </h3>

  <p align="center">
    Injectable Resend client for your nestjs projects
  </p>
</p>

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [About](#about)
- [Installation](#installation)
- [Getting Started](#getting-started)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## About

`nestjs-resend` implements a module, `ResendModule`, which when imported into
your nestjs project provides a Resend client to any class that injects it. This
lets Resend be worked into your dependency injection workflow without having to
do any extra work outside of the initial setup.

## Installation

```bash
npm install --save nestjs-resend
```

## Getting Started

The simplest way to use `nestjs-resend` is to use `ResendModule.forRoot`

```typescript
import { Module } from '@nestjs-common';
import { ResendModule } from 'nestjs-resend';

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
import { InjectResend } from 'nestjs-resend';
import { Resend } from 'resend';

@Injectable()
export class AppService {
  public constructor(@InjectResend() private readonly resendClient: Resend) {}
}
```

Asynchronous setup is also supported

```typescript
import { Module } from '@nestjs-common';
import { ResendModule } from 'nestjs-resend';

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

## Contributing

I would greatly appreciate any contributions to make this project better. Please
make sure to follow the below guidelines before getting your hands dirty.

1. Fork the repository
2. Create your branch (`git checkout -b my-branch`)
3. Commit any changes to your branch
4. Push your changes to your remote branch
5. Open a pull request

## License

Distributed under the APACHE2 License. See `LICENSE` for more information.

## Acknowledgements

- [nestjs](https://nestjs.com)
- [nestjs-otel](https://github.com/pragmaticivan/nestjs-otel)
- [nestjs-stripe](https://github.com/dhaspden/nestjs-stripe)

Copyright &copy; 2022 Ivan Santos
import { Module, forwardRef } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartModule } from './modules/cart.module';
import { ShoppingModule } from './modules/shopping.module';
import { UsersModule } from './modules/users.module';
import { ShoppingRequestModule } from './modules/shopping-request.module';
import { ProductModule } from './modules/product.module';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerModule } from '@nestjs/throttler';
import { AddressModule } from './modules/address.module';
import { WalletsModule } from './modules/wallet.module';
import { CardsModule } from './modules/card.module';
import { ItemModule } from './modules/item.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { PugAdapter } from '@nestjs-modules/mailer/dist/adapters/pug.adapter';
import { AuthModule } from './modules/auth.module';
import { CategoryModule } from './modules/category.module';

@Module({
  imports: [CartModule, ProductModule, ShoppingModule, UsersModule, ShoppingRequestModule, AddressModule,
    WalletsModule, CardsModule, ItemModule, AuthModule, CategoryModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: "localhost",
      port: Number("3306"),
      username: "root",
      password: "Thi25080406?",
      database: "Ifarma",
      entities: ["entities/*.ts"],
      synchronize: process.env.ENV === 'development',
    }),
    ConfigModule.forRoot({
      envFilePath: process.env.ENV === 'test' ? '.env.test' : '.env',
    }),
    forwardRef(() => UsersModule),
    forwardRef(() => AuthModule),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
          user: 'greg.pfannerstill@ethereal.email',
          pass: '8ckAh78whHeYWm2YPd'
        }
      },
      defaults: {
        from: '"thiago-teste" <greg.pfannerstill@ethereal.email>',
      },
      template: {
        dir: __dirname + '/templates',
        adapter: new PugAdapter(),
        options: {
          strict: true,
        }
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
  exports: [AppService]
})
export class AppModule { }

import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from 'src/controllers/users.controller';
import { UserEntity } from 'src/entities/user.entity';
import { UsersService } from 'src/services/users.service';
import { CartModule } from './cart.module';
import { CartEntity } from 'src/entities/cart.entity';
import { AuthModule } from './auth.module';


@Module({
  imports: [
    forwardRef(() => AuthModule),
    TypeOrmModule.forFeature([UserEntity])
  ],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService],
})
export class UsersModule {}

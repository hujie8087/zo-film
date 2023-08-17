import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from 'libs/lib';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { LocalStrategyUser } from './strategies/local.strategy';
import { JwtStrategyUser } from './strategies/jwt.strategy';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'userjwt' }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '365d' },
    }),
    UserModule,
  ],
  providers: [AuthService, LocalStrategyUser, JwtStrategyUser],
  exports: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}

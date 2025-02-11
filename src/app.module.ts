import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { NotificationModule } from './notification/notification.module';
import { RedisModule } from './redis/redis.module';

@Module({
  imports: [PrismaModule, NotificationModule, RedisModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

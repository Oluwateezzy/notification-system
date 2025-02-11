import { Injectable } from '@nestjs/common';
import * as Redis from 'ioredis';

@Injectable()
export class RedisService {
  private readonly redis: Redis.Redis;

  constructor() {
    this.redis = new Redis.default();
  }

  getClient(): Redis.Redis {
    return this.redis;
  }

  async publish(channel: string, message: string) {
    await this.redis.publish(channel, message);
  }
  async subscribe(channel: string, callback: (message: string) => void) {
    const subscriber = new Redis.default();
    subscriber.subscribe(channel);
    subscriber.on('message', (chan, message) => {
      if (channel === chan) {
        callback(message);
      }
    });
  }
}

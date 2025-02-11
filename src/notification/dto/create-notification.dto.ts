import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

export class CreateNotificationDto {
  @IsString()
  @IsNotEmpty()
  userId: string;

  @IsEnum(['email', 'sms', 'push', 'in-app'])
  type: string;

  @IsString()
  @IsNotEmpty()
  message: string;
}

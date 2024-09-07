import { IsNumber, IsString, IsUrl, Max, Min } from 'class-validator';

export class EnvironmentVariables {
  @IsString()
  REDIS_HOST: string;

  @IsNumber()
  @Min(0)
  @Max(65535)
  REDIS_PORT: number;
}

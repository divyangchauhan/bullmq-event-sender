import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class AppService {
  constructor(@InjectQueue('datastream') private datastreamQueue: Queue) {}

  getHello(): string {
    return 'Hello World!';
  }

  sendBullMqEvent(event): void {
    console.log('Sending event');
    this.datastreamQueue.add('event', event);
    console.log('Event sent');
  }
}

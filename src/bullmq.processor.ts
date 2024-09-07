import { InjectQueue, Processor, WorkerHost } from '@nestjs/bullmq';
import { Injectable, Logger } from '@nestjs/common';
import { Job, Queue } from 'bullmq';

@Injectable()
@Processor('datastream')
export class CourtV2JurorDrawNotificationService extends WorkerHost {
  private readonly logger = new Logger(
    CourtV2JurorDrawNotificationService.name,
  );

  async process(job: Job): Promise<any> {
    console.log('Processing JurorDraw event');
    console.log(job.data);
  }
}

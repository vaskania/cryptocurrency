import { Controller, Sse } from '@nestjs/common';
import { AppService } from './crypto.service';
import { timer, lastValueFrom, Observable, switchMap, map } from 'rxjs';
import { IMessageEvent } from './interface/IMessageEvent';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Sse('sse')
  sse(): Observable<IMessageEvent> {
    return timer(0, 50000).pipe(
      switchMap(async () => {
        const data = await lastValueFrom(this.appService.getData());

        return { data };
      }),
    );
  }
}

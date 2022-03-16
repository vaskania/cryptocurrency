import { Controller, Sse } from '@nestjs/common';
import { CryptoService } from './crypto.service';
import { timer, lastValueFrom, Observable, switchMap, map } from 'rxjs';
import { IMessageEvent } from './interface/IMessageEvent';

@Controller()
export class CryptoController {
  constructor(private readonly cryptoService: CryptoService) {}

  @Sse('crypto')
  sse(): Observable<IMessageEvent> {
    return timer(0, 50000).pipe(
      switchMap(async () => {
        const data = await lastValueFrom(this.cryptoService.getData());

        return { data };
      }),
    );
  }
}

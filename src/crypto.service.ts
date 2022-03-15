import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map, Observable } from 'rxjs';
import { IMessageEvent } from './interface/IMessageEvent';

@Injectable()
export class AppService {
  constructor(private http: HttpService) {}

  url = 'https://api.coincap.io/v2/assets?limit=5';

  getData(): Observable<IMessageEvent[]> {
    return this.http
      .get(this.url)
      .pipe(
        map(({ data: { data } }) => data.map(this.filterCrypto.bind(this))),
      );
  }

  private filterCrypto(data: IMessageEvent) {
    const { id, rank, name, priceUsd } = data;
    return { id, rank, name, priceUsd };
  }
}

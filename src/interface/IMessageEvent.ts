export interface IMessageEvent {
  data: string | object;
  name?: string;
  id?: string;
  rank?: string;
  priceUsd?: string;
}

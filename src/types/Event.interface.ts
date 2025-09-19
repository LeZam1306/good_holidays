import type { StatusInterface } from "./Status.interface";

export interface EventInterface extends StatusInterface {
  _id: string;
  eventName: string;
  date: Date;
  promotor: [string, string];
}

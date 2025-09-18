export interface EventInfoInterface {
  creationDate: Date | string;
  description?: string;
  maxParticipant: number | null;
  location: string;
  participants: string[];
}

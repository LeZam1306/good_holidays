export interface InvitationInterface {
  invitations: {
    _id: string;
    event: {
      _id: string;
      eventName: string;
      date: Date;
      promotor: string;
      description: string;
      location: string;
    };
  }[];
}

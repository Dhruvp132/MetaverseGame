export type OutgoingMessage =
  | {
      type: 'space-joined';
      payload: {
        spawn: { x: number; y: number };
        userId: string;
        users: Array<{ userId: string; x: number; y: number }>;
      };
    }
  | {
      type: 'user-joined';
      payload: {
        userId: string;
        x: number;
        y: number;
      };
    }
  | {
      type: 'movement';
      payload: {
        userId: string;
        x: number;
        y: number;
      };
    }
  | {
      type: 'movement-rejected';
      payload: {
        x: number;
        y: number;
      };
    }
  | {
      type: 'user-left';
      payload: {
        userId: string;
      };
    }
  | {
      type: 'proximity-update';
      payload: {
        nearbyUsers: Array<{ userId: string; x: number; y: number }>;
      };
    };
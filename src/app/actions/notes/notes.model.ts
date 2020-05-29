export interface Note {
  id: number;
  deleted: boolean;
  Notes: string;
  ClassName: string;
  Date: string;
}

export interface Notes {
  notes: Array<Note>;
}

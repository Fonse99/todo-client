export interface TaskModel {
  id?: number;
  title: string;
  description: string;
  beforeTo: Date;
  state: 'complete' | 'pending' | 'expired';
}

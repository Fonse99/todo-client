export interface TaskModel {
  Id?: number;
  title: string;
  description: string;
  beforeTo: Date;
  state: 'COMPLETE' | 'PENDING';
  groupId: number;
  categoryId: number;
}

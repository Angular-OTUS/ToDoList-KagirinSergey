export type TFilterStatus = 'ToDo' | 'InProgress' | 'Done';
export interface IFilterStatus {
  title: string;
  column: TFilterStatus;
}

import { TFilterStatus } from "./filter-status.model";

export interface IFilterTask {
  id: number;
  title: string;
  status: 'null' | TFilterStatus;
  selected: boolean;
}

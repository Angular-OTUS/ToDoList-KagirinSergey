import { TFilterStatus } from "./filter-status.model";

export interface IFilterTask {
  title: string,
  status: 'null' | TFilterStatus,
  selected: boolean
}

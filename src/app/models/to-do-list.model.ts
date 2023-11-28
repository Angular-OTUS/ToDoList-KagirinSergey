import { TFilterStatus } from "./filter-status.model";

export interface IToDoItem {
  id: number,
  text: string,
  description: string,
  status: TFilterStatus
}

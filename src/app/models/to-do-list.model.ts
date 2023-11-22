import { TFilterStatus } from "./filter-status.model";

export interface IToDoItem {
  id: number,
  text: string,
  description: string,
  status: TFilterStatus
}

export type TToast = "create" | "info" | "delete";

export interface IToast extends Omit<IToDoItem, 'id' | 'status'> {
  text: string,
  description: string,
  type: TToast;
}

export type TypeAction = "delete" | "update" | "selected" | "change";

export interface IToDoItem {
  id: number,
  text: string,
  description: string
}

export type TypeAction = "del" | "update" | "selected";

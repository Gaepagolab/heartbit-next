export type ValueType = number | string;

export type AtLeast<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export interface AbstractType {
  id: number;
  createdAt?: Date;
  updatedAt?: Date;
}

import { ColumnsType } from 'antd/es/table';
export interface PageType {
  pageNo: number;
  pageSize: number;
}

// export type type1 = ColumnsType<T> & 

// export type ColTypeWithOpt<T = ColumnsType> = {
//   // [P in keyof T]: T[P]; 
//   readonly [P in keyof T]: T[P],
//   optCol: React.FC | undefined,
// }
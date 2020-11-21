export enum SchoolType {
  ELEMENTARY,
  MIDDLE,
  HIGH,
  OTHER,
}

export interface ApiSearch {
  status: number;
  total?: number;
  result?: ApiSearchItem[];
}

export interface ApiSearchItem {
  id: string;
  type: SchoolType;
  name: string;
  tel: string;
  address: string;
  homepage: string;
}

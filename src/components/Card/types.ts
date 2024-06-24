// types.ts
export interface Item {
    id: number;
    name: string;
    designation: string;
    workTime: string;
    image: any;
  }
  
  export interface Payload {
    item: Item;
  }
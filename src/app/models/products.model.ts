export interface Product {
    id:number;
    type:string;
    price: number;
}
export const products = [
    {
      id: 1,
      type: 'Laptop',
      price: 25.99
    },
    {
      id: 2,
      type: 'Mouse',
      price: 9.99
    },
    {
      id: 3,
      type: 'Vga-Cable',
      price: 2.99
    }
  ]
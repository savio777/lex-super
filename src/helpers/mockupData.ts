export interface IProduct {
  title: string;
  note: number;
  avatar: string;
  value: number;
  previousValue: number;
  numberStores: number;
  categorie: "informática" | "televisão" | "celular" | "notebook" | "PC";
}

export const listCategories = [
  "informática",
  "televisão",
  "celular",
  "notebook",
  "PC",
];

export const DATA: IProduct[] = [
  {
    avatar: "../../assets/products/celular3.jpg",
    categorie: "celular",
    note: 4,
    numberStores: 6,
    previousValue: 1201.21,
    title: "Celular teste",
    value: 1011.14,
  },
  {
    avatar: "../../assets/products/celular3.jpg",
    categorie: "celular",
    note: 4,
    numberStores: 6,
    previousValue: 1201.21,
    title: "Celular teste",
    value: 1011.14,
  },
  {
    avatar: "../../assets/products/celular3.jpg",
    categorie: "celular",
    note: 4,
    numberStores: 6,
    previousValue: 1201.21,
    title: "Celular teste",
    value: 1011.14,
  },
  {
    avatar: "../../assets/products/celular3.jpg",
    categorie: "celular",
    note: 4,
    numberStores: 6,
    previousValue: 1201.21,
    title: "Celular teste",
    value: 1011.14,
  },
];

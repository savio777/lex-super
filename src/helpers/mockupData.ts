export interface IProduct {
  title: string;
  note: number;
  avatar: string;
  value: number;
  previousValue: number;
  numberStores: number;
  categorie: "informática" | "televisão" | "celular" | "notebook" | "PC";
}

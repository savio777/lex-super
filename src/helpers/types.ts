export interface ICompany {
  name: string;
  type: "alimentício" | "etc" | "informática";
  // logoImage: string;
  logoImage: string;
}

export const listCategoriesCompanies = ["alimentício", "etc", "informática"];

export interface IProduct {
  title: string;
  note: number;
  avatar: string;
  value: number;
  previousValue: number;
  numberStores: number;
  categorie: "informática" | "feijão" | "arroz" | "cerveja" | "leite";
  company: string;
}

export const listCategories = ["feijão", "arroz", "cerveja", "leite"];

export const mockupDATA: IProduct[] = [
  {
    avatar:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    categorie: "arroz",
    note: 4,
    numberStores: 6,
    previousValue: 5.56,
    title: "Arroz tio João",
    value: 3.56,
    company: "Carvalho",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    categorie: "arroz",
    note: 4,
    numberStores: 6,
    previousValue: 5.56,
    title: "Arroz tio João",
    value: 3.56,
    company: "Carvalho",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    categorie: "arroz",
    note: 4,
    numberStores: 6,
    previousValue: 5.56,
    title: "Arroz tio João",
    value: 3.56,
    company: "Carvalho",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    categorie: "arroz",
    note: 4,
    numberStores: 6,
    previousValue: 5.56,
    title: "Arroz tio João",
    value: 3.56,
    company: "Carvalho",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    categorie: "leite",
    note: 3,
    numberStores: 4,
    previousValue: 6.99,
    title: "leite bom",
    value: 6.21,
    company: "Mateus",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    categorie: "leite",
    note: 3,
    numberStores: 4,
    previousValue: 6.99,
    title: "leite bom",
    value: 6.21,
    company: "Mateus",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    categorie: "leite",
    note: 3,
    numberStores: 4,
    previousValue: 6.99,
    title: "leite bom",
    value: 6.21,
    company: "Mateus",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    categorie: "leite",
    note: 3,
    numberStores: 4,
    previousValue: 6.99,
    title: "leite bom",
    value: 6.21,
    company: "Mateus",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    categorie: "leite",
    note: 3,
    numberStores: 4,
    previousValue: 6.99,
    title: "leite bom",
    value: 6.21,
    company: "Mateus",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80",
    categorie: "leite",
    note: 3,
    numberStores: 4,
    previousValue: 6.99,
    title: "leite bom",
    value: 6.21,
    company: "Mateus",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623274545361-63e9d95e4643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    categorie: "cerveja",
    note: 5,
    numberStores: 10,
    previousValue: 4.11,
    value: 2.99,
    title: "Brahma",
    company: "Extra",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623274545361-63e9d95e4643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    categorie: "cerveja",
    note: 5,
    numberStores: 10,
    previousValue: 4.11,
    value: 2.99,
    title: "Brahma",
    company: "Extra",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623274545361-63e9d95e4643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    categorie: "cerveja",
    note: 5,
    numberStores: 10,
    previousValue: 4.11,
    value: 2.99,
    title: "Brahma",
    company: "Extra",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623274545361-63e9d95e4643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    categorie: "cerveja",
    note: 5,
    numberStores: 10,
    previousValue: 4.11,
    value: 2.99,
    title: "Brahma",
    company: "Extra",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623274545361-63e9d95e4643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    categorie: "cerveja",
    note: 5,
    numberStores: 10,
    previousValue: 4.11,
    value: 2.99,
    title: "Brahma",
    company: "Extra",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623274545361-63e9d95e4643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    categorie: "cerveja",
    note: 5,
    numberStores: 10,
    previousValue: 4.11,
    value: 2.99,
    title: "Brahma",
    company: "Extra",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623274545361-63e9d95e4643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    categorie: "cerveja",
    note: 5,
    numberStores: 10,
    previousValue: 4.11,
    value: 2.99,
    title: "Brahma",
    company: "Extra",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623274545361-63e9d95e4643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    categorie: "cerveja",
    note: 5,
    numberStores: 10,
    previousValue: 4.11,
    value: 2.99,
    title: "Brahma",
    company: "Extra",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1623274545361-63e9d95e4643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    categorie: "cerveja",
    note: 5,
    numberStores: 10,
    previousValue: 4.11,
    value: 2.99,
    title: "Brahma",
    company: "Extra",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    categorie: "feijão",
    note: 2,
    numberStores: 6,
    previousValue: 4.12,
    value: 2.21,
    title: "Feijão bom",
    company: "Carvalho",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    categorie: "feijão",
    note: 2,
    numberStores: 6,
    previousValue: 4.12,
    value: 2.21,
    title: "Feijão bom",
    company: "Carvalho",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    categorie: "feijão",
    note: 2,
    numberStores: 6,
    previousValue: 4.12,
    value: 2.21,
    title: "Feijão bom",
    company: "Carvalho",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    categorie: "feijão",
    note: 2,
    numberStores: 6,
    previousValue: 4.12,
    value: 2.21,
    title: "Feijão bom",
    company: "Carvalho",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    categorie: "feijão",
    note: 2,
    numberStores: 6,
    previousValue: 4.12,
    value: 2.21,
    title: "Feijão bom",
    company: "Carvalho",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    categorie: "feijão",
    note: 2,
    numberStores: 6,
    previousValue: 4.12,
    value: 2.21,
    title: "Feijão bom",
    company: "Carvalho",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    categorie: "feijão",
    note: 2,
    numberStores: 6,
    previousValue: 4.12,
    value: 2.21,
    title: "Feijão bom",
    company: "Carvalho",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1564894809611-1742fc40ed80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    categorie: "feijão",
    note: 2,
    numberStores: 6,
    previousValue: 4.12,
    value: 2.21,
    title: "Feijão bom",
    company: "Carvalho",
  },
];

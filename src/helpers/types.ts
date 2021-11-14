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
  categorie: "informática" | "televisão" | "celular" | "notebook" | "PC";
}

export const listCategories = ["televisão", "celular", "notebook", "PC"];

export const mockupDATA: IProduct[] = [
  {
    avatar:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    categorie: "celular",
    note: 4,
    numberStores: 6,
    previousValue: 1201.21,
    title: "Celular teste",
    value: 1011.14,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    categorie: "celular",
    note: 4,
    numberStores: 6,
    previousValue: 1201.21,
    title: "Celular teste",
    value: 1011.14,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    categorie: "celular",
    note: 4,
    numberStores: 6,
    previousValue: 1201.21,
    title: "Celular teste",
    value: 1011.14,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80",
    categorie: "celular",
    note: 4,
    numberStores: 6,
    previousValue: 1201.21,
    title: "Celular teste",
    value: 1011.14,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    categorie: "PC",
    note: 3,
    numberStores: 4,
    previousValue: 697.11,
    title: "PC gamer",
    value: 521.62,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    categorie: "PC",
    note: 3,
    numberStores: 4,
    previousValue: 697.11,
    title: "PC gamer",
    value: 521.62,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    categorie: "PC",
    note: 3,
    numberStores: 4,
    previousValue: 697.11,
    title: "PC gamer",
    value: 521.62,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    categorie: "PC",
    note: 3,
    numberStores: 4,
    previousValue: 697.11,
    title: "PC gamer",
    value: 521.62,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    categorie: "PC",
    note: 3,
    numberStores: 4,
    previousValue: 697.11,
    title: "PC gamer",
    value: 521.62,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80",
    categorie: "PC",
    note: 3,
    numberStores: 4,
    previousValue: 697.11,
    title: "PC gamer",
    value: 521.62,
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
    categorie: "notebook",
    note: 5,
    numberStores: 10,
    previousValue: 1599.99,
    value: 1299.99,
    title: "MacBook",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
    categorie: "notebook",
    note: 5,
    numberStores: 10,
    previousValue: 1599.99,
    value: 1299.99,
    title: "MacBook",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
    categorie: "notebook",
    note: 5,
    numberStores: 10,
    previousValue: 1599.99,
    value: 1299.99,
    title: "MacBook",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
    categorie: "notebook",
    note: 5,
    numberStores: 10,
    previousValue: 1599.99,
    value: 1299.99,
    title: "MacBook",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
    categorie: "notebook",
    note: 5,
    numberStores: 10,
    previousValue: 1599.99,
    value: 1299.99,
    title: "MacBook",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
    categorie: "notebook",
    note: 5,
    numberStores: 10,
    previousValue: 1599.99,
    value: 1299.99,
    title: "MacBook",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
    categorie: "notebook",
    note: 5,
    numberStores: 10,
    previousValue: 1599.99,
    value: 1299.99,
    title: "MacBook",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
    categorie: "notebook",
    note: 5,
    numberStores: 10,
    previousValue: 1599.99,
    value: 1299.99,
    title: "MacBook",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1471&q=80",
    categorie: "notebook",
    note: 5,
    numberStores: 10,
    previousValue: 1599.99,
    value: 1299.99,
    title: "MacBook",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80",
    categorie: "televisão",
    note: 2,
    numberStores: 6,
    previousValue: 1799.99,
    value: 1650.99,
    title: "TV Sony",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80",
    categorie: "televisão",
    note: 2,
    numberStores: 6,
    previousValue: 1799.99,
    value: 1650.99,
    title: "TV Sony",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80",
    categorie: "televisão",
    note: 2,
    numberStores: 6,
    previousValue: 1799.99,
    value: 1650.99,
    title: "TV Sony",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80",
    categorie: "televisão",
    note: 2,
    numberStores: 6,
    previousValue: 1799.99,
    value: 1650.99,
    title: "TV Sony",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80",
    categorie: "televisão",
    note: 2,
    numberStores: 6,
    previousValue: 1799.99,
    value: 1650.99,
    title: "TV Sony",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80",
    categorie: "televisão",
    note: 2,
    numberStores: 6,
    previousValue: 1799.99,
    value: 1650.99,
    title: "TV Sony",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80",
    categorie: "televisão",
    note: 2,
    numberStores: 6,
    previousValue: 1799.99,
    value: 1650.99,
    title: "TV Sony",
  },
  {
    avatar:
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1633&q=80",
    categorie: "televisão",
    note: 2,
    numberStores: 6,
    previousValue: 1799.99,
    value: 1650.99,
    title: "TV Sony",
  },
];

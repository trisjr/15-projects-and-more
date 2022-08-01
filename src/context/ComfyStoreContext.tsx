import React, { createContext } from "react";

export const ComfyStoreContext = createContext<{
  products: Array<{
    id: string;
    fields: {
      colors: Array<string>;
      company: string;
      featured: boolean;
      image: Array<any>;
      name: string;
      price: number;
    };
  }>;
  bought: Array<{
    product: Array<{
      id: string;
      fields: {
        colors: Array<string>;
        company: string;
        featured: boolean;
        image: Array<any>;
        name: string;
        price: number;
      };
    }>;
    amount: number;
  }>;
}>({
  products: [],
  bought: [],
});

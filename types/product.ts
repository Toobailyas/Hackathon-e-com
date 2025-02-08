export interface Product {
    _id: string;
    name: string; 
    slug: {
      current: string;
    };
    price: number;
    description: string;
    quantity: number; 
    category: {
      _id: string;
      title: string;
    };
    discountPercentage?: number; 
    image?: {
      asset: {
        _ref: string;
        _type: "image";
      };
    };
    tags: string[];
    features?: string[];
    dimensions?: {
      height: string;
      width: string;
      depth: string;
    };
  }
  
export type RootStackParamList = {
  Drawer: undefined;
  Profile: undefined;
  Details: undefined;
  Verification: {mobile: string};
  Login: undefined;
  Mytab: undefined;
  LocationAccess: undefined;
};

// -------------------- CATEGORY --------------------
export type Category = {
  id: string;
  name: string;
  image: {
    url: string;
    public_id: string;
  };
  description?: string | null;
  createdAt: Date;
  updatedAt: Date;

  // subCategories?: SubCategory[];
  // products?: Product[];
};

// -------------------- SUBCATEGORY --------------------
export type SubCategory = {
  id: string;
  name: string;
  image: {
    secure_url: string;
    public_id: string;
  };
  description?: string | null;
  categoryId: string;
  createdAt: Date;
  updatedAt: Date;

  category?: Category;
  products?: Product[];
};

// -------------------- PRODUCT --------------------
export type Product = {
  id: string;
  name: string;
  description?: string | null;
  priceBeforeDiscount: number; 
  priceAfterDiscount: number;
  categoryId: string;
  subCategoryId: string;
  weight: number;
  pieces: string; 
  discount: number;
  priceToVendor: number;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
   
  image: ProductImage[];
};

// -------------------- PRODUCT IMAGE --------------------
export type ProductImage = {
  id: string;
  image: {
    secure_url: string;
    public_id: string;
  };
  productId: string;
  createdAt: Date;
  updatedAt: Date;
};

// -------------------- CART --------------------
export type Cart = {
  id: string;
  userId: string;
  productId: string;
  quantity: number;
  createdAt: Date;
  updatedAt: Date;
};

// -------------------- USER (not in your schema, but required for Cart) --------------------
export type User = {
  id: string;
  name: string;
  email: string;
  mobile: string;
  longitude: string;
  latitude: string;
  // add other fields from your real User model...
  createdAt: Date;
  updatedAt: Date;

  cart?: Cart[];
};

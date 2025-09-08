import {create} from 'zustand';
import {Product} from '../types/types';

export type CartItem = {
  product: Product;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartItemCount: () => number;
  cartSubtotal: () => number;
};

export const useCartStore = create<CartState>((set, get) => ({
  cart: [],
  addToCart: product =>
    set(state => {
      const existing = state.cart.find(i => i.product.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map(i =>
            i.product.id === product.id ? {...i, quantity: i.quantity + 1} : i,
          ),
        };
      }
      return {cart: [...state.cart, {product, quantity: 1}]};
    }),
  removeFromCart: productId =>
    set(state => ({
      cart: state.cart.filter(i => i.product.id !== productId),
    })),

  updateQuantity: (productId, quantity) =>
    set(state => ({
      cart: state.cart.map(i =>
        i.product.id === productId ? {...i, quantity} : i,
      ),
    })),

  clearCart: () => set({cart: []}),
  cartItemCount: () => get().cart.reduce((sum, item) => sum + item.quantity, 0),

  cartSubtotal: () =>
    get().cart.reduce(
      (sum, item) => sum + item.product.priceAfterDiscount * item.quantity,
      0,
    ),
}));

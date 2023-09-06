import { Product } from './Product';

export class CartManager {
  private readonly cartKey = 'cart';

  getCart(): Product[] {
    if (typeof localStorage !== 'undefined') {
      const cartData = localStorage.getItem(this.cartKey);
      console.log(cartData ? JSON.parse(cartData) : [])
      return cartData ? JSON.parse(cartData) : [];
    } else {
      // Trate o caso em que o localStorage não está definido, por exemplo, retornando um valor padrão vazio.
      return [];
    }
  }

  updateCart(cart: Product[]): void {
    if (typeof localStorage !== 'undefined') {
      console.log(this.cartKey, JSON.stringify(cart))
      localStorage.setItem(this.cartKey, JSON.stringify(cart));
    }
  }

  addToCart(item: Product): void {
    if (typeof localStorage !== 'undefined') {
      const cart = this.getCart();
      console.log(cart)
      cart.push(item);
      this.updateCart(cart);
      console.log(cart)
    }
  }

  removeFromCart(item: Product): void {
    if (typeof localStorage !== 'undefined') {
      const cart = this.getCart();
      const updatedCart = cart.filter((product) => product.id !== item.id);
      this.updateCart(updatedCart);
    }
  }

  clearCart(): void {
    if (typeof localStorage !== 'undefined') {
    localStorage.removeItem(this.cartKey);
    }
  }
}

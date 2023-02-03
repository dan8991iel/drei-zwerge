import type { Product } from "./Product";

export class CartItem {
  product: Product;
  count: number;

  constructor(product: Product, count: number) {
    this.product = product;
    this.count = count;
  }

  get totalPrice(): number {
    return this.product.price * this.count;
  }
}

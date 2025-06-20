import { Component, EventEmitter, inject, Input, input, Output, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { ModalComponent } from "../../../../compoments/modal/modal.component";
import { RatingComponent } from "../../../../compoments/rating/rating.component";
import { Router } from '@angular/router';
import { Product } from '../../../../models/product.model';
import { environment } from '../../../../../environments/environment';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, RatingComponent],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss'
})
export class ProductCardComponent {
  constructor(
    private router: Router,
    // private productModel: Product
  ) {}
  showModal: boolean = false;
  imageURL: string = environment.apiUrl;
  @Input() product:Product = {
    _id: '',
    name: '',
    description: '',
    brand: '',
    subcategory: '',
    base_price: 0,
    tags: [],
    dietary_needs: [],
    image_urls: [],
    variant_ids: []
  }
  
  @Output() addToCart = new EventEmitter<void>();
  @Output() addToWishlist = new EventEmitter<void>();
  @Output() quickView = new EventEmitter<void>();
  
  // cartService = inject(CartService)
  openModal() {
    this.showModal = true;
  }

  // Method to close the modal
  closeModal() {
    this.showModal = false;
  }
  
  onAddToCart() {
    this.addToCart.emit();
  }

  onAddToWishlist() {
    this.addToWishlist.emit();
  }

  onQuickView() {
    this.quickView.emit();
  }

  viewProduct(id: string) {
    this.router.navigate([`/product/product-detail/${id}`]);
  }
  
}

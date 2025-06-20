import { Component } from '@angular/core';
import { HeroSliderComponent } from './component/hero-slider/hero-slider.component';
import { BannerSectionComponent } from './component/banner-section/banner-section.component';
import { BrandLogosComponent } from './component/brand-logos/brand-logos.component';
import { ShopCardsComponent } from './component/shop-cards/shop-cards.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { ContactSectionComponent } from './component/contact-section/contact-section.component';
import { HeaderComponent } from "../../compoments/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroSliderComponent,
    BannerSectionComponent,
    BrandLogosComponent,
    ShopCardsComponent,
    TestimonialComponent,
    ContactSectionComponent,
    HeaderComponent
],
  templateUrl: './home.component.html'
})
export class HomeComponent {
  slides = [
    {
      image: 'uploads/slider/slider1.png',
      offer: 'Big Offer 50% off',
      title: 'New Collection Summer Sale',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      ctaText: 'Show Collection',
      ctaLink: '/product'
    },
    {
      image: 'uploads/slider/slider2.png',
      offer: 'Big Offer 50% off',
      title: 'Winter Collection Sale',
      description: 'Explore our latest winter styles.',
      ctaText: 'Shop Now',
      ctaLink: '/product'
    },
    {
      image: 'uploads/slider/slider3.png',
      offer: 'Big Offer 50% off',
      title: 'Spring Collection Sale',
      description: 'Fresh styles for the new season.',
      ctaText: 'Discover Now',
      ctaLink: '/product'
    }
  ];

  categoryBanners = [
    { image: 'uploads/banner/banner7.png', title: 'NEW <br> ACCESSORIES', link: '/product', alt: 'New Accessories Banner' },
    { image: 'uploads/banner/banner8.png', title: 'NEW <br> ACCESSORIES', link: '/product', alt: 'New Accessories Banner', maxHeight: true },
    { image: 'uploads/banner/banner9.png', title: 'TRENDING <br> NOW', link: '/product', alt: 'Trending Now Banner' },
    { image: 'uploads/banner/banner10.png', title: 'TOP <br> SELLER', link: '/product', alt: 'Top Seller Banner', maxHeight: true },
    { image: 'uploads/banner/banner11.png', title: 'TOP <br> DECORATION', link: '/product', alt: 'Top Decoration Banner', position: 'right' }
  ];

  discountBanners = [
    { image: 'uploads/banner/banner12.png', link: '/product', alt: 'Summer Collection Banner 1' },
    { image: 'uploads/banner/banner13.png', link: '/product', alt: 'Summer Collection Banner 2' }
  ];

  discountContent = {
    subtitle: 'Summer Collection 2025',
    title: 'Get 35% Discount For <br> Couple Special',
    cta: 'SHOP NOW',
    ctaLink: '/product'
  };

  brandLogos = [
    { src: 'uploads/banner/brand-logo1.png', alt: 'Brand Logo 1' },
    { src: 'uploads/banner/brand-logo2.png', alt: 'Brand Logo 2' },
    { src: 'uploads/banner/brand-logo3.png', alt: 'Brand Logo 3' },
    { src: 'uploads/banner/brand-logo4.png', alt: 'Brand Logo 4' },
    { src: 'uploads/banner/brand-logo5.png', alt: 'Brand Logo 5' }
  ];

  shopCardContent = {
    subtitle: 'GIFT CARDS',
    title: 'Support your <br> neighborhood',
    description: 'We believe that local businesses are an integral <br> part of a neighborhood\'s character. Help keep <br> local by buying a gift card!',
    cta: 'Shop gift cards',
    ctaLink: '/shop'
  };

  shopCardBanners = [
    { image: 'uploads/banner/banner16.png', link: '/shop', alt: 'Gift Card Banner 1' },
    { image: 'uploads/banner/banner17.png', link: '/shop', alt: 'Gift Card Banner 2' }
  ];

  shopCardVideoUrl = 'https://vimeo.com/115041822';

  testimonials = [
    {
      image: 'images/testimonial-thumb1.png',
      name: 'Richard Anderson',
      title: 'Nevada, USA',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: 'images/testimonial-thumb2.png',
      name: 'Nike Mardson',
      title: 'Fashion',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
      image: 'images/testimonial-thumb3.png',
      name: 'Sarah Johnson',
      title: 'Fashion',
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
  ];
}
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
product: Product[];
constructor() {
  this.product = [
    {
    id: 123,
    imageUrl: 'https://m.media-amazon.com/images/I/71gK7VlDnGL._AC_UL320_.jpg',
    price: 25.99,
    title: 'VicTsing MM057 2.4G Wireless Mouse Portable Mobile Optical Mouse with USB Receiver, 5 Adjustable DPI Levels, 6 Buttons',
    isAddToCart: false
    },
    {
      id: 234,
      imageUrl: 'https://m.media-amazon.com/images/I/81Cmetw9jTL._AC_UL320_.jpg',
      price: 459.99,
      title: 'Samsung Electronics EVO Select 256GB microSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter',
      isAddToCart: false
    },
    {
      id: 334,
      imageUrl: 'https://m.media-amazon.com/images/I/81psK7kku+L._AC_UL320_.jpg',
      price: 56.99,
      title: 'Ailun Glass Screen Protector for iPhone 11/iPhone XR 6.1 Inch 3 Pack Tempered',
      isAddToCart: false
    },
    {
      id: 267,
      imageUrl: 'https://m.media-amazon.com/images/I/51NaTEP5xbL._AC_UL320_.jpg',
      price: 12.99,
      title: 'AUKEY FHD Webcam, 1080p Live Streaming Camera with Stereo',
      isAddToCart: false
    },
    {
      id: 876,
      imageUrl: 'https://m.media-amazon.com/images/I/61pBvlYVPxL._AC_UL320_.jpg',
      price: 213.99,
      title: 'AmazonBasics High-Speed HDMI Cable',
      isAddToCart: false
    },
    {
      id: 454,
      imageUrl: 'https://m.media-amazon.com/images/I/71zNVVc9ZPL._AC_UL320_.jpg',
      price: 95.99,
      title: 'Mpow CH6S Kids Headphones with Microphone Over-Ear/On-Ear',
      isAddToCart: false
    },
    {
      id: 454,
      imageUrl: 'https://m.media-amazon.com/images/I/71zNVVc9ZPL._AC_UL320_.jpg',
      price: 95.99,
      title: 'Mpow CH6S Kids Headphones with Microphone Over-Ear/On-Ear',
      isAddToCart: false
    }
  ];
 }

}

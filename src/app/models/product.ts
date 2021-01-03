import { Input } from '@angular/core';



export class Product {
    id: number;
    price: number;
    title: string;
    imageUrl: string;
    isAddToCart?: boolean;
}

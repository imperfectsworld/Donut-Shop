import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { DonutComponent } from '../donut/donut.component';
import { DonutModel } from '../../models/donut-model';
import { DonutDetailsComponent } from '../donut-details/donut-details.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {


  constructor(private donutService:DonutService){ }

  getCart():DonutModel[]{
    return this.donutService.cart;
  }

  buy(){
    this.donutService.ResetCart();
  }


  getTotal():number{
    let total:number =  0;
   this.donutService.cart.forEach(i => total += 1); //each donut is $1
    return total;
//return this.donutService.cart.reduce((total, current) => total += 1, 0);
}
}
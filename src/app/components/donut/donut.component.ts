import { Component } from '@angular/core';
import { DonutModel } from '../../models/donut-model';
import { DonutService } from '../../services/donut.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-donut',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut.component.html',
  styleUrl: './donut.component.css'
})
export class DonutComponent {

  allDonut:DonutModel = {} as DonutModel; 

  constructor(private DonutService: DonutService){}

  ngOnInit(){
    this.callDonutApi();
  }

  callDonutApi(){
    this.DonutService.getDonut().subscribe((response:DonutModel) => {
      console.log(response);
      this.allDonut = response;})
  }

  
addToCart(i:DonutModel){
  this.DonutService.AddDonut(i);
}

}

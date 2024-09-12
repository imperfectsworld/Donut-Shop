import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DonutModel } from '../models/donut-model';
import { DonutDetailsComponent } from '../components/donut-details/donut-details.component';
import { DetailsModel } from '../models/details-model';

@Injectable({
  providedIn: 'root'
})
export class DonutService {

  constructor(private http: HttpClient) {}
  cart: DonutModel[] = [];

  getDonut():Observable<DonutModel>{
    return this.http.get<DonutModel>("https://grandcircusco.github.io/demo-apis/donuts.json")
  }

  getDonutDetails(index: number) : Observable<DetailsModel> {
    return this.http.get<DetailsModel>(`https://grandcircusco.github.io/demo-apis/donuts/${index}.json`);
  }

  AddDonut(i:DonutModel){
    this.cart.push(i);
  }
  ResetCart(){
    this.cart = [];
  }

  }


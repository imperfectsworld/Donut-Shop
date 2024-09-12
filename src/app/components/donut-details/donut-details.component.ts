import { Component } from '@angular/core';
import { DonutModel } from '../../models/donut-model';
import { ActivatedRoute } from '@angular/router';
import { DonutService } from '../../services/donut.service';
import { DetailsModel } from '../../models/details-model';

@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [],
  templateUrl: './donut-details.component.html',
  styleUrl: './donut-details.component.css'
})
export class DonutDetailsComponent {


  donutResult: DetailsModel = {} as DetailsModel;

  constructor(private donutService: DonutService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.activatedRoute.paramMap.subscribe((params) => {

      //id is the path parameter from app.routes.ts
      // doesnt have to be id but they have to match

      let id: number = Number(params.get("id"));
      //Number() is the same as int.parse in c#

      console.log(id);
      this.donutService.getDonutDetails(id+1).subscribe((response: DetailsModel) => {
      this.donutResult = response;
      });
    })
  }

}


import { Component } from '@angular/core';
import { RouterOutlet, RouterLink} from '@angular/router';
import { DonutComponent } from "./components/donut/donut.component";
import { DonutDetailsComponent } from './components/donut-details/donut-details.component';
import { CartComponent } from './components/cart/cart.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DonutComponent, RouterLink, DonutDetailsComponent, CartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DonutShop';
}

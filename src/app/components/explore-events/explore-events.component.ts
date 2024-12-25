import { CommonModule, Time } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HotProductComponent } from '../hot-product/hot-product.component';
import { ServicesComponent } from '../../pages/services/services.component';

@Component({
  selector: 'app-explore-events',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    HotProductComponent,
    ServicesComponent
  ],
  templateUrl: './explore-events.component.html',
  styleUrl: './explore-events.component.scss'
})
export class ExploreEventsComponent {
}

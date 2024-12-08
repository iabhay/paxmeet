import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  servicesData = [
    {
      icon:'zap',
      title:'Create Item',
      desc:`Success needs hard work. Don't listen to these 'get rich quick' schemes.`
    },
    {
      icon:'bookmark',
      title:'Collect',
      desc:`Success needs hard work. Don't listen to these 'get rich quick' schemes.`
    },
    {
      icon:'target',
      title:'Sell Item',
      desc:`Success needs hard work. Don't listen to these 'get rich quick' schemes.`
    },
  ]
}

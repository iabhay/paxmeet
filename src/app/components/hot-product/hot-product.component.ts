
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import AgentsData from '../../../data/agents.json'

import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-hot-product',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './hot-product.component.html',
  styleUrl: './hot-product.component.scss'
})
export class HotProductComponent {
  AgentsData = AgentsData;

  // ngAfterViewInit() {
  //   // Select all elements with data-bs-toggle="tooltip" and initialize them
  //   var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  //   var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  //     return new bootstrap.Tooltip(tooltipTriggerEl)
  //   })
  // }

}

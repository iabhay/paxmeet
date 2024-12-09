import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import AgentsData from '../../../data/agents.json'

@Component({
  selector: 'app-top-collection',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './top-collection.component.html',
  styleUrl: './top-collection.component.scss'
})
export class TopCollectionComponent {
  AgentsData = AgentsData
}

import { Component } from '@angular/core';
import { NavbarComponent } from '../../../components/navbar/navbar.component';
import { ScrollToTopComponent } from '../../../components/scroll-to-top/scroll-to-top.component';
import { FooterComponent } from '../../../components/footer/footer.component';

import AgentsData from '../../../../data/agents.json'
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-collection',
  standalone: true,
  imports: [
    NavbarComponent,
    ScrollToTopComponent,
    FooterComponent,
    RouterLink,
    CommonModule
  ],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.scss'
})
export class CollectionComponent {
  AgentsData = AgentsData;
}

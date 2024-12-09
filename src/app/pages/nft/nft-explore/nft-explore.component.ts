import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from '../../../components/navbar/navbar.component';

import AgentsData from '../../../../data/agents.json'
import { FooterComponent } from "../../../components/footer/footer.component";
import { ScrollToTopComponent } from "../../../components/scroll-to-top/scroll-to-top.component";
@Component({
  selector: 'app-nft-explore',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    ScrollToTopComponent
],
  templateUrl: './nft-explore.component.html',
  styleUrl: './nft-explore.component.scss'
})
export class NftExploreComponent {
  AgentsData = AgentsData;
}
